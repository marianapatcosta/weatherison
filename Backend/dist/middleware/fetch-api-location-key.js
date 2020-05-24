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
const apis_enum_1 = __importDefault(require("../utils/apis.enum"));
const http_error_1 = __importDefault(require("../models/http-error"));
const ipma_api_location_key_1 = __importDefault(require("../utils/api-location-apis/ipma-api-location-key"));
const accuweather_api_location_key_1 = __importDefault(require("../utils/api-location-apis/accuweather-api-location-key"));
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const apiName = req.query.apiName.toString();
    const latitude = +req.query.latitude;
    const longitude = +req.query.longitude;
    const location = req.query.location
        ? req.query.location.toString()
        : undefined;
    let apiLocationKey;
    if (apiName !== apis_enum_1.default.IPMA && apiName !== apis_enum_1.default.ACCUWEATHER) {
        return next();
    }
    try {
        apiLocationKey =
            apiName === apis_enum_1.default.IPMA
                ? yield ipma_api_location_key_1.default(location)
                : yield accuweather_api_location_key_1.default(latitude, longitude);
        req.query.apiLocationKey = apiLocationKey;
        return next();
    }
    catch (error) {
        return next(new http_error_1.default(error.message, error.code));
    }
});
//# sourceMappingURL=fetch-api-location-key.js.map