"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.islandWorkshopSupplyDemand = void 0;
function islandWorkshopSupplyDemand(reader) {
    return {
        popularity: reader.nextUInt8(),
        predictedPopularity: reader.nextUInt8(),
        supplyDemand: new Array(reader.remaining).fill(null).map(function (_, i) {
            var value = reader.nextUInt8();
            return {
                id: i,
                supply: value >> 4,
                demand: value & 0xf,
            };
        }),
    };
}
exports.islandWorkshopSupplyDemand = islandWorkshopSupplyDemand;
//# sourceMappingURL=islandWorkshopSupplyDemand.js.map