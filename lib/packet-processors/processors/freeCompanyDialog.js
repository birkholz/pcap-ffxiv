"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freeCompanyDialog = void 0;
function freeCompanyDialog(buffer) {
    return {
        freeCompanyId: buffer.nextUInt64(),
        fcIcon: buffer.nextUInt32(),
        unknown2: buffer.nextUInt32(),
        unknown3: buffer.nextUInt64(),
        fcCredits: buffer.nextUInt64(),
        unknown4: buffer.nextUInt64(),
        unknown5: buffer.nextUInt32(),
        unknown6: buffer.nextUInt32(),
        unknown7: buffer.nextUInt8(),
        fcRank: buffer.nextUInt8(),
        fcName: buffer.nextString(21),
        padding1: buffer.nextUInt8(),
        fcTag: buffer.nextString(6),
        padding2: buffer.nextUInt8(),
    };
}
exports.freeCompanyDialog = freeCompanyDialog;
//# sourceMappingURL=freeCompanyDialog.js.map