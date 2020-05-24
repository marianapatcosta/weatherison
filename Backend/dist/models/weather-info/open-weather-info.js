"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_info_1 = __importDefault(require("./weather-info"));
const data_conversion_1 = require("./utils/data-conversion");
class OpenMapInfo extends weather_info_1.default {
    constructor(weatherData) {
        var _a;
        super(weatherData.dt, weatherData.weather[0].description, ((_a = weatherData.rain) === null || _a === void 0 ? void 0 : _a["1h"]) || weatherData.rain, undefined, weatherData.temp, weatherData.feels_like, weatherData.humidity, weatherData.wind_speed, data_conversion_1.degreesToCompassDirection(weatherData.wind_deg), weatherData.weather[0].icon, weatherData.temp.max, weatherData.temp.min, weatherData.uvi, undefined, weatherData.sunrise, weatherData.sunset);
    }
}
exports.default = OpenMapInfo;
//# sourceMappingURL=open-weather-info.js.map