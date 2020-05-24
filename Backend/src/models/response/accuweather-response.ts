import AbstractResponse from "./weather-response";
import AccuweatherInfo from "../weather-info/accuweather-info";

export default class AccuweatherResponse extends AbstractResponse {
  constructor(name: string, response: any) {
    super(
      name,
      new AccuweatherInfo(response.current[0]),
      new AccuweatherInfo(response.daily[0]),
      new AccuweatherInfo(response.daily[1]),
      new AccuweatherInfo(response.daily[2]),
      new AccuweatherInfo(response.daily[3]),
      new AccuweatherInfo(response.daily[4])
    );
  }
}
