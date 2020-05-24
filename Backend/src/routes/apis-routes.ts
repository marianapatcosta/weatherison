import { Router } from "express";
import fetchApis from "../controllers/apis-controller";

const router: Router = Router();

router.get("/", fetchApis);

export default router;