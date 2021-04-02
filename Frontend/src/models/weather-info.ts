export default class WeatherInfo {
  private time: number;
  private description: string;
  private precipitationIntensity: any;
  private precipitationProbability: number;
  private temperature: number;
  private apparentTemperature: number;
  private humidity: number;
  private windSpeed: any;
  private windDirection: string;
  private icon: string;
  private temperatureMax: number;
  private temperatureMin: number;
  private uvIndex: number;
  private moonPhase: string;
  private sunrise: number;
  private sunset: number;
  constructor(weatherData?: any) {
    this.time = weatherData.time !== "undefined" ? weatherData.time : "-";
    this.description =
      weatherData.description !== "undefined" ? weatherData.description : "-";
    this.precipitationProbability =
      weatherData.precipitationProbability !== "undefined"
        ? weatherData.precipitationProbability
        : "-";
    this.precipitationIntensity =
      weatherData.precipitationIntensity !== "undefined"
        ? weatherData.precipitationIntensity
        : "-";
    this.temperature =
      weatherData.temperature !== "undefined" ? weatherData.temperature : "-";
    this.apparentTemperature =
      weatherData.apparentTemperature !== "undefined"
        ? weatherData.apparentTemperature
        : "-";
    this.humidity =
      weatherData.humidity !== "undefined" ? weatherData.humidity : "-";
    this.windSpeed =
      weatherData.windSpeed !== "undefined" ? weatherData.windSpeed : "-";
    this.windDirection =
      weatherData.windDirection !== "undefined"
        ? weatherData.windDirection
        : "-";
    this.icon = weatherData.icon !== "undefined" ? weatherData.icon : "-";
    this.temperatureMax =
      weatherData.temperatureMax !== "undefined"
        ? weatherData.temperatureMax
        : "-";
    this.temperatureMin =
      weatherData.temperatureMin !== "undefined"
        ? weatherData.temperatureMin
        : "-";
    this.uvIndex =
      weatherData.uvIndex !== "undefined" ? weatherData.uvIndex : "-";
    this.moonPhase =
      weatherData.moonPhase !== "undefined" ? weatherData.moonPhase : "-";
    this.sunrise =
      weatherData.sunrise !== "undefined" ? weatherData.sunrise : "-";
    this.sunset = weatherData.sunset !== "undefined" ? weatherData.sunset : "-";
  }
}
