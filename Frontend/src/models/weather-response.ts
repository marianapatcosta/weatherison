import WeatherInfo from "./weather-info";
import { WeatherForecastTime } from "@/types/weather-forecast-time.enum";

export default class WeatherResponse {
  private apiName: string;
  private location: string;
  private latitude: string;
  private longitude: string;
  private current: any;
  private today: WeatherInfo;
  private tomorrow: WeatherInfo;

  constructor(responseObject: any, location: string) {
    this.apiName = responseObject.name ? responseObject.name : undefined;
    this.latitude = responseObject.latitude
      ? responseObject.latitude
      : undefined;
    this.longitude = responseObject.longitude
      ? responseObject.longitude
      : undefined;
    this.current =
      responseObject.current !== undefined
        ? new WeatherInfo(responseObject.current)
        : responseObject.current;
    (this.today = new WeatherInfo(responseObject.today || undefined)),
      (this.tomorrow = new WeatherInfo(responseObject.tomorrow || undefined));
    this.location = location;
  }

  public getLocation(): string {
    return this.location;
  }

  public getApiName(): string {
    return this.apiName;
  }

  public getWeatherForecastTime(time: string) {
    switch (time) {
      case WeatherForecastTime.CURRENT:
        return this.current;
      case WeatherForecastTime.TODAY:
        return this.today;
      case WeatherForecastTime.TOMORROW:
        return this.tomorrow;
    }
  }
}
