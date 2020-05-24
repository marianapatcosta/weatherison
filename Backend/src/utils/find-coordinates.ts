import axios from "axios";
import Geolocation from "./geolocation-interface";
import HttpError from "../models/http-error";
import constants from "./constants";
import HttpStatusCode from "./http-status-code.enum";

const {
  CONNECTION_ERROR,
  DEFAULT_LANGUAGE,
  GEOLOCATION_URL,
  LOCATION_NOT_FOUND_ERROR,
}: Readonly<any> = constants;

export default async (
  latitude: number,
  longitude: number,
  location: string,
  lang: string = DEFAULT_LANGUAGE
): Promise<Geolocation> => {
  const geolocationParams: string =
    latitude && longitude ? `${longitude},${latitude}` : location;
  const url: string = GEOLOCATION_URL(geolocationParams, lang);
  try {
    const response = await axios.get(url);
    const responseData = response.data;

    if (!responseData || responseData.features.length === 0) {
      throw new HttpError(
        LOCATION_NOT_FOUND_ERROR,
        HttpStatusCode.UNPROCESSABLE_ENTITY
      );
    }
    const geolocation: Geolocation = {
      latitude: latitude ? latitude : responseData.features[0].center[1],
      longitude: longitude ? longitude : responseData.features[0].center[0],
      location: responseData.features[0].place_name,
    };
    return geolocation;
  } catch (error) {
    throw new HttpError(
      error.message || CONNECTION_ERROR("geocoding"), //se não se acede ao serviço, ja vem uma msg de erro e a nossa fallback nc é mostrada
      error.code || HttpStatusCode.INTERNAL_SERVER_ERROR
    );
  }
};
