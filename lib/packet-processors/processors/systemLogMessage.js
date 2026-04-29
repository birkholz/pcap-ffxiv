"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemLogMessage = void 0;
function systemLogMessage(reader) {
    return {
        eventId: reader.nextUInt32(),
        param1: reader.nextUInt32(),
        // Links to ActionTimeline entry
        actionTimeline: reader.nextUInt32(),
        param3: reader.nextUInt32(),
    };
}
exports.systemLogMessage = systemLogMessage;
//# sourceMappingURL=systemLogMessage.js.map