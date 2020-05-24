"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractWeatherResponse {
    constructor(name, current, today, tomorrow, in2Days, in3Days, in4Days) {
        this.name = name;
        this.current = current;
        this.today = today;
        this.tomorrow = tomorrow;
        this.in2Days = in2Days;
        this.in3Days = in3Days;
        this.in4Days = in4Days;
    }
}
exports.default = AbstractWeatherResponse;
//# sourceMappingURL=abstract-weather-response.js.map