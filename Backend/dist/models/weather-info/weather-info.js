"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeatherInfo {
    constructor(time, description, precipitationIntensity, precipitationProbability, temperature, apparentTemperature, humidity, windSpeed, windDirection, icon, temperatureMax, temperatureMin, uvIndex, moonPhase, sunrise, sunset) {
        this.time = time;
        this.description = description;
        this.precipitationIntensity = precipitationIntensity;
        this.precipitationProbability = precipitationProbability;
        this.temperature = temperature;
        this.apparentTemperature = apparentTemperature;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.windDirection = windDirection;
        this.icon = icon;
        this.temperatureMax = temperatureMax;
        this.temperatureMin = temperatureMin;
        this.uvIndex = uvIndex;
        this.moonPhase = moonPhase;
        this.sunrise = sunrise;
        this.sunset = sunset;
    }
}
exports.default = WeatherInfo;
//# sourceMappingURL=weather-info.js.map