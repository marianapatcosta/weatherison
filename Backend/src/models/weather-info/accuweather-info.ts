import WeatherInfo from "./weather-info";
import {
  degreesToCompassDirection,
  fahrenheitToCelsiusConverter,
  milesPerHourToMetersPerSecond,
} from "./utils/data-conversion";

export default class Accuweather extends WeatherInfo {
  constructor(weatherData) {
    super(
      weatherData.LocalObservationDateTime || weatherData.Date,
      weatherData.WeatherText ||
        weatherData.Day.LongPhrase ||
        weatherData.Night.LongPhrase,
      weatherData.Precip1hr?.Metric.Value ||
        weatherData.Day?.PrecipitationIntensity ||
        weatherData.Night?.PrecipitationIntensity,
      weatherData.Day?.PrecipitationProbability ||
        weatherData.Night?.PrecipitationProbability,
      weatherData.Temperature.Metric?.Value,
      weatherData.RealFeelTemperature.Metric?.Value,
      weatherData.RelativeHumidity,
      milesPerHourToMetersPerSecond(
        weatherData.Wind?.Speed.Imperial.Value ||
          weatherData.Day?.Wind.Speed.Value ||
          weatherData.Night?.Wind.Speed.Value
      ),
      degreesToCompassDirection(
        weatherData.Wind?.Direction.Degrees ||
          weatherData.Day?.Wind.Direction.Degrees ||
          weatherData.Night?.Wind.Direction.Degrees
      ),
      weatherData.WeatherIcon || weatherData.Day.Icon || weatherData.Night.Icon,
      fahrenheitToCelsiusConverter(weatherData.Temperature.Maximum?.Value),
      fahrenheitToCelsiusConverter(weatherData.Temperature.Minimum?.Value),
      weatherData.UVIndex !== undefined
        ? weatherData.UVIndex
        : weatherData.AirAndPollen[5].Value,
      weatherData.Moon?.Phase,
      weatherData.Sun?.EpochRise,
      weatherData.Sun?.EpochSet
    );
  }
}
