"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_info_1 = __importDefault(require("./weather-info"));
const data_conversion_1 = require("./utils/data-conversion");
class WeatherBitInfo extends weather_info_1.default {
    constructor(weatherData) {
        super(weatherData.ob_time || weatherData.datetime, weatherData.weather.description, weatherData.precip, weatherData.pop, weatherData.temp, weatherData.app_temp, weatherData.rh, weatherData.wind_spd, data_conversion_1.degreesToCompassDirection(weatherData.wind_dir), weatherData.weather.icon, weatherData.max_temp, weatherData.min_temp, weatherData.uv, weatherData.moon_phase_lunation, weatherData.sunrise_ts, weatherData.sunset_ts);
    }
}
exports.default = WeatherBitInfo;
//# sourceMappingURL=weather-bit-info.js.map