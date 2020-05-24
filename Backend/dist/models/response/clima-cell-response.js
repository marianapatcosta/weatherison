"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_response_1 = __importDefault(require("./weather-response"));
const clima_cell_info_1 = __importDefault(require("../weather-info/clima-cell-info"));
class ClimaCellResponse extends weather_response_1.default {
    constructor(name, response) {
        super(name, new clima_cell_info_1.default(response.current), new clima_cell_info_1.default(response.daily[0]), new clima_cell_info_1.default(response.daily[1]), new clima_cell_info_1.default(response.daily[2]), new clima_cell_info_1.default(response.daily[3]), new clima_cell_info_1.default(response.daily[4]));
    }
}
exports.default = ClimaCellResponse;
//# sourceMappingURL=clima-cell-response.js.map