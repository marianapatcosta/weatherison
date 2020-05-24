"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_response_1 = __importDefault(require("./weather-response"));
const ipma_info_1 = __importDefault(require("../weather-info/ipma-info"));
class IpmaResponse extends weather_response_1.default {
    constructor(name, response, lang) {
        super(name, undefined, new ipma_info_1.default(response[0], lang), new ipma_info_1.default(response[1], lang), new ipma_info_1.default(response[2], lang), new ipma_info_1.default(response[3], lang), new ipma_info_1.default(response[4], lang));
        this.lang = lang;
    }
}
exports.default = IpmaResponse;
//# sourceMappingURL=ipma-response.js.map