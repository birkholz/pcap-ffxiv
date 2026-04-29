"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketBoardItemListingCount = void 0;
function marketBoardItemListingCount(reader, constants) {
    return {
        // Known values: default=0; rate limited=0x70000003
        status: reader.nextUInt32(),
        quantity: reader.nextUInt32(),
    };
}
exports.marketBoardItemListingCount = marketBoardItemListingCount;
//# sourceMappingURL=marketBoardItemListingCount.js.map