"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClassInfo = void 0;
function updateClassInfo(reader) {
    return {
        classId: reader.nextUInt8(),
        level1: reader.nextUInt8(),
        level: reader.nextUInt16(),
        nextLevelIndex: reader.nextUInt32(),
        currentExp: reader.nextUInt32(),
        restedExp: reader.nextUInt32(),
    };
}
exports.updateClassInfo = updateClassInfo;
//# sourceMappingURL=updateClassInfo.js.map