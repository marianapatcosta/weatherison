"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fahrenheitToCelsiusConverter = (temperature) => Math.round((temperature - 32) / 1.8 * 10) / 10;
exports.fahrenheitToCelsiusConverter = fahrenheitToCelsiusConverter;
const milesPerHourToMetersPerSecond = (speed) => Math.round((speed * 0.44704) * 10) / 10;
exports.milesPerHourToMetersPerSecond = milesPerHourToMetersPerSecond;
const kilometersPerHourToMetersPerSecond = (speed) => Math.round((speed * 0.277777778) * 10) / 10;
exports.kilometersPerHourToMetersPerSecond = kilometersPerHourToMetersPerSecond;
//# sourceMappingURL=unit-conversions.js.map