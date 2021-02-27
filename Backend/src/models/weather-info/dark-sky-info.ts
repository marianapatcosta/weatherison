import WeatherInfo from "./weather-info";
import {
  degreesToCompassDirection,
  moonLunationFractionToMoonPhase,
} from "./utils/data-conversion";

export default class DarkSkyInfo extends WeatherInfo {
  constructor(weatherData, private lang: string) {
    super(
      weatherData.time * 1000,
      weatherData.summary,
      weatherData.precipIntensity,
      weatherData.precipProbability,
      weatherData.temperature,
      weatherData.apparentTemperature,
      weatherData.humidity * 100,
      weatherData.windSpeed,
      degreesToCompassDirection(weatherData.windBearing),
      weatherData.icon,
      weatherData.temperatureMax,
      weatherData.temperatureMin,
      weatherData.uvIndex,
      moonLunationFractionToMoonPhase(weatherData.moonPhase, lang),
      weatherData.sunriseTime * 1000,
      weatherData.sunsetTime * 1000
    );
  }
}
