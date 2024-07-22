import "dotenv/config";
import Router from "express";
const carRouter = Router();
import { getAllCars, createNewCar } from "../carsdb/db.js";

carRouter.post("/create-new-car", async (req, res) => {
  const carData = req.body;

  try {
    const newCar = await createNewCar(carData);
    res.status(200).json({ message: "Car Created Successfully", newCar });
  } catch (err) {
    console.error("Error creating car:", err);
    res.status(500).send(err.message);
  }
});

carRouter.get("/cars", async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1
  const limit = parseInt(req.query.limit) || 20;
  try {
    const cars = await getAllCars(page, limit);
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

export default carRouter;
