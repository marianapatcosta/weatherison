"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dark_sky_response_1 = __importDefault(require("../models/response/dark-sky-response"));
const http_error_1 = __importDefault(require("../models/http-error"));
const open_weather_response_1 = __importDefault(require("../models/response/open-weather-response"));
const fetch_api_location_key_1 = __importDefault(require("./fetch-api-location-key"));
const constants_1 = __importDefault(require("../utils/constants"));
const http_status_code_enum_1 = __importDefault(require("./http-status-code.enum"));
const apis_enum_1 = __importDefault(require("./apis.enum"));
const ipma_response_1 = __importDefault(require("../models/response/ipma-response"));
const clima_cell_response_1 = __importDefault(require("../models/response/clima-cell-response"));
const { API_NOT_FOUND_ERROR, CLIMA_CELL_CURRENT_URL, CLIMA_CELL_DAILY_URL, CLIMA_CELL_HOURLY_URL, CONNECTION_ERROR, DARK_SKY_URL, DEFAULT_LANGUAGE, IPMA_URL, OPEN_WEATHER_URL, } = constants_1.default;
exports.default = (latitude, longitude, location, lang = DEFAULT_LANGUAGE, apiName = "dark-sky") => __awaiter(void 0, void 0, void 0, function* () {
    const apiLocationKey = yield fetch_api_location_key_1.default(apiName, location);
    const url = getUri(apiName, latitude, longitude, apiLocationKey, lang);
    try {
        if (apiName === apis_enum_1.default.CLIMA_CELL) {
            return getResponseClimaCell(apiName, latitude, longitude);
        }
        const response = yield axios_1.default.get(url);
        const responseData = response.data;
        /*  if (responseData.error) { //PARA QUANDO LOCALIDADES EXISTEM MAS N EXISTEM NA WEATHER API
          throw new HttpError(LOCATION_NOT_FOUND_ERROR, 404);
        } */
        return getResponse(apiName, responseData, lang);
    }
    catch (error) {
        throw new http_error_1.default(error.message || CONNECTION_ERROR("weather"), error.code || http_status_code_enum_1.default.INTERNAL_SERVER_ERROR);
    }
});
const getUri = (apiName, latitude, longitude, apiLocationKey, lang) => {
    switch (apiName) {
        case "dark-sky":
            return DARK_SKY_URL(latitude, longitude, lang);
        case "open-weather":
            return OPEN_WEATHER_URL(latitude, longitude, lang);
        case "ipma":
            return IPMA_URL(apiLocationKey);
        case "climacell":
            return '';
        default:
            throw new http_error_1.default(API_NOT_FOUND_ERROR, http_status_code_enum_1.default.NOT_FOUND);
    }
};
const getResponse = (apiName, responseData, lang) => {
    switch (apiName) {
        case apis_enum_1.default.DARK_SKY:
            return new dark_sky_response_1.default(apiName, responseData);
        case apis_enum_1.default.OPEN_WEATHER:
            return new open_weather_response_1.default(apiName, responseData);
        case apis_enum_1.default.IPMA:
            return new ipma_response_1.default(apiName, responseData["data"], lang);
        case apis_enum_1.default.CLIMA_CELL:
        //return new ClimaCellResponse(apiName, responseData["data"]);
        default:
            throw new http_error_1.default(API_NOT_FOUND_ERROR, http_status_code_enum_1.default.NOT_FOUND);
    }
};
const getResponseClimaCell = (apiName, latitude, longitude) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const urls = [
            CLIMA_CELL_CURRENT_URL(latitude, longitude),
            CLIMA_CELL_DAILY_URL(latitude, longitude),
            CLIMA_CELL_HOURLY_URL(latitude, longitude),
        ];
        //const fullResponse = {};
        console.log(CLIMA_CELL_CURRENT_URL(latitude, longitude));
        const response = yield axios_1.default.get(CLIMA_CELL_CURRENT_URL(latitude, longitude));
        const fullResponse = response.data;
        /*   const fullResponse = await Promise.all(
            urls.map(async (url) => {
              const response = await axios.get(url);
              const responseData = response.data;
            })
          ); */
        console.log(fullResponse);
        return new clima_cell_response_1.default(apiName, fullResponse);
    }
    catch (error) {
        throw new http_error_1.default(error.message || CONNECTION_ERROR("weather"), error.code || http_status_code_enum_1.default.INTERNAL_SERVER_ERROR);
    }
});
//# sourceMappingURL=forecast.js.map