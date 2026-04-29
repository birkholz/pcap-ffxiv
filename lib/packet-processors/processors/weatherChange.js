"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherChange = void 0;
function weatherChange(reader) {
    return {
        weatherId: reader.nextUInt32(),
        delay: reader.nextFloat(),
    };
}
exports.weatherChange = weatherChange;
//# sourceMappingURL=weatherChange.js.map