import axios from "axios";
import HttpError from "../../models/http-error";
import HttpStatusCode from "../http-status-code.enum";
import WeatherBitResponse from "../../models/response/weather-bit-response";
import constants from "../constants";

const {
  CONNECTION_ERROR,
  WEATHER_BIT_CURRENT_URL,
  WEATHER_BIT_DAILY_URL,
  WEATHER_BIT_HOURLY_URL,
  DEFAULT_LANGUAGE,
} = constants;

export default async (
  latitude: number,
  longitude: number,
  lang: string = DEFAULT_LANGUAGE,
  apiName: string
): Promise<WeatherBitResponse> => {
  const urls: string[] = [
    WEATHER_BIT_CURRENT_URL(latitude, longitude, lang),
    WEATHER_BIT_DAILY_URL(latitude, longitude, lang),
    /*      WEATHER_BIT_HOURLY_URL(latitude, longitude, lang), */
  ];

  try {
    const responseArray = await Promise.all(
      urls.map(async (url) => {
        const response = await axios.get(url);
        return response.data;
      })
    );
    const fullResponse = {
      current: responseArray[0].data,
      daily: responseArray[1].data,
    };

    return new WeatherBitResponse(apiName, fullResponse, lang);
  } catch (error) {
    throw new HttpError(
      error.message || CONNECTION_ERROR("weather"),
      error.code || HttpStatusCode.INTERNAL_SERVER_ERROR
    );
  }
};
