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
exports.marketTaxRates = void 0;
function marketTaxRates(packet, reader) {
    return __assign(__assign({}, packet), { limsaLominsa: reader.skip(0x08).nextUInt32(), gridania: reader.nextUInt32(), uldah: reader.nextUInt32(), ishgard: reader.nextUInt32(), kugane: reader.nextUInt32(), crystarium: reader.nextUInt32(), oldSharlayan: reader.nextUInt32(), tuliyollal: reader.nextUInt32(), validUntil: reader.nextUInt32() });
}
exports.marketTaxRates = marketTaxRates;
//# sourceMappingURL=marketTaxRates.js.map