"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorFreeSpawn = void 0;
function actorFreeSpawn(reader) {
    return {
        spawnId: reader.nextUInt32(),
        actorId: reader.nextUInt32(),
    };
}
exports.actorFreeSpawn = actorFreeSpawn;
//# sourceMappingURL=actorFreeSpawn.js.map