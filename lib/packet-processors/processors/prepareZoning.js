"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareZoning = void 0;
function prepareZoning(reader) {
    return {
        logMessage: reader.nextUInt32(),
        targetZone: reader.nextUInt16(),
        animation: reader.nextUInt16(),
        param4: reader.nextUInt8(),
        hideChar: reader.nextUInt8(),
        fadeOut: reader.nextUInt8(),
        param7: reader.nextUInt8(),
        fadeOutTime: reader.nextUInt8(),
        unknown: reader.nextUInt8(),
        padding: reader.nextUInt16(),
    };
}
exports.prepareZoning = prepareZoning;
//# sourceMappingURL=prepareZoning.js.map