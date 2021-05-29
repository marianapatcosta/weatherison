import WeatherInfo from "./weather-info";
import { degreesToCompassDirection } from "./utils/data-conversion";

export default class ClimaCell extends WeatherInfo {
  constructor(weatherData) {
    super(
      weatherData.observation_time.value,
      weatherData.weather_code.value.replace(/[-_.]/g, " "),
      weatherData.precipitation?.value ||
        weatherData.precipitation[0]?.max.value,
      weatherData.precipitation_probability?.value,
      weatherData.temp.value,
      weatherData.feels_like.value,
      weatherData.humidity.value
        ? weatherData.humidity.value
        : `${weatherData.humidity[0]?.min.value} - ${weatherData.humidity[1]?.max.value}`,
      weatherData.wind_speed.value !== undefined
        ? weatherData.wind_speed.value
        : `${weatherData.wind_speed[0]?.min.value} - ${weatherData.wind_speed[1]?.max.value}`,
      weatherData.wind_direction.value
        ? degreesToCompassDirection(weatherData.wind_direction.value)
        : `${degreesToCompassDirection(
            weatherData.wind_direction[0].min.value
          )} / ${degreesToCompassDirection(
            weatherData.wind_direction[1].max.value
          )}`,
      weatherData.weather_code.value,
      weatherData.temp[1]?.max.value,
      weatherData.temp[0]?.min.value,
      undefined,
      weatherData.moon_phase?.value,
      weatherData.sunrise?.value,
      weatherData.sunset?.value
    );
  }
}
