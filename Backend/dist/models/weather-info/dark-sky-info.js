"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_info_1 = __importDefault(require("./weather-info"));
const data_conversion_1 = require("./utils/data-conversion");
class DarkSkyInfo extends weather_info_1.default {
    constructor(weatherData) {
        super(weatherData.time, weatherData.summary, weatherData.precipIntensity, weatherData.precipProbability, weatherData.temperature, weatherData.apparentTemperature, weatherData.humidity * 100, weatherData.windSpeed, data_conversion_1.degreesToCompassDirection(weatherData.windBearing), weatherData.icon, weatherData.temperatureMax, weatherData.temperatureMin, weatherData.uvIndex, weatherData.moonPhase, weatherData.sunriseTime, weatherData.sunsetTime);
    }
}
exports.default = DarkSkyInfo;
//# sourceMappingURL=dark-sky-info.js.map