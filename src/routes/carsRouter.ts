import { Router } from "express";
import carController from "../controllers/carsController.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import { carSchema } from "../schemas/carSchema.js";

const carsRouter = Router();

carsRouter.get("/cars", carController.getAllCars);
carsRouter.get("/cars/:carId", carController.getSpecificCar);
carsRouter.post("/cars", validateSchemaMiddleware(carSchema), carController.createCar);
carsRouter.delete("/cars/:carId", carController.deleteCar);
carsRouter.put("/cars/:carId", validateSchemaMiddleware(carSchema), carController.updateCar)

export default carsRouter;