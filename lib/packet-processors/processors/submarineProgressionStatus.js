"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submarineProgressionStatus = void 0;
var SECTORS_DATA_LENGTH = 15;
var MASK = 0x1;
function getProgression(buffer) {
    var progression = [];
    for (var i = 0; i < SECTORS_DATA_LENGTH; i++) {
        var currentByte = buffer.nextUInt8();
        for (var j = 0; j < 8; j++) {
            var sector = !!((currentByte & (MASK << j)) >> j);
            progression.push(sector);
        }
    }
    return progression;
}
function submarineProgressionStatus(buffer) {
    return {
        unlockedSubmarineCount: buffer.nextUInt8(),
        unlockedSectors: getProgression(buffer),
        exploredSectors: getProgression(buffer),
    };
}
exports.submarineProgressionStatus = submarineProgressionStatus;
//# sourceMappingURL=submarineProgressionStatus.js.map