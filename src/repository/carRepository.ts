import prismaConnection from "../config/database.js";
import { carType } from "../protocols.js";

async function getCars(){
  return prismaConnection.cars.findMany();
}

async function getCar(id: number) {
  return prismaConnection.cars.findUnique({
    where: {id}
  });
}

async function getCarWithLicensePlate(licensePlate: string) {
  return prismaConnection.cars.findMany({
    where: {licensePlate}
  });
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  await prismaConnection.cars.create({
    data:{
      "model": model,
      "licensePlate": licensePlate,
      "year": year,
      "color": color
    }
  })
}

async function deleteCar(id: number) {
  await prismaConnection.cars.delete({
    where:{id}
  })
}

async function updateCar(id: number, carInfo: carType) {
  await prismaConnection.cars.update({
    where:{id},
    data:{
      "model": carInfo.model,
      "licensePlate": carInfo.licensePlate,
      "year": carInfo.year,
      "color": carInfo.color
    }
  })
}


const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
  updateCar
}

export default carRepository;