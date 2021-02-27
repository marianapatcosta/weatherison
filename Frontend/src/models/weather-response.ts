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
  private in2Days: WeatherInfo;
  private in3Days: WeatherInfo;
  private in4Days: WeatherInfo;

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
    this.in2Days = new WeatherInfo(responseObject.in2Days || undefined);
    this.in3Days = new WeatherInfo(responseObject.in3Days || undefined);
    this.in4Days = new WeatherInfo(responseObject.in4Days || undefined);
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
      case WeatherForecastTime.IN_2_DAYS:
        return this.in2Days;
      case WeatherForecastTime.IN_3_DAYS:
        return this.in3Days;
      case WeatherForecastTime.IN_4_DAYS:
        return this.in4Days;
    }
  }
}
