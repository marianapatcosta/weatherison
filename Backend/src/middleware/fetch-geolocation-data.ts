import { Request, Response, NextFunction } from "express";
import Geolocation from "../utils/geolocation-interface";
import HttpError from "../models/http-error";
import HttpStatusCode from "../utils/http-status-code.enum";
import constants from "../utils/constants";
import findCoordinates from "../utils/find-coordinates";
const { NO_LOCATION_ERROR } = constants;

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const latitude: number = +req.query.latitude;
  const longitude: number = +req.query.longitude;
  const location: string = req.query.location
    ? req.query.location.toString()
    : undefined;
  const lang: string = req.query.lang ? req.query.lang.toString() : undefined;
  let geolocation: Geolocation;

  if (latitude && longitude) {
    try {
      geolocation = await findCoordinates(latitude, longitude, location, lang);
      req.query.location = geolocation.location;
      return next();
    } catch (error) {
      return next(error);
    }
  }

  if (!location) {
    return next(new HttpError(NO_LOCATION_ERROR, HttpStatusCode.BAD_REQUEST));
  }

  if (location) {
    try {
      geolocation = await findCoordinates(latitude, longitude, location, lang);
      req.query.latitude = geolocation.latitude.toString();
      req.query.longitude = geolocation.longitude.toString();
      req.query.location = geolocation.location;
      next();
    } catch (error) {
      return next(error);
    }
  }
};
