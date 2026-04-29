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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptureInterface = void 0;
var events_1 = require("events");
var models_1 = require("./models");
var json_downloader_1 = require("./json-downloader");
var packet_processors_1 = require("./packet-processors/packet-processors");
var BufferReader_1 = require("./BufferReader");
var path_1 = require("path");
var fs_1 = require("fs");
var actor_control_packet_processors_1 = require("./packet-processors/actor-control-packet-processors");
var desynth_result_packet_processors_1 = require("./packet-processors/desynth-result-packet-processors");
var result_dialog_packet_processors_1 = require("./packet-processors/result-dialog-packet-processors");
var Deucalion_1 = require("./Deucalion");
var getPIDByName = function () { return -1; };
var injectPID = function () { return -1; };
try {
    // Optional Windows-only native module — not installed on Linux.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    (_a = require("@ffxiv-teamcraft/dll-inject"), getPIDByName = _a.getPIDByName, injectPID = _a.injectPID);
}
catch ( /* not available on this platform */_b) { /* not available on this platform */ }
var crypto_1 = __importDefault(require("crypto"));
var child_process_1 = require("child_process");
var CaptureInterface = /** @class */ (function (_super) {
    __extends(CaptureInterface, _super);
    function CaptureInterface(options) {
        var _this = this;
        var _a;
        _this = _super.call(this) || this;
        _this._opcodes = {
            C: {},
            S: {},
        };
        var defaultOptions = {
            region: "Global",
            deucalionDllPath: (0, path_1.join)(__dirname, "./deucalion/deucalion.dll"),
            filter: function () { return true; },
            logger: function (payload) { return console[payload.type](payload.message); },
        };
        _this._options = __assign(__assign({}, defaultOptions), options);
        _this._options.logger({
            type: "info",
            message: JSON.stringify(_this._options),
        });
        if (!_this._options.bridgeTcpPort && !(0, fs_1.existsSync)((_a = _this._options.deucalionDllPath) !== null && _a !== void 0 ? _a : "")) {
            throw new Error("Deucalion.dll not found in ".concat(_this._options.deucalionDllPath));
        }
        _this._packetDefs = packet_processors_1.packetProcessors;
        _this._superPacketDefs = {
            actorControl: actor_control_packet_processors_1.actorControlPacketProcessors,
            actorControlSelf: actor_control_packet_processors_1.actorControlPacketProcessors,
            actorControlTarget: actor_control_packet_processors_1.actorControlPacketProcessors,
            desynthResult: desynth_result_packet_processors_1.desynthResultPacketProcessors,
            resultDialog: result_dialog_packet_processors_1.resultDialogPacketProcessors,
        };
        _this._loadOpcodes().then(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._loadConstants()];
                    case 1:
                        _a.sent();
                        this.emit("ready");
                        return [2 /*return*/];
                }
            });
        }); });
        [
            "beforeExit",
            "SIGHUP",
            "SIGINT",
            "SIGQUIT",
            "SIGILL",
            "SIGTRAP",
            "SIGABRT",
            "SIGBUS",
            "SIGFPE",
            "SIGUSR1",
            "SIGSEGV",
            "SIGUSR2",
            "SIGTERM",
        ].forEach(function (sig) {
            process.on(sig, function (args) {
                _this.stop().then(function () {
                    _this._options.logger({
                        type: "error",
                        message: args,
                    });
                    process.exit(0);
                });
            });
        });
        return _this;
    }
    Object.defineProperty(CaptureInterface.prototype, "constants", {
        get: function () {
            return this._constants ? this._constants[this._options.region] : undefined;
        },
        enumerable: false,
        configurable: true
    });
    CaptureInterface.prototype.getXIVPIFFromTasklist = function () {
        return new Promise(function (resolve, reject) {
            (0, child_process_1.exec)("tasklist", function (err, stdout) {
                if (err) {
                    reject(err);
                }
                resolve(stdout
                    .split("\n")
                    .map(function (line) {
                    var match = /(ffxiv_dx11.exe)\s+(\d+)/gm.exec(line);
                    if (match) {
                        return {
                            name: match[1],
                            pid: +match[2],
                        };
                    }
                })
                    .find(Boolean) || null);
            });
        });
    };
    CaptureInterface.prototype.getXIVPID = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fromInjector = getPIDByName("ffxiv_dx11.exe");
            if (fromInjector > 0) {
                return resolve(fromInjector);
            }
            else {
                _this._options.logger({
                    type: "info",
                    message: "Process not found, falling back to tasklist",
                });
                _this.getXIVPIFFromTasklist()
                    .then(function (fromTaskList) {
                    if (fromTaskList) {
                        _this._options.logger({
                            type: "info",
                            message: "Found XIV process in tasklist",
                        });
                        return resolve(fromTaskList.pid);
                    }
                    else {
                        return reject(models_1.ErrorCodes.GAME_NOT_RUNNING);
                    }
                })
                    .catch(function (err) {
                    _this._options.logger({
                        type: "error",
                        message: err,
                    });
                });
            }
        });
    };
    CaptureInterface.prototype.start = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.constants) {
                    reject("Trying to start capture before ready event was emitted");
                }
                // In TCP bridge mode (Linux), the bridge process has already handled PID
                // lookup and DLL injection — just open the TCP connection directly.
                if (this._options.bridgeTcpPort !== undefined) {
                    this._deucalion = new Deucalion_1.Deucalion(this._options.logger, 0, this._options.name, this._options.bridgeTcpPort);
                    this._deucalion
                        .start()
                        .then(function () {
                        _this._deucalion.on("packet", function (p) { return _this._processSegment(p); });
                        _this._deucalion.on("closed", function () { return _this.emit("stopped"); });
                        _this._deucalion.on("error", function (err) { return _this.emit("error", err); });
                        resolve();
                    })
                        .catch(function (err) { return reject(err); });
                    return [2 /*return*/];
                }
                this.getXIVPID()
                    .then(function (pid) {
                    var dllPath = _this._options.deucalionDllPath;
                    var buff = (0, fs_1.readFileSync)(dllPath);
                    var expectedHash = dllPath.endsWith("_12.dll")
                        ? (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "dll_12.sum"), "utf-8")
                        : (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "dll.sum"), "utf-8");
                    var hash = crypto_1.default.createHash("sha256").update(buff).digest("hex");
                    console.log(dllPath);
                    if (hash !== expectedHash) {
                        _this._options.logger({
                            type: "error",
                            message: "Deucalion Hash missmatch",
                        });
                        reject("Hash missmatch");
                        return;
                    }
                    var res = injectPID(pid, dllPath);
                    _this._options.logger({
                        type: "info",
                        message: "Deucalion-inj res: [".concat(res, "] ").concat(res > 0 ? models_1.ErrorCodes[res] : ""),
                    });
                    if (res === 0) {
                        _this._deucalion = new Deucalion_1.Deucalion(_this._options.logger, pid, _this._options.name);
                        _this._deucalion
                            .start()
                            .then(function () {
                            _this._deucalion.on("packet", function (p) { return _this._processSegment(p); });
                            _this._deucalion.on("closed", function () { return _this.emit("stopped"); });
                            _this._deucalion.on("error", function (err) { return _this.emit("error", err); });
                            resolve();
                        })
                            .catch(function (err) { return reject(err); });
                    }
                    else {
                        reject(res);
                    }
                })
                    .catch(function (err) {
                    if (err) {
                        _this._options.logger({
                            type: "error",
                            message: models_1.ErrorCodes[err] || err,
                        });
                    }
                    reject(models_1.ErrorCodes.GAME_NOT_RUNNING);
                });
                return [2 /*return*/];
            });
        }); });
    };
    CaptureInterface.prototype.stop = function () {
        if (!this._deucalion) {
            this.emit("stopped");
            return Promise.resolve();
        }
        return this._deucalion.stop();
    };
    CaptureInterface.prototype.setRegion = function (region) {
        this._options.region = region;
        this.updateOpcodesCache();
    };
    CaptureInterface.opcodesToRegistry = function (opcodes) {
        return opcodes.reduce(function (acc, entry) {
            var _a;
            return __assign(__assign({}, acc), (_a = {}, _a[entry.opcode] = entry.name, _a));
        }, {});
    };
    CaptureInterface.prototype.updateOpcodesCache = function () {
        var _this = this;
        var _a;
        var regionOpcodes = (_a = this._opcodeLists) === null || _a === void 0 ? void 0 : _a.find(function (ol) { return ol.region === _this._options.region; });
        this._opcodes = {
            C: CaptureInterface.opcodesToRegistry((regionOpcodes === null || regionOpcodes === void 0 ? void 0 : regionOpcodes.lists.ClientZoneIpcType) || []),
            S: CaptureInterface.opcodesToRegistry((regionOpcodes === null || regionOpcodes === void 0 ? void 0 : regionOpcodes.lists.ServerZoneIpcType) || []),
        };
    };
    CaptureInterface.prototype._fetchFFXIVOpcodes = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var localDataPath, localPath, content, baseUrl, fallbackUrl;
            var _this = this;
            return __generator(this, function (_a) {
                localDataPath = this._options.localDataPath;
                localPath = localDataPath;
                if (localPath) {
                    try {
                        content = (0, fs_1.readFileSync)((0, path_1.join)(localPath, file), "utf-8");
                        this._options.logger({
                            type: "info",
                            message: "Loading ".concat(file, " from ").concat(localPath),
                        });
                        return [2 /*return*/, JSON.parse(content)];
                    }
                    catch (e) { }
                }
                this._options.logger({
                    type: "info",
                    message: "Loading ".concat(file, " from ").concat(this._options.region === "CN" ? "ffcafe" : "github"),
                });
                baseUrl = this._options.region === "CN"
                    ? "https://opcodes.xivcdn.com/"
                    : "https://raw.githubusercontent.com/karashiiro/FFXIVOpcodes/master/";
                fallbackUrl = this._options.region === "CN"
                    ? "https://raw.githubusercontent.com/karashiiro/FFXIVOpcodes/master/"
                    : "https://opcodes.xivcdn.com/";
                return [2 /*return*/, (0, json_downloader_1.downloadJson)("".concat(baseUrl).concat(file)).catch(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, json_downloader_1.downloadJson)("".concat(fallbackUrl).concat(file))];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    CaptureInterface.prototype._loadOpcodes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._fetchFFXIVOpcodes("opcodes.min.json")];
                    case 1:
                        _a._opcodeLists = _b.sent();
                        this.updateOpcodesCache();
                        return [2 /*return*/];
                }
            });
        });
    };
    CaptureInterface.prototype._loadConstants = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._fetchFFXIVOpcodes("constants.min.json")];
                    case 1:
                        _a._constants = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CaptureInterface.prototype._processSuperPacket = function (typeName, message, reader) {
        var subTypesEnum;
        // Let's get the corresponding enum
        switch (typeName) {
            case "actorControl":
            case "actorControlSelf":
            case "actorControlTarget":
                subTypesEnum = models_1.ActorControlType;
                break;
            case "desynthResult":
                subTypesEnum = models_1.DesynthResultType;
                break;
            case "resultDialog":
                subTypesEnum = models_1.ResultDialogType;
                break;
            default:
                this._options.logger({
                    type: "error",
                    message: "Got super packet of type ".concat(typeName, " with super processors but no type enum."),
                });
                return message;
        }
        var subTypeName = subTypesEnum[message.parsedIpcData.category];
        if (!subTypeName) {
            message.subType = "unknown".concat(message.parsedIpcData.category);
            // Unknown subtype, return packet as-is
            return message;
        }
        subTypeName = subTypeName[0].toLowerCase() + subTypeName.slice(1);
        message.subType = subTypeName;
        var superProcessor = this._superPacketDefs[typeName][subTypeName];
        if (!superProcessor) {
            // No processor for this sub packet, return packet as-is
            return message;
        }
        message.parsedIpcData = superProcessor(message.parsedIpcData, reader, this.constants, this._options.region);
        return message;
    };
    CaptureInterface.prototype._processSegment = function (packet) {
        var ipcData = packet.data;
        var opcode = packet.header.type;
        var typeName = this._opcodes[packet.origin][opcode] || "unknown";
        typeName = typeName[0].toLowerCase() + typeName.slice(1);
        var message = {
            origin: packet.origin,
            header: packet.header,
            opcode: packet.header.type,
            type: typeName,
            data: Buffer.from(packet.data),
        };
        if (this._options.filter(packet.header, typeName)) {
            // Unmarshal the data, if possible.
            if (this._packetDefs[typeName] && this._constants) {
                var processorName = typeName;
                var ipcDataReader = new BufferReader_1.BufferReader(ipcData);
                var processor = this._packetDefs[processorName];
                message.parsedIpcData = processor(ipcDataReader, this._constants[this._options.region], this._options.region);
                // If this is a super packet
                if (this._superPacketDefs[typeName]) {
                    message = this._processSuperPacket(typeName, message, ipcDataReader.reset());
                }
            }
            this.emit("message", message);
        }
    };
    return CaptureInterface;
}(events_1.EventEmitter));
exports.CaptureInterface = CaptureInterface;
//# sourceMappingURL=pcap-ffxiv.js.map