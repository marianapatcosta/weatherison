import { Request, Response, NextFunction } from "express";
import apisService from "../services/apis-service";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  let apis: string[];

  try {
    apis = await apisService();
  } catch (error) {
    return next(error);
  }

  return res.status(200).send(apis);
};
