"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorCast = void 0;
function actorCast(reader) {
    return {
        actionId: reader.nextUInt16(),
        skillType: {
            0x1: "Normal",
            0x2: "ItemAction",
            0xd: "MountSkill",
        }[reader.nextUInt8()],
        castTime: reader.skip(5).nextFloat(),
        targetId: reader.nextUInt32(),
        rotation: reader.nextFloat(),
        pos: reader.nextPosition3UInt16(),
    };
}
exports.actorCast = actorCast;
//# sourceMappingURL=actorCast.js.map