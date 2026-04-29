"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistentEffect = void 0;
function persistentEffect(reader) {
    return {
        actionId: reader.nextUInt16(),
        effectId: reader.nextUInt16(),
    };
}
exports.persistentEffect = persistentEffect;
//# sourceMappingURL=persistentEffect.js.map