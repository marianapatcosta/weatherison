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
const http_status_code_enum_1 = __importDefault(require("./http-status-code.enum"));
const constants_1 = __importDefault(require("./constants"));
const { IPMA_LOCATION_KEY_URL, LOCATION_NOT_FOUND_ERROR } = constants_1.default;
exports.default = (apiName, location) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(IPMA_LOCATION_KEY_URL);
        const responseData = response.data.data;
        const locationArray = location.split(",");
        const district = locationArray[locationArray.length - 2].trim();
        let apiDistrict = responseData.find((item) => item.local === district);
        apiDistrict = apiDistrict
            ? apiDistrict
            : responseData.find((item) => district.includes(item.local));
        if (!apiDistrict) {
            throw new http_error_1.default(LOCATION_NOT_FOUND_ERROR, http_status_code_enum_1.default.UNPROCESSABLE_ENTITY);
        }
        /*  if (responseData.error) { //PARA QUANDO LOCALIDADES EXISTEM MAS N EXISTEM NA WEATHER API
          throw new HttpError(LOCATION_NOT_FOUND_ERROR, 404);
        } */
        return apiDistrict.globalIdLocal;
    }
    catch (error) {
        throw new http_error_1.default(error.message, error.code);
    }
});
//# sourceMappingURL=fetch-api-location-key.js.map