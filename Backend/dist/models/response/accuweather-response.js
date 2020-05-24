"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_response_1 = __importDefault(require("./weather-response"));
const accuweather_info_1 = __importDefault(require("../weather-info/accuweather-info"));
class AccuweatherResponse extends weather_response_1.default {
    constructor(name, response) {
        super(name, new accuweather_info_1.default(response.current[0]), new accuweather_info_1.default(response.daily[0]), new accuweather_info_1.default(response.daily[1]), new accuweather_info_1.default(response.daily[2]), new accuweather_info_1.default(response.daily[3]), new accuweather_info_1.default(response.daily[4]));
    }
}
exports.default = AccuweatherResponse;
//# sourceMappingURL=accuweather-response.js.map