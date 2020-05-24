"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_response_1 = __importDefault(require("./weather-response"));
const dark_sky_info_1 = __importDefault(require("../weather-info/dark-sky-info"));
class DarkSkyResponse extends weather_response_1.default {
    constructor(name, response) {
        super(name, new dark_sky_info_1.default(response.currently), new dark_sky_info_1.default(response.daily.data[0]), new dark_sky_info_1.default(response.daily.data[1]), new dark_sky_info_1.default(response.daily.data[2]), new dark_sky_info_1.default(response.daily.data[3]), new dark_sky_info_1.default(response.daily.data[4]));
    }
}
exports.default = DarkSkyResponse;
//# sourceMappingURL=dark-sky-response.js.map