"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freeCompanyInfo = void 0;
function freeCompanyInfo(buffer) {
    return {
        freeCompanyId: buffer.nextUInt64(),
        unknown0: Array(37)
            .fill(null)
            .map(function () {
            return buffer.nextUInt8();
        }),
        rank: buffer.nextUInt8(),
        unknown1: Array(34)
            .fill(null)
            .map(function () { return buffer.nextUInt8(); }),
    };
}
exports.freeCompanyInfo = freeCompanyInfo;
//# sourceMappingURL=freeCompanyInfo.js.map