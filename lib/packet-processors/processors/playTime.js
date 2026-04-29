"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playTime = void 0;
function playTime(reader) {
    var playtime = reader.nextUInt32();
    var days = (playtime / 1440) << 0;
    var hours = ((playtime - days * 1440) / 60) << 0;
    var minutes = (playtime - days * 1440 - hours * 60) << 0;
    return {
        playtime: playtime,
        days: days,
        hours: hours,
        minutes: minutes,
    };
}
exports.playTime = playTime;
//# sourceMappingURL=playTime.js.map