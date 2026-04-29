"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryModifyHandler = void 0;
function inventoryOperation(action, offset) {
    var value = action - offset;
    switch (value) {
        case 0:
            return "discard";
        case 1:
            return "move";
        case 2:
            return "swap";
        case 4:
            return "transferCrystal";
        case 5:
            return "merge";
        case 3:
        case 6:
        case 10:
            return "split";
        case 15:
            return "transferItemPlayerRetainer";
        case 16:
            return "transferItemRetainerPlayer";
        case 18:
            return "transferGil";
    }
    return "unknown".concat(action);
}
function inventoryModifyHandler(reader, constants) {
    return {
        sequence: reader.nextUInt32(),
        action: inventoryOperation(reader.nextUInt16(), constants.InventoryOperationBaseValue),
        fromContainer: reader.skip(6).nextUInt16(),
        fromSlot: reader.skip(2).nextUInt8(),
        toContainer: reader.skip(15).nextUInt16(),
        toSlot: reader.skip(2).nextUInt8(),
        splitCount: reader.skip(3).nextUInt32(),
    };
}
exports.inventoryModifyHandler = inventoryModifyHandler;
//# sourceMappingURL=inventoryModifyHandler.js.map