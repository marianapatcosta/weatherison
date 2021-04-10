import WeatherInfo from "./weather-info";
import {
  degreesToCompassDirection,
  moonLunationFractionToMoonPhase,
} from "./utils/data-conversion";

export default class WeatherBitInfo extends WeatherInfo {
  constructor(weatherData, private lang: string) {
    super(
      weatherData.ob_time || weatherData.datetime,
      weatherData.weather.description,
      weatherData.precip,
      weatherData.pop,
      weatherData.temp,
      weatherData.app_temp,
      weatherData.rh,
      weatherData.wind_spd,
      degreesToCompassDirection(weatherData.wind_dir),
      weatherData.weather.icon,
      weatherData.max_temp,
      weatherData.min_temp,
      weatherData.uv,
      moonLunationFractionToMoonPhase(weatherData.moon_phase_lunation, lang),
      weatherData.sunrise_ts,
      weatherData.sunset_ts
    );
  }
}
