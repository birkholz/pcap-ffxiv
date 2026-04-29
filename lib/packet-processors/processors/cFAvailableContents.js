"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cFAvailableContents = void 0;
function cFAvailableContents(reader) {
    return {
        contents: reader.nextBuffer(0x48),
    };
}
exports.cFAvailableContents = cFAvailableContents;
//# sourceMappingURL=cFAvailableContents.js.map