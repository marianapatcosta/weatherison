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
const http_error_1 = __importDefault(require("../models/http-error"));
const fetch_forecast_response_1 = __importDefault(require("../utils/fetch-forecast-response"));
exports.default = (queryParams) => __awaiter(void 0, void 0, void 0, function* () {
    const latitude = +queryParams.latitude;
    const longitude = +queryParams.longitude;
    const location = queryParams.location
        ? queryParams.location.toString()
        : undefined;
    const lang = queryParams.lang
        ? queryParams.lang.toString()
        : undefined;
    const apiLocationKey = queryParams.apiLocationKey
        ? queryParams.apiLocationKey.toString()
        : undefined;
    const apiName = queryParams.apiName
        ? queryParams.apiName.toString()
        : undefined;
    try {
        const forecastResponse = yield fetch_forecast_response_1.default(latitude, longitude, lang, apiLocationKey, apiName);
        return {
            forecast: forecastResponse,
            location,
            latitude,
            longitude,
        };
    }
    catch (error) {
        throw new http_error_1.default(error.message, error.code);
    }
});
//# sourceMappingURL=weather-service.js.map