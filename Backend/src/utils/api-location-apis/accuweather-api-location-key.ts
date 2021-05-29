import axios from "axios";
import HttpError from "../../models/http-error";
import HttpStatusCode from "../http-status-code.enum";
import constants from "../constants";
const { ACCUWEATHER_LOCATION_KEY_URL, LOCATION_NOT_FOUND_ERROR } = constants;

export default async (latitude: number, longitude: number): Promise<string> => {
  try {
    const url = ACCUWEATHER_LOCATION_KEY_URL(latitude, longitude);
    const response: any = await axios.get(url);
    const responseData: any = response.data;

    if (!responseData) {
      throw new HttpError(
        LOCATION_NOT_FOUND_ERROR,
        HttpStatusCode.UNPROCESSABLE_ENTITY
      );
    }
    return responseData.Key;
  } catch (error) {
    throw new HttpError(error.message, error.code);
  }
};
