"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorSetPos = void 0;
function actorSetPos(reader) {
    return {
        r16: reader.nextUInt16(),
        waitForLoad: reader.nextUInt8(),
        unknown: reader.nextUInt8(),
        unknown2: reader.nextUInt32(),
        pos: reader.nextPosition3(),
        unknown3: reader.nextUInt32(),
    };
}
exports.actorSetPos = actorSetPos;
//# sourceMappingURL=actorSetPos.js.map