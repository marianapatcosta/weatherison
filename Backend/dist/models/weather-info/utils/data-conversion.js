"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const degreesToCompassDirection = (degrees) => {
    const compassDirection = [
        "N",
        "NE",
        "E",
        "SE",
        "S",
        "SW",
        "W",
        "NW",
    ];
    const convertor = Math.floor(degrees / 45 + 0.5);
    return compassDirection[convertor % 8];
};
exports.degreesToCompassDirection = degreesToCompassDirection;
const fahrenheitToCelsiusConverter = (temperature) => Math.round(((temperature - 32) / 1.8) * 10) / 10;
exports.fahrenheitToCelsiusConverter = fahrenheitToCelsiusConverter;
const kilometersPerHourToMetersPerSecond = (speed) => Math.round(speed * 0.277777778 * 10) / 10;
exports.kilometersPerHourToMetersPerSecond = kilometersPerHourToMetersPerSecond;
const milesPerHourToMetersPerSecond = (speed) => Math.round(speed * 0.44704 * 10) / 10;
exports.milesPerHourToMetersPerSecond = milesPerHourToMetersPerSecond;
const moonLunationFractionToMoonPhase = (fraction, lang) => {
    const cases = {
        0: lang === "pt" ? "Lua nova" : "New moon",
        // fraction >= 0.05 && fraction < 0.25: lang === "pt" ? "Lua crescente côncava" : "Waxing crescent",
        0.25: lang === "pt" ? "Lua quarto crescente" : "First quarter moon",
        //fraction >= 0.26 && fraction < 0.50: lang === "pt" ? "Lua crescente gibosa" : "Waxing gibbous",
        0.5: lang === "pt" ? "Lua cheia" : "Full Moon",
        //fraction >= 0.56 && fraction < 0.75: lang === "pt" ? "Lua minguante gibosa : "Waning gibbous",
        0.75: lang === "pt" ? "Lua quarto minguante" : "Last quarter moon",
    };
    return cases[fraction] || "-";
};
exports.moonLunationFractionToMoonPhase = moonLunationFractionToMoonPhase;
//# sourceMappingURL=data-conversion.js.map