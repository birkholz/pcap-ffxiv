"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorGauge = void 0;
function actorGauge(reader) {
    return {
        classJobId: reader.nextUInt8(),
        data: Array(15)
            .fill(null)
            .map(function () { return reader.nextUInt8(); }),
    };
}
exports.actorGauge = actorGauge;
//# sourceMappingURL=actorGauge.js.map