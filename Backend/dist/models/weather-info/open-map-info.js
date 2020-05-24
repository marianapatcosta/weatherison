"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_info_1 = __importDefault(require("./weather-info"));
class OpenMapInfo extends weather_info_1.default {
    constructor(weatherData) {
        super(weatherData.dt, weatherData.weather[0].description, weatherData.weather[0].main, weatherData.precipProbability, weatherData.temp, weatherData.feels_like, weatherData.humidity, weatherData.wind_speed, weatherData.weather[0].icon, weatherData.temp.max, weatherData.temp.min, weatherData.uvi);
    }
}
exports.default = OpenMapInfo;
//# sourceMappingURL=open-map-info.js.map