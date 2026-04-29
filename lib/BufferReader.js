"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BufferReader = void 0;
var BufferReader = /** @class */ (function () {
    function BufferReader(buf) {
        this.buf = buf;
        this.offset = 0;
    }
    Object.defineProperty(BufferReader.prototype, "buffer", {
        get: function () {
            return this.buf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BufferReader.prototype, "remaining", {
        get: function () {
            return this.buf.byteLength - this.offset;
        },
        enumerable: false,
        configurable: true
    });
    BufferReader.prototype.reset = function () {
        this.offset = 0;
        return this;
    };
    BufferReader.prototype.move = function (offset) {
        this.offset = offset;
        return this;
    };
    BufferReader.prototype.skip = function (length) {
        this.offset += length;
        return this;
    };
    BufferReader.prototype.slice = function (begin, end) {
        return this.buf.slice(begin, end);
    };
    BufferReader.prototype.nextString = function (length) {
        if (!length) {
            length = this.buf.length - this.offset;
        }
        this.offset += length;
        try {
            return this.buf.toString("utf8", this.offset - length, this.offset).replace(/\u0000/gm, "");
        }
        catch (e) {
            return "";
        }
    };
    BufferReader.prototype.nextBuffer = function (length, asReader) {
        var buf = this.buf.slice(this.offset, this.offset + length);
        this.offset += length;
        if (asReader) {
            return new BufferReader(buf);
        }
        return buf;
    };
    BufferReader.prototype.restAsBuffer = function (asReader) {
        var length = this.buf.length - this.offset;
        var buf = this.buf.slice(this.offset, this.offset + length);
        if (asReader) {
            return new BufferReader(buf);
        }
        return buf;
    };
    BufferReader.prototype.nextInt8 = function (fallback) {
        if (fallback === void 0) { fallback = 0; }
        return this.tryNext("readInt8", 1, fallback);
    };
    BufferReader.prototype.nextUInt8 = function (fallback) {
        if (fallback === void 0) { fallback = 0; }
        return this.tryNext("readUInt8", 1, fallback);
    };
    BufferReader.prototype.nextUInt16 = function (fallback) {
        if (fallback === void 0) { fallback = 0; }
        return this.tryNext("readUInt16LE", 2, 0);
    };
    BufferReader.prototype.nextInt16 = function (fallback) {
        if (fallback === void 0) { fallback = 0; }
        return this.tryNext("readInt16LE", 2, 0);
    };
    BufferReader.prototype.nextUInt32 = function (fallback) {
        if (fallback === void 0) { fallback = 0; }
        return this.tryNext("readUInt32LE", 4, 0);
    };
    BufferReader.prototype.nextInt32 = function (fallback) {
        if (fallback === void 0) { fallback = 0; }
        return this.tryNext("readInt32LE", 4, 0);
    };
    BufferReader.prototype.nextUInt64 = function (fallback) {
        if (fallback === void 0) { fallback = 0; }
        return this.tryNext("readBigUInt64LE", 8, BigInt(0));
    };
    BufferReader.prototype.nextInt64 = function (fallback) {
        if (fallback === void 0) { fallback = 0; }
        return this.tryNext("readBigInt64LE", 8, BigInt(0));
    };
    BufferReader.prototype.nextFloat = function (fallback) {
        if (fallback === void 0) { fallback = 0; }
        return this.tryNext("readFloatLE", 4, 0);
    };
    BufferReader.prototype.nextDouble = function (fallback) {
        if (fallback === void 0) { fallback = 0; }
        return this.tryNext("readDoubleLE", 8, 0);
    };
    BufferReader.prototype.nextPosition3UInt16 = function () {
        return {
            x: this.nextUInt16(),
            y: this.nextUInt16(),
            z: this.nextUInt16(),
        };
    };
    BufferReader.prototype.nextPosition3 = function () {
        return {
            x: this.nextFloat(),
            y: this.nextFloat(),
            z: this.nextFloat(),
        };
    };
    BufferReader.prototype.debug = function (length) {
        console.log("Current reader status:");
        console.log("Offset: ".concat(this.offset, " (0x").concat(this.offset.toString(16), ")"));
        console.log("Remaining: ".concat(this.buf.length - this.offset, " (0x").concat((this.buf.length - this.offset).toString(16), ")"));
        if (length) {
            var bufStr = this.buf.slice(this.offset, this.offset + length).toString("hex");
            console.log("Next ".concat(length, " Bytes: ").concat(bufStr.replace(/(.{1,2})/g, "$1 ")));
        }
        return this;
    };
    BufferReader.prototype.tryNext = function (fn, size, fallback) {
        try {
            if (typeof this.buf[fn] !== "function") {
                console.error("Tried to read data using a non-function buffer prop, this shouldn't happen: ".concat(String(fn)));
                return fallback;
            }
            var value = this.buf[fn](this.offset);
            this.offset += size;
            return value;
        }
        catch (e) {
            //TODO Log a warning or something?
            return fallback;
        }
    };
    return BufferReader;
}());
exports.BufferReader = BufferReader;
//# sourceMappingURL=BufferReader.js.map