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
const http_error_1 = __importDefault(require("../models/http-error"));
const constants_1 = __importDefault(require("../utils/constants"));
const http_status_code_enum_1 = __importDefault(require("./http-status-code.enum"));
const { CONNECTION_ERROR, DEFAULT_LANGUAGE, GEOLOCATION_URL, LOCATION_NOT_FOUND_ERROR, } = constants_1.default;
exports.default = (latitude, longitude, location, lang = DEFAULT_LANGUAGE) => __awaiter(void 0, void 0, void 0, function* () {
    const geolocationParams = latitude && longitude ? `${longitude},${latitude}` : location;
    const url = GEOLOCATION_URL(geolocationParams, lang);
    try {
        const response = yield axios_1.default.get(url);
        const responseData = response.data;
        if (!responseData || responseData.features.length === 0) {
            throw new http_error_1.default(LOCATION_NOT_FOUND_ERROR, http_status_code_enum_1.default.UNPROCESSABLE_ENTITY);
        }
        const geolocation = {
            latitude: latitude ? latitude : responseData.features[0].center[1],
            longitude: longitude ? longitude : responseData.features[0].center[0],
            placeName: responseData.features[0].place_name,
        };
        return geolocation;
    }
    catch (error) {
        throw new http_error_1.default(error.message || CONNECTION_ERROR("geocoding"), //se não se acede ao serviço, ja vem uma msg de erro e a nossa fallback nc é mostrada
        error.code || http_status_code_enum_1.default.INTERNAL_SERVER_ERROR);
    }
});
//# sourceMappingURL=coordinates.js.map