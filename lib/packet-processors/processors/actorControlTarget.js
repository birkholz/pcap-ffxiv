"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorControlTarget = void 0;
function actorControlTarget(reader) {
    return {
        category: reader.nextUInt16(),
        padding: reader.nextUInt16(),
        param1: reader.nextUInt32(),
        param2: reader.nextUInt32(),
        param3: reader.nextUInt32(),
        param4: reader.nextUInt32(),
        padding1: reader.nextUInt32(),
        targetId: reader.nextUInt64(),
    };
}
exports.actorControlTarget = actorControlTarget;
//# sourceMappingURL=actorControlTarget.js.map