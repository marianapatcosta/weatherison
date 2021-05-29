import { Request, Response, NextFunction } from "express";
import weatherService from "../services/weather-service";

export default async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

  let forecast: any;

  try {
    forecast= await weatherService(req.query);
  } catch (error) {
    return next(error);
  }

  return res.status(200).send(forecast);
};