import axios from "axios";
import AccuweatherResponse from "../../models/response/accuweather-response";
import HttpError from "../../models/http-error";
import HttpStatusCode from "../http-status-code.enum";
import constants from "../constants";

const {
  CONNECTION_ERROR,
  ACCUWEATHER_CURRENT_URL,
  ACCUWEATHER_DAILY_URL,
  ACCUWEATHER_HOURLY_URL,
  DEFAULT_LANGUAGE,
} = constants;

export default async (
  apiLocationKey: string,
  lang: string = DEFAULT_LANGUAGE,
  apiName: string
): Promise<AccuweatherResponse> => {
  const urls: string[] = [
    ACCUWEATHER_CURRENT_URL(apiLocationKey, lang),
    ACCUWEATHER_DAILY_URL(apiLocationKey, lang),
    /*      ACCUWEATHER_HOURLY_URL(apiLocationKey, lang), */
  ];

  try {
    const [current, daily] = await Promise.all(
      urls.map(async (url) => {
        const response = await axios.get(url);
        return response.data;
      })
    );
    
    const fullResponse = {
      current,
      daily: daily.DailyForecasts,
    };
    return new AccuweatherResponse(apiName, fullResponse);
  } catch (error) {
    throw new HttpError(
      error.message || CONNECTION_ERROR("weather"),
      error.code || HttpStatusCode.INTERNAL_SERVER_ERROR
    );
  }
};
