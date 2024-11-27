import client from "../db/client.js";
import { v4 as uuidv4 } from "uuid";
let db;

const connectToDatabase = async () => {
  if (!db) {
    await client.connect();
    db = client.db("zaurautosdb");
  }
  return db;
};
const createNewCar = async (carData) => {
  try {
    const newCar = { carId: uuidv4(), ...carData };
    const db = await connectToDatabase();
    const col = db.collection("cars");
    await col.insertOne(newCar);
    return newCar;
  } catch (err) {
    console.log(err);
  }
};

const getAllCars = async (page = 1, limit = 20) => {
  const db = await connectToDatabase();
  const col = db.collection("cars");
  const skip = (page - 1) * limit;
  const cars = await col.find({}).skip(skip).limit(limit).toArray();
  return cars;
};

export { createNewCar, getAllCars };
