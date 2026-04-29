"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHpMpTp = void 0;
function updateHpMpTp(reader) {
    return {
        hp: reader.nextUInt32(),
        mp: reader.nextUInt16(),
        tp: reader.nextUInt16(),
        gp: reader.nextUInt16(),
    };
}
exports.updateHpMpTp = updateHpMpTp;
//# sourceMappingURL=updateHpMpTp.js.map