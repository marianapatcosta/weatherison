"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fetch_api_location_key_1 = __importDefault(require("../middleware/fetch-api-location-key"));
const fetch_geolocation_data_1 = __importDefault(require("../middleware/fetch-geolocation-data"));
const weather_controller_1 = __importDefault(require("../controllers/weather-controller"));
const router = express_1.Router();
/* router.use(fetchCoordinates); */
router.get("/", fetch_geolocation_data_1.default, fetch_api_location_key_1.default, weather_controller_1.default);
exports.default = router;
//# sourceMappingURL=weather-routes.js.map