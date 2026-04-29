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
exports.itemDesynthResult = void 0;
function itemDesynthResult(packet, reader) {
    var unknown01 = reader.nextUInt32();
    var itemResult = reader.nextUInt32();
    return __assign(__assign({}, packet), { unknown1: unknown01, itemId: itemResult % 1000000, itemHq: itemResult > 1000000, result: Array(3)
            .fill(null)
            .map(function () {
            var itemResult = reader.nextUInt32();
            return {
                itemId: itemResult % 1000000,
                itemHq: itemResult > 1000000,
                itemQuantity: reader.nextUInt32(),
            };
        }) });
}
exports.itemDesynthResult = itemDesynthResult;
//# sourceMappingURL=itemDesynthResult.js.map