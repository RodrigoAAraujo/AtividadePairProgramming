import { Router } from "express";
import carsRouter from "./carsRouter.js";

const router = Router();

router.use(carsRouter);

export default router;