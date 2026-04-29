"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePositionHandler = void 0;
function updatePositionHandler(reader) {
    return {
        rotation: reader.nextFloat(),
        animationType: reader.nextUInt8(),
        animationState: reader.nextUInt8(),
        clientAnimationType: reader.nextUInt8(),
        headPosition: reader.nextUInt8(),
        pos: reader.nextPosition3(),
    };
}
exports.updatePositionHandler = updatePositionHandler;
//# sourceMappingURL=updatePositionHandler.js.map