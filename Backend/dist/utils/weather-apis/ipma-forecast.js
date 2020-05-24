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
const http_error_1 = __importDefault(require("../../models/http-error"));
const http_status_code_enum_1 = __importDefault(require("../http-status-code.enum"));
const ipma_response_1 = __importDefault(require("../../models/response/ipma-response"));
const constants_1 = __importDefault(require("../constants"));
const { CONNECTION_ERROR, DEFAULT_LANGUAGE, IPMA_URL, } = constants_1.default;
exports.default = (apiLocationKey, lang = DEFAULT_LANGUAGE, apiName) => __awaiter(void 0, void 0, void 0, function* () {
    const url = IPMA_URL(apiLocationKey);
    ;
    try {
        const response = yield axios_1.default.get(url);
        const responseData = response.data;
        return new ipma_response_1.default(apiName, responseData["data"], lang);
    }
    catch (error) {
        throw new http_error_1.default(error.message || CONNECTION_ERROR("weather"), error.code || http_status_code_enum_1.default.INTERNAL_SERVER_ERROR);
    }
});
//# sourceMappingURL=ipma-forecast.js.map