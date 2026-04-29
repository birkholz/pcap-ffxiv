"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectSpawn = void 0;
function objectSpawn(reader) {
    return {
        spawnIndex: reader.nextUInt8(),
        objKind: reader.nextUInt8(),
        state: reader.nextUInt8(),
        unknown3: reader.nextUInt8(),
        objId: reader.nextUInt32(),
        actorId: reader.nextUInt32(),
        levelId: reader.nextUInt32(),
        unknown10: reader.nextUInt32(),
        someActorId14: reader.nextUInt32(),
        gimmickId: reader.nextUInt32(),
        scale: reader.nextFloat(),
        rotation: reader.nextUInt16(),
        housingLink: reader.nextUInt32(),
        position: reader.nextPosition3(),
    };
}
exports.objectSpawn = objectSpawn;
//# sourceMappingURL=objectSpawn.js.map