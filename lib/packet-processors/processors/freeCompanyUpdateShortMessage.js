"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freeCompanyUpdateShortMessage = void 0;
function freeCompanyUpdateShortMessage(reader) {
    return {
        message: reader.nextString(0x10),
    };
}
exports.freeCompanyUpdateShortMessage = freeCompanyUpdateShortMessage;
//# sourceMappingURL=freeCompanyUpdateShortMessage.js.map