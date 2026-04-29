"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = void 0;
function logout(reader) {
    return {
        flags1: reader.nextUInt32(0),
        flags2: reader.nextUInt32(0),
    };
}
exports.logout = logout;
//# sourceMappingURL=logout.js.map