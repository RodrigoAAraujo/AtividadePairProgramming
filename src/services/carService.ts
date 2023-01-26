import notFoundError from "../errors/notFoundError.js";
import conflictError from "../errors/conflictError.js";
import carRepository from "../repository/carRepository.js";
import { carType } from "../protocols.js";

async function getCars() {
  const cars = await carRepository.getCars()
  return cars;
}

async function getCar(id: number) {
  const car = await carRepository.getCar(id);
  if (!car) {
    throw notFoundError();
  }

  return car;
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  const car = await carRepository.getCarWithLicensePlate(licensePlate);
  if (car) {
    throw conflictError(`Car with license plate ${licensePlate} already registered.`)
  }

  await carRepository.createCar(model, licensePlate, year, color);
}

async function deleteCar(id: number) {
  await getCar(id);
  await carRepository.deleteCar(id);
}

async function updateCar(id: number, carInfo: carType) {
  await getCar(id);
  await carRepository.updateCar(id, carInfo)

}

const carService = {
  getCars,
  getCar,
  createCar,
  deleteCar,
  updateCar
}

export default carService;