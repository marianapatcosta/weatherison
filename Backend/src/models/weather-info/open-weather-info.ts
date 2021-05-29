import WeatherInfo from "./weather-info";
import { degreesToCompassDirection } from "./utils/data-conversion";

export default class OpenMapInfo extends WeatherInfo {
  constructor(weatherData) {
    super(
      weatherData.dt * 1000,
      weatherData.weather[0].description,
      weatherData.rain?.["1h"] || weatherData.rain,
      undefined,
      weatherData.temp,
      weatherData.feels_like,
      weatherData.humidity,
      weatherData.wind_speed,
      degreesToCompassDirection(weatherData.wind_deg),
      weatherData.weather[0].icon,
      weatherData.temp.max,
      weatherData.temp.min,
      weatherData.uvi,
      undefined,
      weatherData.sunrise * 1000,
      weatherData.sunset * 1000
    );
  }
}
