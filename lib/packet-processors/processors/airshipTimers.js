"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.airshipTimers = void 0;
function getSector(value) {
    return value === 128 ? -1 : value;
}
function airshipTimers(buffer) {
    return {
        timers: Array(4)
            .fill(null)
            .map(function () { return ({
            returnTime: buffer.nextUInt32(),
            airshipSpeed: buffer.nextUInt16(),
            name: buffer.nextString(20),
            padding1: buffer.nextInt16(),
            padding2: buffer.nextUInt8(),
            dest1: getSector(buffer.nextUInt8()),
            dest2: getSector(buffer.nextUInt8()),
            dest3: getSector(buffer.nextUInt8()),
            dest4: getSector(buffer.nextUInt8()),
            dest5: getSector(buffer.nextUInt8()),
            padding3: buffer.nextUInt16(),
        }); }),
    };
}
exports.airshipTimers = airshipTimers;
//# sourceMappingURL=airshipTimers.js.map