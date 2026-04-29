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
exports.eventPlay32 = void 0;
var eventPlayN_1 = require("./eventPlayN");
function eventPlay32(reader) {
    return __assign({}, (0, eventPlayN_1.eventPlayN)(reader));
}
exports.eventPlay32 = eventPlay32;
//# sourceMappingURL=eventPlay32.js.map