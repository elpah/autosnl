import client from "../db/client.js";
import "dotenv/config";
import randomUUID from "crypto";
let db;

const connectToDatabase = async () => {
  if (!db) {
    await client.connect();
    const dbName = process.env.DB_NAME;
    db = client.db(dbName);
  }
  return db;
};
const createNewCar = async (carData) => {
  const newCar = {
    carId: randomUUID(),
    carBrand: carData.carBrand,
    carModel: carData.carModel,
    carImages: carData.carImages,
    carMilleage: carData.carMilleage,
    carFuel: carData.carFuel,
    carTransition: carData.carTransition,
    carPower: carData.carPower,
    carEngineCapacity: carData.carEngineCapacity,
    carERD: carData.carERD,
    carMODTill: carData.carMODTill,
    carSalesPrice: carData.carSalesPrice,
    carNetPrice: carData.carNetPrice,
    carVat: carData.carVat,
    carColor: carData.carColor,
    carVanish: carData.carVanish,
    carGrossExportPrice: carData.carGrossExportPrice,
    carBody: carData.carBody,
    carNumberOfDoors: carData.carNumberOfDoors,
    carDamages: carData.carDamages,
    carDamageDetails: carData.carDamageDetails,
    carDetails: carData.carDetails,
    carOptions: carData.carOptions,
    delearDetails: carData.delearDetails,
  };
  const db = await connectToDatabase();
  const col = db.collection("cars");
  await col.insertOne(newCar);
  return newCar;
};

const getAllCars = async (page = 1, limit = 20) => {
  const db = await connectToDatabase();
  const col = db.collection("cars");
  const skip = (page - 1) * limit;
  const cars = await col.find({}).skip(skip).limit(limit).toArray();
  return cars;
};

export { createNewCar, getAllCars };
