"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketBoardItemListingHistory = void 0;
function marketBoardItemListingHistory(reader, constants) {
    return {
        itemCatalogId: reader.nextUInt32(),
        listings: Array(20)
            .fill(null)
            .map(function () {
            var chunk = reader.nextBuffer(48, true);
            return {
                salePrice: chunk.nextUInt32(),
                purchaseTime: chunk.nextUInt32(),
                quantity: chunk.nextUInt32(),
                isHq: Boolean(chunk.nextUInt8()),
                onMannequin: Boolean(chunk.nextUInt8()),
                buyerName: chunk.nextString(0x20),
                padding: chunk.nextUInt16(),
            };
        })
            .filter(function (sale) { return sale.salePrice !== 0; }),
    };
}
exports.marketBoardItemListingHistory = marketBoardItemListingHistory;
//# sourceMappingURL=marketBoardItemListingHistory.js.map