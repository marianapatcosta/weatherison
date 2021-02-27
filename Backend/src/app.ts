import express, { Application, Request, Response, NextFunction } from "express";
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load('./src/swagger.yaml');
import HttpError from "./models/http-error";
import HttpStatusCode from "./utils/http-status-code.enum";
import apisRoutes from "./routes/apis-routes";
import weatherRoutes from "./routes/weather-routes";
import constants from "./utils/constants";

const { GENERAL_ERROR, ROUTE_NOT_FOUND_ERROR }: Readonly<any> = constants;
const DEFAULT_PORT: number = 8000;

const port: number = +process.env.PORT || DEFAULT_PORT;
const app: Application = express();
app.disable('x-powered-by');

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET");

  next();
});

app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use("/api/v1/apis", apisRoutes);
app.use("/api/v1/weather", weatherRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error: HttpError = new HttpError(ROUTE_NOT_FOUND_ERROR, 404);
  throw error;
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error);
  }
  res
    .status(error.code || HttpStatusCode.INTERNAL_SERVER_ERROR)
    .json({ error: error.message || GENERAL_ERROR });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
