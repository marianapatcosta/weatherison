import { Router } from "express";
import fetchApiLocationKey from "../middleware/fetch-api-location-key";
import fetchGeolocationData from "../middleware/fetch-geolocation-data";
import fetchForecast from "../controllers/weather-controller";

const router: Router = Router();

/* router.use(fetchCoordinates); */
router.get("/", fetchGeolocationData, fetchApiLocationKey, fetchForecast);

export default router;