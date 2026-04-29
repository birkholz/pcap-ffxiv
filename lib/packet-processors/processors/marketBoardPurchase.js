"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketBoardPurchase = void 0;
function marketBoardPurchase(reader) {
    return {
        itemId: reader.nextUInt32(),
        quantity: reader.skip(4).nextUInt32(),
    };
}
exports.marketBoardPurchase = marketBoardPurchase;
//# sourceMappingURL=marketBoardPurchase.js.map