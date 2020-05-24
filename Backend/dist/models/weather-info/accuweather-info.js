"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_info_1 = __importDefault(require("./weather-info"));
const data_conversion_1 = require("./utils/data-conversion");
class Accuweather extends weather_info_1.default {
    constructor(weatherData) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        super(weatherData.LocalObservationDateTime || weatherData.Date, weatherData.WeatherText || weatherData.Day.LongPhrase, ((_a = weatherData.Precip1hr) === null || _a === void 0 ? void 0 : _a.Metric.Value) || ((_b = weatherData.Day) === null || _b === void 0 ? void 0 : _b.PrecipitationIntensity), (_c = weatherData.Day) === null || _c === void 0 ? void 0 : _c.PrecipitationProbability, (_d = weatherData.Temperature.Metric) === null || _d === void 0 ? void 0 : _d.Value, (_e = weatherData.RealFeelTemperature.Metric) === null || _e === void 0 ? void 0 : _e.Value, weatherData.RelativeHumidity, data_conversion_1.milesPerHourToMetersPerSecond(((_f = weatherData.Wind) === null || _f === void 0 ? void 0 : _f.Speed.Imperial.Value) ||
            weatherData.Day.Wind.Speed.Value), data_conversion_1.degreesToCompassDirection(((_g = weatherData.Wind) === null || _g === void 0 ? void 0 : _g.Direction.Degrees) ||
            weatherData.Day.Wind.Direction.Degrees), weatherData.WeatherIcon || weatherData.Day.Icon, data_conversion_1.fahrenheitToCelsiusConverter((_h = weatherData.Temperature.Maximum) === null || _h === void 0 ? void 0 : _h.Value), data_conversion_1.fahrenheitToCelsiusConverter((_j = weatherData.Temperature.Minimum) === null || _j === void 0 ? void 0 : _j.Value), weatherData.UVIndex !== undefined
            ? weatherData.UVIndex
            : weatherData.AirAndPollen[5].Value, (_k = weatherData.Moon) === null || _k === void 0 ? void 0 : _k.Phase, (_l = weatherData.Sun) === null || _l === void 0 ? void 0 : _l.EpochRise, (_m = weatherData.Sun) === null || _m === void 0 ? void 0 : _m.EpochSet);
    }
}
exports.default = Accuweather;
//# sourceMappingURL=accuweather-info.js.map