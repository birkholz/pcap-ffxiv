"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventFinish = void 0;
function eventFinish(reader) {
    return {
        eventId: reader.nextUInt32(),
    };
}
exports.eventFinish = eventFinish;
//# sourceMappingURL=eventFinish.js.map