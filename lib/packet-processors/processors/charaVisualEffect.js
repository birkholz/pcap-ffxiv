"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.charaVisualEffect = void 0;
function charaVisualEffect(reader) {
    return {
        id: reader.nextUInt32(),
        padding: reader.nextUInt32(),
    };
}
exports.charaVisualEffect = charaVisualEffect;
//# sourceMappingURL=charaVisualEffect.js.map