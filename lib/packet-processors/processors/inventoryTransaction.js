"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryTransaction = void 0;
function inventoryTransaction(reader) {
    return {
        sequence: reader.nextUInt32(),
        type: reader.nextUInt16(),
        padding1: reader.nextUInt16(),
        ownerId: reader.nextUInt32(),
        containerId: reader.nextUInt32(),
        slot: reader.nextUInt16(),
        padding2: reader.nextUInt16(),
        quantity: reader.nextUInt32(),
        catalogId: reader.nextUInt32(),
        someActorId: reader.nextUInt32(),
        targetStorageId: reader.nextInt32(),
        padding3: reader.nextUInt16(),
        padding4: reader.nextUInt8(),
    };
}
exports.inventoryTransaction = inventoryTransaction;
//# sourceMappingURL=inventoryTransaction.js.map