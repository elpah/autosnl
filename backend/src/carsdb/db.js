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
  try {
    const newCar = { carId: randomUUID(), ...carData };
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

const getBrandModels = async () => {
  const db = await connectToDatabase();
  const col = db.collection("cars");

  const result = await col
    .aggregate([
      {
        $group: {
          _id: "$carBrand",
          models: { $addToSet: "$carModel" },
        },
      },
    ])
    .toArray();
  return result.reduce((acc, item) => {
    acc[item._id] = item.models;
    return acc;
  }, {});
};

export { createNewCar, getAllCars, getBrandModels };
