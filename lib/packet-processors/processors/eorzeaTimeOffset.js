"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eorzeaTimeOffset = void 0;
function eorzeaTimeOffset(reader) {
    return {
        timestamp: reader.nextUInt64(),
    };
}
exports.eorzeaTimeOffset = eorzeaTimeOffset;
//# sourceMappingURL=eorzeaTimeOffset.js.map