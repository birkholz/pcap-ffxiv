"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemMarketBoardInfo = void 0;
function itemMarketBoardInfo(reader) {
    return {
        sequence: reader.nextUInt32(),
        containerId: reader.nextUInt32(),
        slot: reader.nextUInt32(),
        unknown0: reader.nextUInt32(),
        unitPrice: reader.nextUInt32(),
    };
}
exports.itemMarketBoardInfo = itemMarketBoardInfo;
//# sourceMappingURL=itemMarketBoardInfo.js.map