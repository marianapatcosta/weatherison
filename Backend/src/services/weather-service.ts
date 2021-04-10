import WeatherResponse from "../models/response/weather-response";
import HttpError from "../models/http-error";
import fetchForecastResponse from "../utils/fetch-forecast-response";

export default async (queryParams: any): Promise<any | void> => {
  const latitude: number = +queryParams.latitude;
  const longitude: number = +queryParams.longitude;
  const location: string = queryParams.location
    ? queryParams.location.toString()
    : undefined;
  const lang: string = queryParams.lang
    ? queryParams.lang.toString()
    : undefined;
  const apiLocationKey: string = queryParams.apiLocationKey
    ? queryParams.apiLocationKey.toString()
    : undefined;
  const apiName: string = queryParams.apiName
    ? queryParams.apiName.toString()
    : undefined;

  try {
    const forecastResponse: WeatherResponse = await fetchForecastResponse(
      latitude,
      longitude,
      lang,
      apiLocationKey,
      apiName
    );

    return {
      forecast: forecastResponse,
      location,
      latitude,
      longitude,
    };
  } catch (error) {
    throw new HttpError(error.message, error.code);
  }
};
