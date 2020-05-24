import AbstractResponse from "./weather-response";
import IpmaInfo from "../weather-info/ipma-info";

export default class IpmaResponse extends AbstractResponse {
  constructor(name: string, response: any, private lang: string) {
    super(
      name,
      undefined,
      new IpmaInfo(response[0], lang),
      new IpmaInfo(response[1], lang),
      new IpmaInfo(response[2], lang),
      new IpmaInfo(response[3], lang),
      new IpmaInfo(response[4], lang)
    );
  }
}
