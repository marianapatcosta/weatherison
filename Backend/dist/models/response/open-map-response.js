"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_weather_response_1 = __importDefault(require("./abstract-weather-response"));
const open_map_info_1 = __importDefault(require("../weather-info/open-map-info"));
class OpenMapResponse extends abstract_weather_response_1.default {
    constructor(name, response) {
        super(name, response.lat, response.lon, new open_map_info_1.default(response.current), new open_map_info_1.default(response.daily[0]), new open_map_info_1.default(response.daily[1]));
    }
}
exports.default = OpenMapResponse;
//# sourceMappingURL=open-map-response.js.map