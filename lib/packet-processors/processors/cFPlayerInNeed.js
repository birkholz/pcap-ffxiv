"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cFPlayerInNeed = void 0;
function cFPlayerInNeed(reader) {
    return {
        // Ordered by roulette	id
        inNeeds: reader.nextBuffer(0x10),
    };
}
exports.cFPlayerInNeed = cFPlayerInNeed;
//# sourceMappingURL=cFPlayerInNeed.js.map