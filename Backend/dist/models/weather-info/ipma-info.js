"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_info_1 = __importDefault(require("./weather-info"));
const ipma_data_mappers_1 = require("./utils/ipma-data-mappers");
class IpmaInfo extends weather_info_1.default {
    constructor(weatherData, lang) {
        super(weatherData.forecastDate, ipma_data_mappers_1.getWeatherDescription(weatherData.idWeatherType, lang), ipma_data_mappers_1.getPrecipitationIntensity(weatherData.classPrecInt, lang), weatherData.precipitaProb, undefined, undefined, undefined, ipma_data_mappers_1.getWindSpeed(weatherData.classWindSpeed, lang), weatherData.predWindDir, undefined, weatherData.tMax, weatherData.tMin, undefined, undefined, undefined, undefined);
        this.lang = lang;
    }
}
exports.default = IpmaInfo;
//# sourceMappingURL=ipma-info.js.map