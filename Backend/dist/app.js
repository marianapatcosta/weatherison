"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_error_1 = __importDefault(require("./models/http-error"));
const http_status_code_enum_1 = __importDefault(require("./utils/http-status-code.enum"));
const apis_routes_1 = __importDefault(require("./routes/apis-routes"));
const weather_routes_1 = __importDefault(require("./routes/weather-routes"));
const constants_1 = __importDefault(require("./utils/constants"));
const { GENERAL_ERROR, ROUTE_NOT_FOUND_ERROR } = constants_1.default;
const DEFAULT_PORT = 3000;
const app = express_1.default();
const port = +process.env.PORT || DEFAULT_PORT;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    next();
});
app.use("/apis", apis_routes_1.default);
app.use("/weather", weather_routes_1.default);
app.use((req, res, next) => {
    const error = new http_error_1.default(ROUTE_NOT_FOUND_ERROR, 404);
    throw error;
});
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res
        .status(error.code || http_status_code_enum_1.default.INTERNAL_SERVER_ERROR)
        .json({ error: error.message || GENERAL_ERROR });
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});
//# sourceMappingURL=app.js.map