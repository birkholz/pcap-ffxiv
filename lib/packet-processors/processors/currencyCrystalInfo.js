"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyCrystalInfo = void 0;
function currencyCrystalInfo(reader) {
    return {
        containerSequence: reader.nextUInt32(),
        containerId: reader.nextUInt16(),
        slot: reader.nextUInt16(),
        quantity: reader.nextUInt32(),
        unknown: reader.nextUInt32(),
        catalogId: reader.nextUInt32(),
        unknown1: reader.nextUInt32(),
        unknown2: reader.nextUInt32(),
        unknown3: reader.nextUInt32(),
    };
}
exports.currencyCrystalInfo = currencyCrystalInfo;
//# sourceMappingURL=currencyCrystalInfo.js.map