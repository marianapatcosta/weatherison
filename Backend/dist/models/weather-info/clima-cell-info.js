"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_info_1 = __importDefault(require("./weather-info"));
const data_conversion_1 = require("./utils/data-conversion");
class ClimaCell extends weather_info_1.default {
    constructor(weatherData) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        super(weatherData.observation_time.value, weatherData.weather_code.value, ((_a = weatherData.precipitation) === null || _a === void 0 ? void 0 : _a.value) || ((_b = weatherData.precipitation[0]) === null || _b === void 0 ? void 0 : _b.max.value), (_c = weatherData.precipitation_probability) === null || _c === void 0 ? void 0 : _c.value, weatherData.temp.value, weatherData.feels_like.value, weatherData.humidity.value
            ? weatherData.humidity.value
            : `${(_d = weatherData.humidity[0]) === null || _d === void 0 ? void 0 : _d.min.value} - ${(_e = weatherData.humidity[1]) === null || _e === void 0 ? void 0 : _e.max.value}`, weatherData.wind_speed.value
            ? weatherData.wind_speed.value
            : `${(_f = weatherData.wind_speed[0]) === null || _f === void 0 ? void 0 : _f.min.value} - ${(_g = weatherData.wind_speed[1]) === null || _g === void 0 ? void 0 : _g.max.value}`, weatherData.wind_direction.value
            ? data_conversion_1.degreesToCompassDirection(weatherData.wind_direction.value)
            : `${data_conversion_1.degreesToCompassDirection(weatherData.wind_direction[0].min.value)} / ${data_conversion_1.degreesToCompassDirection(weatherData.wind_direction[1].max.value)}`, undefined, (_h = weatherData.temp[1]) === null || _h === void 0 ? void 0 : _h.max.value, (_j = weatherData.temp[0]) === null || _j === void 0 ? void 0 : _j.min.value, undefined, (_k = weatherData.moon_phase) === null || _k === void 0 ? void 0 : _k.value, (_l = weatherData.sunrise) === null || _l === void 0 ? void 0 : _l.value, (_m = weatherData.sunset) === null || _m === void 0 ? void 0 : _m.value);
    }
}
exports.default = ClimaCell;
//# sourceMappingURL=clima-cell-info.js.map