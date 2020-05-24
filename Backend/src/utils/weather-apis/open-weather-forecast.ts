import axios from "axios";
import HttpError from "../../models/http-error";
import HttpStatusCode from "../http-status-code.enum";
import OpenWeatherResponse from "../../models/response/open-weather-response";
import constants from "../constants";

const { CONNECTION_ERROR, OPEN_WEATHER_URL, DEFAULT_LANGUAGE } = constants;

export default async (
  latitude: number,
  longitude: number,
  lang: string = DEFAULT_LANGUAGE,
  apiName: string
): Promise<OpenWeatherResponse> => {

  const url: string = OPEN_WEATHER_URL(latitude, longitude, lang);
  
  try {
    const response: any = await axios.get(url);
    const responseData: any = response.data;
    return new OpenWeatherResponse(apiName, responseData);
  } catch (error) {
    throw new HttpError(
      error.message || CONNECTION_ERROR("weather"),
      error.code || HttpStatusCode.INTERNAL_SERVER_ERROR
    );
  }
};
