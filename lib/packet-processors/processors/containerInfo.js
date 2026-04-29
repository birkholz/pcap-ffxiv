"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containerInfo = void 0;
function containerInfo(reader) {
    return {
        sequence: reader.nextUInt32(),
        numItems: reader.nextUInt32(),
        containerId: reader.nextUInt32(),
        unknown: reader.nextUInt32(),
    };
}
exports.containerInfo = containerInfo;
//# sourceMappingURL=containerInfo.js.map