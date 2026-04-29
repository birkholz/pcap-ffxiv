"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.airshipStatusList = void 0;
var SECTORS_DATA_LENGTH = 4;
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
function airshipStatusList(buffer) {
    return {
        unlockedAirshipCount: buffer.nextUInt8(),
        unknown0: buffer.nextUInt8(),
        unknown1: buffer.nextUInt8(),
        unknown2: buffer.nextUInt8(),
        statusList: Array(4)
            .fill(null)
            .map(function () { return ({
            birthdate: buffer.nextUInt32(),
            returnTime: buffer.nextUInt32(),
            status: buffer.nextUInt16(),
            rank: buffer.nextUInt16(),
            name: buffer.nextString(20),
            padding: buffer.nextUInt32(),
        }); }),
        unlockedSectors: getProgression(buffer),
        exploredSectors: getProgression(buffer),
        unknown3: buffer.nextUInt16(),
    };
}
exports.airshipStatusList = airshipStatusList;
//# sourceMappingURL=airshipStatusList.js.map