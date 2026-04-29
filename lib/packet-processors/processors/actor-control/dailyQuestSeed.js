"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyQuestSeed = void 0;
function dailyQuestSeed(packet) {
    return __assign(__assign({}, packet), { dailyQuestSeed: +packet.param1 });
}
exports.dailyQuestSeed = dailyQuestSeed;
//# sourceMappingURL=dailyQuestSeed.js.map