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
const http_status_code_enum_1 = __importDefault(require("../utils/http-status-code.enum"));
const constants_1 = __importDefault(require("../utils/constants"));
const find_coordinates_1 = __importDefault(require("../utils/find-coordinates"));
const { NO_LOCATION_ERROR } = constants_1.default;
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const latitude = +req.query.latitude;
    const longitude = +req.query.longitude;
    const location = req.query.location
        ? req.query.location.toString()
        : undefined;
    const lang = req.query.lang ? req.query.lang.toString() : undefined;
    let geolocation;
    if (latitude && longitude) {
        try {
            geolocation = yield find_coordinates_1.default(latitude, longitude, location, lang);
            req.query.location = geolocation.location;
            return next();
        }
        catch (error) {
            return next(error);
        }
    }
    if (!location) {
        return next(new http_error_1.default(NO_LOCATION_ERROR, http_status_code_enum_1.default.BAD_REQUEST));
    }
    if (location) {
        try {
            geolocation = yield find_coordinates_1.default(latitude, longitude, location, lang);
            req.query.latitude = geolocation.latitude.toString();
            req.query.longitude = geolocation.longitude.toString();
            req.query.location = geolocation.location;
            next();
        }
        catch (error) {
            return next(error);
        }
    }
});
//# sourceMappingURL=fetch-geolocation-data.js.map