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
const forecast_1 = __importDefault(require("../utils/forecast"));
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const latitude = +req.query.latitude;
    const longitude = +req.query.longitude;
    const placeName = req.query.placeName
        ? req.query.placeName.toString()
        : undefined;
    const lang = req.query.lang ? req.query.lang.toString() : undefined;
    let forecastResponse;
    try {
        forecastResponse = yield forecast_1.default(latitude, longitude, lang);
    }
    catch (error) {
        return next(error);
    }
    return res.status(200).send({
        forecast: forecastResponse,
        location: placeName,
        latitude,
        longitude,
    });
});
//# sourceMappingURL=weather-controllers.js.map