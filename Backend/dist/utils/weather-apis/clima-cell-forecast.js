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
const clima_cell_response_1 = __importDefault(require("../../models/response/clima-cell-response"));
const http_error_1 = __importDefault(require("../../models/http-error"));
const http_status_code_enum_1 = __importDefault(require("../http-status-code.enum"));
const constants_1 = __importDefault(require("../constants"));
const { CONNECTION_ERROR, CLIMA_CELL_CURRENT_URL, CLIMA_CELL_DAILY_URL, CLIMA_CELL_HOURLY_URL, } = constants_1.default;
exports.default = (latitude, longitude, apiName) => __awaiter(void 0, void 0, void 0, function* () {
    const urls = [
        CLIMA_CELL_CURRENT_URL(latitude, longitude),
        CLIMA_CELL_DAILY_URL(latitude, longitude),
    ];
    try {
        const responseArray = yield Promise.all(urls.map((url) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield axios_1.default.get(url);
            return response.data;
        })));
        const fullResponse = {
            current: responseArray[0],
            daily: responseArray[1],
        };
        return new clima_cell_response_1.default(apiName, fullResponse);
    }
    catch (error) {
        throw new http_error_1.default(error.message || CONNECTION_ERROR("weather"), error.code || http_status_code_enum_1.default.INTERNAL_SERVER_ERROR);
    }
});
//# sourceMappingURL=clima-cell-forecast.js.map