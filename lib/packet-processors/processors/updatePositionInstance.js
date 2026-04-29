"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePositionInstance = void 0;
function updatePositionInstance(reader) {
    return {
        rotation: reader.nextFloat(),
        interpolateRotation: reader.nextFloat(),
        pos: reader.nextPosition3(),
        interpolatePos: reader.nextPosition3(),
    };
}
exports.updatePositionInstance = updatePositionInstance;
//# sourceMappingURL=updatePositionInstance.js.map