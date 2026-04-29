"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorControl = void 0;
function actorControl(reader) {
    return {
        category: reader.nextUInt16(),
        padding: reader.nextUInt16(),
        param1: reader.nextUInt32(),
        param2: reader.nextUInt32(),
        param3: reader.nextUInt32(),
        param4: reader.nextUInt32(),
        padding1: reader.nextUInt32(),
    };
}
exports.actorControl = actorControl;
//# sourceMappingURL=actorControl.js.map