"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMessage = void 0;
function logMessage(reader) {
    return {
        character: reader.skip(0x10).nextString(0x20),
        message: reader.nextString(),
    };
}
exports.logMessage = logMessage;
//# sourceMappingURL=logMessage.js.map