"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorOwner = void 0;
function actorOwner(reader) {
    return {
        type: reader.nextUInt32(),
        actorId: reader.nextUInt32(),
        actorId2: reader.nextUInt32(),
    };
}
exports.actorOwner = actorOwner;
//# sourceMappingURL=actorOwner.js.map