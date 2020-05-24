import WeatherResponse from "../models/response/weather-response";
import Apis from "./apis.enum";
import HttpError from "../models/http-error";
import HttpStatusCode from "./http-status-code.enum";
import accuweatherForecast from "./weather-apis/accuweather-forecast";
import climaCellForecast from "./weather-apis/clima-cell-forecast";
import darkSkyForecast from "./weather-apis/dark-sky-forecast";
import ipmaForecast from "./weather-apis/ipma-forecast";
import openWeatherForecast from "./weather-apis/open-weather-forecast";
import weatherBitForecast from "./weather-apis/weather-bit-forecast";
import constants from "./constants";
const { API_NOT_FOUND_ERROR } = constants;

export default (
  latitude: number,
  longitude: number,
  lang: string,
  apiLocationKey: string,
  apiName: string
): Promise<WeatherResponse> => {
  switch (apiName) {
    case Apis.DARK_SKY:
      return darkSkyForecast(latitude, longitude, lang, apiName);
    case Apis.OPEN_WEATHER:
      return openWeatherForecast(latitude, longitude, lang, apiName);
    case Apis.IPMA:
      return ipmaForecast(apiLocationKey, lang, apiName);
    case Apis.CLIMA_CELL:
      return climaCellForecast(latitude, longitude, apiName);
    case Apis.ACCUWEATHER:
      return accuweatherForecast(apiLocationKey, lang, apiName);
    case Apis.WEATHER_BIT:
      return weatherBitForecast(latitude, longitude, lang, apiName);
    default:
      throw new HttpError(API_NOT_FOUND_ERROR, HttpStatusCode.NOT_FOUND);
  }
};
