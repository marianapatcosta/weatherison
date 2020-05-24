import { Request, Response, NextFunction } from "express";
import Apis from "../utils/apis.enum";
import HttpError from "../models/http-error";
import ipmaApiLocationKey from "../utils/api-location-apis/ipma-api-location-key";
import accuweatherApiLocationKey from "../utils/api-location-apis/accuweather-api-location-key";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const apiName: string = req.query.apiName.toString();
  const latitude: number = +req.query.latitude;
  const longitude: number = +req.query.longitude;
  const location: string = req.query.location
    ? req.query.location.toString()
    : undefined;
  let apiLocationKey: string;

  if (apiName !== Apis.IPMA && apiName !== Apis.ACCUWEATHER) {
    return next();
  }

  try {
    apiLocationKey =
      apiName === Apis.IPMA
        ? await ipmaApiLocationKey(location)
        : await accuweatherApiLocationKey(latitude, longitude);
    req.query.apiLocationKey = apiLocationKey;
    return next();
  } catch (error) {
    return next(new HttpError(error.message, error.code));
  }
};
