import axios from "axios";
import DarkSkyResponse from "../../models/response/dark-sky-response";
import HttpError from "../../models/http-error";
import HttpStatusCode from "../http-status-code.enum";
import constants from "../constants";

const { CONNECTION_ERROR, DARK_SKY_URL, DEFAULT_LANGUAGE } = constants;

export default async (
  latitude: number,
  longitude: number,
  lang: string = DEFAULT_LANGUAGE,
  apiName: string
): Promise<DarkSkyResponse> => {
  const url: string = DARK_SKY_URL(latitude, longitude, lang);

  try {
    const response: any = await axios.get(url);
    const responseData: any = response.data;
    return new DarkSkyResponse(apiName, responseData, lang);
  } catch (error) {
    throw new HttpError(
      error.message || CONNECTION_ERROR("weather"),
      error.code || HttpStatusCode.INTERNAL_SERVER_ERROR
    );
  }
};
