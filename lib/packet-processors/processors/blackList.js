"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blackList = void 0;
function blackList(reader) {
    return {
        entries: Array(20)
            .fill(null)
            .map(function () {
            return {
                contentId: reader.nextUInt64(),
                name: reader.nextString(32),
            };
        }),
        sequence: reader.nextUInt16(),
    };
}
exports.blackList = blackList;
//# sourceMappingURL=blackList.js.map