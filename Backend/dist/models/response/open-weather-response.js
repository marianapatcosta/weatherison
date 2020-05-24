"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_response_1 = __importDefault(require("./weather-response"));
const open_weather_info_1 = __importDefault(require("../weather-info/open-weather-info"));
class OpenMapResponse extends weather_response_1.default {
    constructor(name, response) {
        super(name, new open_weather_info_1.default(response.current), new open_weather_info_1.default(response.daily[0]), new open_weather_info_1.default(response.daily[1]), new open_weather_info_1.default(response.daily[2]), new open_weather_info_1.default(response.daily[3]), new open_weather_info_1.default(response.daily[4]));
    }
}
exports.default = OpenMapResponse;
//# sourceMappingURL=open-weather-response.js.map