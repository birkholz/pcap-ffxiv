"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deucalion = void 0;
var fs_1 = require("fs");
var net_1 = require("net");
var BufferReader_1 = require("./BufferReader");
var models_1 = require("./models");
var events_1 = require("events");
var Operation;
(function (Operation) {
    Operation[Operation["DEBUG"] = 0] = "DEBUG";
    Operation[Operation["PING"] = 1] = "PING";
    Operation[Operation["EXIT"] = 2] = "EXIT";
    Operation[Operation["RECV"] = 3] = "RECV";
    Operation[Operation["SEND"] = 4] = "SEND";
    Operation[Operation["OPTION"] = 5] = "OPTION";
})(Operation || (Operation = {}));
var Deucalion = /** @class */ (function (_super) {
    __extends(Deucalion, _super);
    function Deucalion(logger, pid, name, bridgeTcpPort) {
        if (name === void 0) { name = "PCAP_FFXIV"; }
        var _this = _super.call(this) || this;
        _this.logger = logger;
        _this.pid = pid;
        _this.name = name;
        _this.bridgeTcpPort = bridgeTcpPort;
        /** Set to true by stop() to abort the startTcp retry loop. */
        _this._stopped = false;
        _this.pipe_path = "\\\\.\\pipe\\deucalion-".concat(pid);
        if (!/^[A-Za-z0-9_]+$/.test(_this.name)) {
            throw new Error("Please provide a name that matches ^[A-Za-z0-9_]+$");
        }
        return _this;
    }
    Object.defineProperty(Deucalion.prototype, "running", {
        get: function () {
            return this.readStream !== undefined || this._socket !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Deucalion.prototype.start = function () {
        return this.bridgeTcpPort !== undefined ? this.startTcp() : this.startPipe();
    };
    Deucalion.prototype.startPipe = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var tries = 0;
            var connectInterval = setInterval(function () {
                (0, fs_1.open)(_this.pipe_path, "r+", function (err, fd) {
                    if (err) {
                        _this.logger({
                            type: "error",
                            message: "Error while opening pipe ".concat(err.message),
                        });
                        tries++;
                        if (tries >= 5) {
                            clearInterval(connectInterval);
                            reject(err);
                        }
                        return;
                    }
                    _this.readStream = (0, fs_1.createReadStream)(_this.pipe_path, { fd: fd });
                    _this.writeStream = (0, fs_1.createWriteStream)(_this.pipe_path, { fd: fd });
                    _this.sendHandshake();
                    _this.setupDataListeners();
                    clearInterval(connectInterval);
                    resolve();
                });
            }, 200);
        });
    };
    Deucalion.prototype.startTcp = function () {
        var _this = this;
        this._stopped = false;
        return new Promise(function (resolve) {
            var tries = 0;
            var tryConnect = function () {
                if (_this._stopped)
                    return;
                var socket = (0, net_1.createConnection)({ host: "127.0.0.1", port: _this.bridgeTcpPort });
                socket.on("connect", function () {
                    if (_this._stopped) {
                        socket.destroy();
                        return;
                    }
                    _this._socket = socket;
                    _this.sendHandshake();
                    _this.setupDataListeners();
                    resolve();
                });
                socket.on("error", function (err) {
                    socket.destroy();
                    tries++;
                    // Log every ~5 seconds so the log isn't flooded
                    if (tries % 25 === 1) {
                        _this.logger({
                            type: "info",
                            message: "[TCP] Waiting for deucalion bridge on :".concat(_this.bridgeTcpPort, " (").concat(tries, " attempts)\u2026"),
                        });
                    }
                    if (!_this._stopped)
                        setTimeout(tryConnect, 200);
                });
            };
            tryConnect();
        });
    };
    Deucalion.prototype.sendHandshake = function () {
        var optionPayload = Buffer.alloc(9);
        optionPayload.writeUInt32LE(9, 0);
        optionPayload[4] = Operation.OPTION;
        optionPayload.writeUInt32LE((1 << 1) | (1 << 4), 5);
        this.send(optionPayload);
        var nicknameBufferSize = 9 + this.name.length;
        var nicknamePayload = Buffer.alloc(nicknameBufferSize);
        nicknamePayload.writeUInt32LE(nicknameBufferSize, 0);
        nicknamePayload[4] = Operation.DEBUG;
        nicknamePayload.writeUInt32LE(9000, 5);
        nicknamePayload.write(this.name, 9, "utf-8");
        this.send(nicknamePayload);
    };
    Deucalion.prototype.stop = function () {
        var _this = this;
        this._stopped = true;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.closeStreams()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        if (!err_1.message.includes("EBADF")) {
                            this.logger({
                                type: "error",
                                message: err_1,
                            });
                        }
                        return [3 /*break*/, 3];
                    case 3:
                        this.emit("closed");
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Deucalion.prototype.send = function (data) {
        var _a;
        return this._socket ? this._socket.write(data) : (_a = this.writeStream) === null || _a === void 0 ? void 0 : _a.write(data);
    };
    Deucalion.prototype.nextPacket = function (buffer) {
        var reader = new BufferReader_1.BufferReader(buffer);
        /**
         * Removing 9 bytes because it includes:
         *  - size: 4B
         *  - op: 1B
         *  - channel: 4B
         */
        var size = reader.nextUInt32() - 9;
        var packet = {
            size: size,
            op: reader.nextInt8(),
            channel: reader.nextUInt32(),
            data: reader.nextBuffer(size),
        };
        var remaining = reader.restAsBuffer();
        if (packet.data.length === packet.size) {
            return {
                packet: packet,
                remaining: remaining.length === 0 ? null : remaining,
            };
        }
        else {
            return {
                packet: null,
                remaining: buffer,
            };
        }
    };
    Deucalion.prototype.handleDeucalionPacket = function (packet) {
        switch (packet.op) {
            case Operation.DEBUG:
                this.handleDebug(packet.data);
                break;
            case Operation.PING:
                // Ignore ping for now
                break;
            case Operation.RECV:
                this.handleXIVPacket(packet.channel, models_1.Origin.Server, packet.data);
                break;
            case Operation.SEND:
                this.handleXIVPacket(packet.channel, models_1.Origin.Client, packet.data);
                break;
        }
    };
    Deucalion.prototype.handleDebug = function (data) {
        this.logger({
            type: "info",
            message: "DEUCALION: ".concat(data.toString()),
        });
    };
    Deucalion.prototype.handleXIVPacket = function (channel, origin, data) {
        // Let's ignore non-zone packets
        if (channel !== 1) {
            return;
        }
        var reader = new BufferReader_1.BufferReader(data);
        var packet = {
            origin: origin,
            header: {
                sourceActor: reader.nextUInt32(),
                targetActor: reader.nextUInt32(),
                ipcTimestamp: reader.nextUInt64(),
                reserved: reader.nextInt16(),
                type: reader.nextInt16(),
                padding: reader.nextInt16(),
                serverId: reader.nextInt16(),
                timestamp: reader.nextUInt32(),
                padding1: reader.nextUInt32(),
            },
            data: reader.restAsBuffer(),
        };
        this.emit("packet", packet);
    };
    Deucalion.prototype.closeStreams = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a, _b;
            try {
                if (_this._socket) {
                    _this._socket.destroy();
                    _this._socket = undefined;
                }
                else {
                    (_a = _this.readStream) === null || _a === void 0 ? void 0 : _a.close();
                    (_b = _this.writeStream) === null || _b === void 0 ? void 0 : _b.close();
                }
                resolve();
            }
            catch (err) {
                reject(err);
            }
        });
    };
    Deucalion.prototype.setupDataListeners = function () {
        var _this = this;
        var _a;
        var readable = (_a = this._socket) !== null && _a !== void 0 ? _a : this.readStream;
        if (!readable) {
            return;
        }
        readable.on("data", function (data) {
            var _a = _this.nextPacket(data), packet = _a.packet, remaining = _a.remaining;
            while (packet !== null) {
                _this.handleDeucalionPacket(packet);
                if (remaining) {
                    var next = _this.nextPacket(remaining);
                    packet = next.packet;
                    remaining = next.remaining;
                }
                else {
                    packet = null;
                    remaining = null;
                }
            }
            if (remaining) {
                _this.logger({
                    type: "log",
                    message: "Remaining ! 0x".concat(remaining.toString("hex")),
                });
                _this.remaining = remaining;
            }
            else {
                delete _this.remaining;
            }
        });
        readable.on("close", function () {
            _this.logger({
                type: "info",
                message: "Client closed",
            });
            _this.closeStreams()
                .then(function () {
                _this.emit("closed");
            })
                .catch(function () {
                _this.emit("closed");
            });
        });
        readable.on("end", function () {
            _this.logger({
                type: "info",
                message: "Pipe end",
            });
        });
        readable.on("error", function (err) {
            // Close happened
            if (err.message.includes("EBADF")) {
                return;
            }
            // Game closed
            if (err.message.includes("EOF")) {
                return;
            }
            _this.logger({
                type: "error",
                message: "Deucalion error: ".concat(err.message),
            });
            if (err.message.includes("ENOENT")) {
                console.error(err);
            }
            else {
                _this.emit("error", err);
            }
        });
    };
    return Deucalion;
}(events_1.EventEmitter));
exports.Deucalion = Deucalion;
//# sourceMappingURL=Deucalion.js.map