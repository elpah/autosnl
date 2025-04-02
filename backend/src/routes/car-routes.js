import "dotenv/config.js";
import Router from "express";
const carRouter = Router();
import {
  getAllCars,
  createNewCar,
  getCarById,
  getCarsWithFilters,
  getCarsWithMultiFilters,
  getCarByDealerId,
} from "../carsdb/db.js";

import { getBrandModelsCountries } from "../carsdb/getBrandAndModels.js";
import {
  convertToLowerCase,
  processArrays,
  parseNums,
} from "../utilsFunctions.js";

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

// carRouter.get("/cars", async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 20;
//   try {
//     const cars = await getAllCars(page, limit);
//     res.status(200).json(cars);
//   } catch (err) {
//     res.status(500).send("Internal Server Error");
//   }
// });

carRouter.get("/carById", async (req, res) => {
  let { carId } = req.query;
  try {
    const { car, dealer } = await getCarById(carId);
    res.status(200).json({ car, dealer });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

carRouter.get("/cars-search", async (req, res) => {
  let {
    carType,
    brand,
    model,
    fuel,
    transmission,
    vehicleType,
    country,
    pageNumber,
  } = req.query;

  carType = carType ? carType.toLowerCase() : "";
  brand = brand && brand !== "All Brands" ? brand.toLowerCase() : "";
  model = model ? model.toLowerCase() : "";
  fuel = fuel ? fuel.toLowerCase() : "";
  transmission = transmission ? transmission.toLowerCase() : "";
  vehicleType = vehicleType ? vehicleType.toLowerCase() : "";
  country = country ? country.toLowerCase() : "";
  const page = parseInt(pageNumber) || 1;
  try {
    const { totalCars, cars } = await getCarsWithFilters(
      {
        carType,
        brand,
        model,
        fuel,
        transmission,
        body: vehicleType,
        carCountry: country,
      },
      page
    );
    res.status(200).json({ totalCars, cars });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

carRouter.get("/advanced-search", async (req, res) => {
  let {
    carType,
    brand,
    model,
    vehicleType,
    fuel,
    priceMin,
    priceMax,
    mileageMin,
    mileageMax,
    transmission,
    erdMin,
    erdMax,
    country,
    pageNumber,
  } = req.query;

  try {
    const filters = {
      carType: carType ? carType.toLowerCase() : "",
      brand: brand && !brand.includes("All Brands") ? processArrays(brand) : [],
      model: processArrays(model),
      vehicleType: processArrays(vehicleType),
      fuel: processArrays(fuel),
      transmission: processArrays(transmission),
      country: processArrays(country),
      priceMin: parseNums(priceMin),
      priceMax: parseNums(priceMax),
      mileageMin: parseNums(mileageMin),
      mileageMax: parseNums(mileageMax),
      erdMin: parseNums(erdMin),
      erdMax: parseNums(erdMax),
    };

    console.log("filters::::::",filters);
    const page = parseInt(pageNumber) || 1;
    const { totalCars, cars } = await getCarsWithMultiFilters(filters, page);
    res.status(200).json({ totalCars, cars });

  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

carRouter.get("/carByDealerId", async (req, res) => {
  let {
    carType,
    brand,
    model,
    vehicleType,
    fuel,
    priceMin,
    priceMax,
    mileageMin,
    mileageMax,
    transmission,
    erdMin,
    erdMax,
    country,
    pageNumber,
    dealerId,
  } = req.query;

  if (brand && brand.includes("All Brands")) {
    brand = [];
  }
  const page = parseInt(pageNumber) || 1;

  try {
    const { totalCars, dealer, cars } = await getCarByDealerId(
      {
        carType,
        brand,
        model,
        vehicleType,
        fuel,
        priceMin: Number(priceMin),
        priceMax: Number(priceMax),
        mileageMin: Number(mileageMin),
        mileageMax: Number(mileageMax),
        transmission,
        erdMin: Number(erdMin),
        erdMax: Number(erdMax),
        country,
        dealerId,
      },
      page
    );
    res.status(200).json({ totalCars, dealer, cars });
  } catch (err) {
    console.error("Error fetching cars:", err);
    res.status(500).send("Internal Server Error");
  }
});

carRouter.get("/brandmodelscountries", async (req, res) => {
  try {
    const brandModels = await getBrandModelsCountries();
    res.status(200).json(brandModels);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

export default carRouter;
