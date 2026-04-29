"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cFRegisterDuty = void 0;
function cFRegisterDuty(reader) {
    return {
        rouletteId: reader.skip(4).nextUInt8(),
        contentId: reader.nextUInt16(),
    };
}
exports.cFRegisterDuty = cFRegisterDuty;
//# sourceMappingURL=cFRegisterDuty.js.map