import axios from "axios";
import HttpError from "../../models/http-error";
import HttpStatusCode from "../http-status-code.enum";
import IpmaResponse from "../../models/response/ipma-response";
import constants from "../constants";

const {
  CONNECTION_ERROR,
  DEFAULT_LANGUAGE,
  IPMA_URL,
} = constants;

export default async (
  apiLocationKey: string,
  lang: string = DEFAULT_LANGUAGE,
  apiName: string
): Promise<IpmaResponse> => {

  const url: string = IPMA_URL(apiLocationKey);;

  try {
    const response: any = await axios.get(url);
    const responseData: any = response.data;
    return new IpmaResponse(apiName, responseData.data, lang);
  } catch (error) {
    throw new HttpError(
      error.message || CONNECTION_ERROR("weather"),
      error.code || HttpStatusCode.INTERNAL_SERVER_ERROR
    );
  }
};
