"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadJson = void 0;
var https_1 = __importDefault(require("https"));
function downloadJson(uri) {
    return new Promise(function (resolve, reject) {
        var req = https_1.default.request(new URL(uri), function (res) {
            var data = [];
            res.setEncoding("utf8");
            res.on("data", function (chunk) { return data.push(chunk); });
            res.on("end", function () {
                try {
                    resolve(JSON.parse(data.join("")));
                }
                catch (e) {
                    reject(e);
                }
            });
        });
        req.on("error", function (err) {
            reject(err);
        });
        req.end();
    });
}
exports.downloadJson = downloadJson;
//# sourceMappingURL=json-downloader.js.map