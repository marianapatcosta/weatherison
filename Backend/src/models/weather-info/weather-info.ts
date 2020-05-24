export default abstract class WeatherInfo {
  constructor(
    private time: number,
    private description: string,
    private precipitationIntensity: any,
    private precipitationProbability: number,
    private temperature: number,
    private apparentTemperature: number,
    private humidity: number,
    private windSpeed: any,
    private windDirection: string,
    private icon: string,
    private temperatureMax: number,
    private temperatureMin: number,
    private uvIndex: number,
    private moonPhase: string,
    private sunrise: number,
    private sunset: number,
  ) {}
}
