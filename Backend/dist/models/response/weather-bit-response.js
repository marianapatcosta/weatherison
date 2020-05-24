"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_response_1 = __importDefault(require("./weather-response"));
const weather_bit_info_1 = __importDefault(require("../weather-info/weather-bit-info"));
class WeatherBitResponse extends weather_response_1.default {
    constructor(name, response) {
        super(name, new weather_bit_info_1.default(response.current[0]), new weather_bit_info_1.default(response.daily[0]), new weather_bit_info_1.default(response.daily[1]), new weather_bit_info_1.default(response.daily[2]), new weather_bit_info_1.default(response.daily[3]), new weather_bit_info_1.default(response.daily[4]));
    }
}
exports.default = WeatherBitResponse;
//# sourceMappingURL=weather-bit-response.js.map