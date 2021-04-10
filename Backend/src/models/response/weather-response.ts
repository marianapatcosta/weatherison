import WeatherInfo from "../weather-info/weather-info";

export default abstract class WeatherResponse {
  constructor(
    private name: string,
    private current: WeatherInfo,
    private today: WeatherInfo,
    private tomorrow: WeatherInfo,
    private in2Days: WeatherInfo,
    private in3Days: WeatherInfo,
    private in4Days: WeatherInfo
  ) {}
}
