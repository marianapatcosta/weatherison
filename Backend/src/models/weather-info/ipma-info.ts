import WeatherInfo from "./weather-info";
import {
  getPrecipitationIntensity,
  getWeatherDescription,
  getWindSpeed,
} from "./utils/ipma-data-mappers";

export default class IpmaInfo extends WeatherInfo {
  constructor(weatherData, private lang: string) {
    super(
      weatherData.forecastDate,
      getWeatherDescription(weatherData.idWeatherType, lang),
      getPrecipitationIntensity(weatherData.classPrecInt, lang),
      weatherData.precipitaProb,
      undefined,
      undefined,
      undefined,
      getWindSpeed(weatherData.classWindSpeed, lang),
      weatherData.predWindDir,
      weatherData.idWeatherType,
      weatherData.tMax,
      weatherData.tMin,
      undefined,
      undefined,
      undefined,
      undefined
    );
  }
}
