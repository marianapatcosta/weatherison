import AbstractResponse from "./weather-response";
import OpenMapInfo from "../weather-info/open-weather-info";

export default class OpenMapResponse extends AbstractResponse {
  constructor(name: string, response: any) {
    super(
      name,
      new OpenMapInfo(response.current),
      new OpenMapInfo(response.daily[0]),
      new OpenMapInfo(response.daily[1]),
      new OpenMapInfo(response.daily[2]),
      new OpenMapInfo(response.daily[3]),
      new OpenMapInfo(response.daily[4])
    );
  }
}
