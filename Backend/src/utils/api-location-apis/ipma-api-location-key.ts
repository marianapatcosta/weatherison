import axios from "axios";
import HttpError from "../../models/http-error";
import HttpStatusCode from "../http-status-code.enum";
import constants from "../constants";
const { IPMA_LOCATION_KEY_URL, LOCATION_NOT_FOUND_ERROR } = constants;

export default async (location: string): Promise<string> => {
  try {
    const response: any = await axios.get(IPMA_LOCATION_KEY_URL);
    const responseData: any = response.data.data;

    const apiDistrict = findDistrict(location, responseData);

    if (!apiDistrict) {
      throw new HttpError(
        LOCATION_NOT_FOUND_ERROR,
        HttpStatusCode.UNPROCESSABLE_ENTITY
      );
    }

    return apiDistrict.globalIdLocal;
  } catch (error) {
    throw new HttpError(error.message, error.code);
  }
};

const findDistrict = (location: string, responseData: any) => {
  const locationArray = location.split(",");
  const district = locationArray[locationArray.length - 2].trim();
  let apiDistrict = responseData.find((item) => item.local === district);
  apiDistrict = apiDistrict
    ? apiDistrict
    : responseData.find((item) => district.includes(item.local));
    
  return apiDistrict;
};
