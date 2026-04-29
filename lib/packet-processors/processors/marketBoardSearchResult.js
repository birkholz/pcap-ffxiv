"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketBoardSearchResult = void 0;
function marketBoardSearchResult(reader) {
    return {
        items: Array(20)
            .fill(null)
            .map(function () {
            var chunk = reader.nextBuffer(8, true);
            return {
                itemCatalogId: chunk.nextUInt32(),
                quantity: chunk.nextUInt16(),
                demand: chunk.nextUInt16(),
            };
        }),
        itemIndexEnd: reader.nextUInt32(),
        padding1: reader.nextUInt32(),
        itemIndexStart: reader.nextUInt32(),
        requestId: reader.nextUInt32(),
    };
}
exports.marketBoardSearchResult = marketBoardSearchResult;
//# sourceMappingURL=marketBoardSearchResult.js.map