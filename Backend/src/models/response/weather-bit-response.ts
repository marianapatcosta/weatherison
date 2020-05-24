import AbstractResponse from "./weather-response";
import WeatherBitInfo from "../weather-info/weather-bit-info";

export default class WeatherBitResponse extends AbstractResponse {
  constructor(name: string, response: any, private lang: string) {
    super(
      name,
      new WeatherBitInfo(response.current[0], lang),
      new WeatherBitInfo(response.daily[0], lang),
      new WeatherBitInfo(response.daily[1], lang),
      new WeatherBitInfo(response.daily[2], lang),
      new WeatherBitInfo(response.daily[3], lang),
      new WeatherBitInfo(response.daily[4], lang)
    );
  }
}
