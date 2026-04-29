"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.effectResult = void 0;
function effectResult(reader) {
    return {
        unknown1: reader.nextUInt32(),
        globalSequence: reader.nextUInt32(),
        actorId: reader.nextUInt32(),
        currentHp: reader.nextUInt32(),
        maxHp: reader.nextUInt32(),
        currentMp: reader.nextUInt16(),
        unknown2: reader.nextUInt8(),
        classId: reader.nextUInt8(),
        shieldPercentage: reader.nextUInt8(),
        entryCount: reader.nextUInt8(),
        unknown3: reader.nextUInt16(),
        statusEntries: Array(4)
            .fill(null)
            .map(function () {
            var chunkReader = reader.nextBuffer(16 + 16, true);
            return {
                index: chunkReader.nextInt8(),
                unknown4: chunkReader.nextInt8(),
                id: chunkReader.nextUInt16(),
                param: chunkReader.nextUInt16(),
                unknown5: reader.nextUInt16(),
                duration: chunkReader.nextFloat(),
                sourceActorId: chunkReader.nextUInt32(),
            };
        }),
    };
}
exports.effectResult = effectResult;
//# sourceMappingURL=effectResult.js.map