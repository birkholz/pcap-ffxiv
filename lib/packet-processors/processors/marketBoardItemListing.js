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
exports.marketBoardItemListing = void 0;
function marketBoardItemListing(reader, constants) {
    return {
        listings: Array(10)
            .fill(null)
            .map(function () {
            return {
                listingId: reader.nextUInt64(),
                retainerId: reader.nextUInt64(),
                retainerOwnerId: reader.nextUInt64(),
                artisanId: reader.nextUInt64(),
                pricePerUnit: reader.nextUInt32(),
                totalTax: reader.nextUInt32(),
                quantity: reader.nextUInt32(),
                itemId: reader.nextUInt32(),
                // Removed in 7.0; using placeholder value for backwards-compatibility
                lastReviewTime: 0,
                slot: reader.nextUInt16(),
                durability: reader.nextUInt16(),
                spiritbond: reader.nextUInt16(),
                materia: Array(5)
                    .fill(null)
                    .map(function () {
                    var entry = reader.nextUInt16();
                    return {
                        materiaId: entry & (0xff0 >> 4),
                        index: entry & 0xf,
                    };
                }),
                padding1: reader.nextUInt16(),
                padding2: reader.nextUInt32(),
                retainerName: reader.nextString(0x20),
                // Empty as of 7.0
                playerName: reader.nextString(0x20),
                hq: reader.nextUInt8() === 1,
                materiaCount: reader.nextUInt8(),
                onMannequin: reader.nextUInt8() === 1,
                city: reader.nextUInt8(),
                primaryDyeId: reader.nextUInt8(),
                secondaryDyeId: reader.nextUInt8(),
                padding3: reader.nextUInt32(),
            };
        })
            .map(function (listing) { return (__assign(__assign({}, listing), { 
            // Repack the data for backwards-compatibility
            dyeId: (listing.primaryDyeId << 8) | listing.secondaryDyeId })); })
            .filter(function (listing) { return listing.pricePerUnit > 0; }),
        listingIndexEnd: reader.nextUInt8(),
        listingIndexStart: reader.nextUInt8(),
        requestId: reader.nextUInt16(),
    };
}
exports.marketBoardItemListing = marketBoardItemListing;
//# sourceMappingURL=marketBoardItemListing.js.map