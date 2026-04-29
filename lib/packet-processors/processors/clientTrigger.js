"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientTrigger = void 0;
function clientTrigger(reader) {
    return {
        commandId: reader.nextUInt16(),
        // Named differently than in Sapphire because we count normally
        param1: reader.skip(2).nextUInt32(),
        param2: reader.nextUInt32(),
        param3: reader.nextUInt32(),
        param4: reader.nextUInt32(),
        param5: reader.nextUInt32(),
        param6: reader.nextUInt64(),
    };
}
exports.clientTrigger = clientTrigger;
//# sourceMappingURL=clientTrigger.js.map