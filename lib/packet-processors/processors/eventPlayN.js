"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventPlayN = void 0;
function eventPlayN(reader) {
    var eventPlayN = {
        actorId: reader.nextUInt64(),
        eventId: reader.nextUInt32(),
        scene: reader.nextUInt16(),
        padding: reader.nextUInt16(),
        sceneFlags: reader.nextUInt32(),
        unknown: reader.nextUInt32(),
        paramSize: reader.nextUInt8(),
        padding1: reader.nextUInt8(),
        padding2: reader.nextUInt16(),
    };
    var paramsBuf = reader.nextBuffer(4 * 32);
    eventPlayN.params = Array.from(new Uint32Array(paramsBuf.buffer.slice(paramsBuf.byteOffset, paramsBuf.byteOffset + paramsBuf.byteLength)));
    return eventPlayN;
}
exports.eventPlayN = eventPlayN;
//# sourceMappingURL=eventPlayN.js.map