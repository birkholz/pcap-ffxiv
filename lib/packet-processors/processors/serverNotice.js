"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverNotice = void 0;
var displayFlags = {
    0: "chatLog",
    2: "noDisplay",
    4: "onScreen",
    5: "onScreenAndChatLog",
};
function serverNotice(reader) {
    var flag = reader.nextUInt8();
    return {
        displayFlag: flag,
        displayFlagType: displayFlags[flag],
        message: reader.nextString(),
    };
}
exports.serverNotice = serverNotice;
//# sourceMappingURL=serverNotice.js.map