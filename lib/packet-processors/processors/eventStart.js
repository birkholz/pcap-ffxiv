"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventStart = void 0;
function eventStart(reader) {
    return {
        actorId: reader.nextUInt64(),
        eventId: reader.nextUInt32(),
    };
}
exports.eventStart = eventStart;
//# sourceMappingURL=eventStart.js.map