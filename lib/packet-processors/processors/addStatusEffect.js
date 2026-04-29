"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStatusEffect = void 0;
function addStatusEffect(reader) {
    return {
        effectId: reader.skip(0x1a).nextUInt16(),
    };
}
exports.addStatusEffect = addStatusEffect;
//# sourceMappingURL=addStatusEffect.js.map