import AbstractResponse from "./weather-response";
import DarkSkyInfo from "../weather-info/dark-sky-info";

export default class DarkSkyResponse extends AbstractResponse {
  constructor(name: string, response: any, private lang: string) {
    super(
      name,
      new DarkSkyInfo(response.currently, lang),
      new DarkSkyInfo(response.daily.data[0], lang),
      new DarkSkyInfo(response.daily.data[1], lang),
      new DarkSkyInfo(response.daily.data[2], lang),
      new DarkSkyInfo(response.daily.data[3], lang),
      new DarkSkyInfo(response.daily.data[4], lang)
    );
  }
}
