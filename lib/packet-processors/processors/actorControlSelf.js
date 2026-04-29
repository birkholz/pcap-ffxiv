"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorControlSelf = void 0;
function actorControlSelf(reader) {
    return {
        category: reader.nextUInt16(),
        padding: reader.nextUInt16(),
        param1: reader.nextUInt32(),
        param2: reader.nextUInt32(),
        param3: reader.nextUInt32(),
        param4: reader.nextUInt32(),
        param5: reader.nextUInt32(),
        param6: reader.nextUInt32(),
        padding1: reader.nextUInt32(),
    };
}
exports.actorControlSelf = actorControlSelf;
//# sourceMappingURL=actorControlSelf.js.map