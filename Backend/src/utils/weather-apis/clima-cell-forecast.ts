import axios from "axios";
import ClimaCellResponse from "../../models/response/clima-cell-response";
import HttpError from "../../models/http-error";
import HttpStatusCode from "../http-status-code.enum";
import constants from "../constants";

const {
  CONNECTION_ERROR,
  CLIMA_CELL_CURRENT_URL,
  CLIMA_CELL_DAILY_URL,
  CLIMA_CELL_HOURLY_URL,
} = constants;

export default async (
  latitude: number,
  longitude: number,
  apiName: string
): Promise<ClimaCellResponse> => {
  const urls: string[] = [
    CLIMA_CELL_CURRENT_URL(latitude, longitude),
    CLIMA_CELL_DAILY_URL(latitude, longitude),
    /*      CLIMA_CELL_HOURLY_URL(latitude, longitude), */
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
      daily,
    };
    return new ClimaCellResponse(apiName, fullResponse);
  } catch (error) {
    throw new HttpError(
      error.message || CONNECTION_ERROR("weather"),
      error.code || HttpStatusCode.INTERNAL_SERVER_ERROR
    );
  }
};
