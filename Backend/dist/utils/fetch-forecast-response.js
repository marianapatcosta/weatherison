"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apis_enum_1 = __importDefault(require("./apis.enum"));
const http_error_1 = __importDefault(require("../models/http-error"));
const http_status_code_enum_1 = __importDefault(require("./http-status-code.enum"));
const accuweather_forecast_1 = __importDefault(require("./weather-apis/accuweather-forecast"));
const clima_cell_forecast_1 = __importDefault(require("./weather-apis/clima-cell-forecast"));
const dark_sky_forecast_1 = __importDefault(require("./weather-apis/dark-sky-forecast"));
const ipma_forecast_1 = __importDefault(require("./weather-apis/ipma-forecast"));
const open_weather_forecast_1 = __importDefault(require("./weather-apis/open-weather-forecast"));
const weather_bit_forecast_1 = __importDefault(require("./weather-apis/weather-bit-forecast"));
const constants_1 = __importDefault(require("./constants"));
const { API_NOT_FOUND_ERROR } = constants_1.default;
exports.default = (latitude, longitude, lang, apiLocationKey, apiName) => {
    switch (apiName) {
        case apis_enum_1.default.DARK_SKY:
            return dark_sky_forecast_1.default(latitude, longitude, lang, apiName);
        case apis_enum_1.default.OPEN_WEATHER:
            return open_weather_forecast_1.default(latitude, longitude, lang, apiName);
        case apis_enum_1.default.IPMA:
            return ipma_forecast_1.default(apiLocationKey, lang, apiName);
        case apis_enum_1.default.CLIMA_CELL:
            return clima_cell_forecast_1.default(latitude, longitude, apiName);
        case apis_enum_1.default.ACCUWEATHER:
            return accuweather_forecast_1.default(apiLocationKey, lang, apiName);
        case apis_enum_1.default.WEATHER_BIT:
            return weather_bit_forecast_1.default(latitude, longitude, lang, apiName);
        default:
            throw new http_error_1.default(API_NOT_FOUND_ERROR, http_status_code_enum_1.default.NOT_FOUND);
    }
};
//# sourceMappingURL=fetch-forecast-response.js.map