"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorMove = void 0;
function actorMove(reader) {
    return {
        headRotation: reader.nextUInt8(),
        rotation: reader.nextUInt8(),
        animationType: reader.nextUInt8(),
        animationState: reader.nextUInt8(),
        animationSpeed: reader.nextUInt8(),
        pos: reader.nextPosition3(),
    };
}
exports.actorMove = actorMove;
//# sourceMappingURL=actorMove.js.map