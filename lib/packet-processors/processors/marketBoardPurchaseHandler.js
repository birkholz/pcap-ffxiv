"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketBoardPurchaseHandler = void 0;
function marketBoardPurchaseHandler(reader, constants) {
    return {
        retainerId: reader.nextUInt64(),
        listingId: reader.nextUInt64(),
        itemId: reader.nextUInt32(),
        pricePerUnit: reader.nextUInt32(),
        quantity: reader.nextUInt32(),
    };
}
exports.marketBoardPurchaseHandler = marketBoardPurchaseHandler;
//# sourceMappingURL=marketBoardPurchaseHandler.js.map