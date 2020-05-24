import AbstractResponse from "./weather-response";
import ClimaCellInfo from "../weather-info/clima-cell-info";

export default class ClimaCellResponse extends AbstractResponse {
  constructor(name: string, response: any) {
    super(
      name,
      new ClimaCellInfo(response.current),
      new ClimaCellInfo(response.daily[0]),
      new ClimaCellInfo(response.daily[1]),
      new ClimaCellInfo(response.daily[2]),
      new ClimaCellInfo(response.daily[3]),
      new ClimaCellInfo(response.daily[4])
    );
  }
}
