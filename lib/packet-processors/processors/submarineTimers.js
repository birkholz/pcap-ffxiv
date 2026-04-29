"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submarineTimers = void 0;
function submarineTimers(buffer) {
    return {
        timers: Array(4)
            .fill(null)
            .map(function () { return ({
            returnTime: buffer.nextUInt32(),
            submarineSpeed: buffer.nextUInt16(),
            unknown0: buffer.nextUInt16(),
            name: buffer.nextString(20),
            padding1: buffer.nextUInt16(),
            padding2: buffer.nextUInt8(),
            dest1: buffer.nextUInt8(),
            dest2: buffer.nextUInt8(),
            dest3: buffer.nextUInt8(),
            dest4: buffer.nextUInt8(),
            dest5: buffer.nextUInt8(),
        }); }),
    };
}
exports.submarineTimers = submarineTimers;
//# sourceMappingURL=submarineTimers.js.map