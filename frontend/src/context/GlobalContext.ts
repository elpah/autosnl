// import { type ICartItem } from 'interfaces/ICartItem';

import { createContext } from "react";

export type ICarData = {
  cartype: string;
  carBrand: string;
  carModel: string;
  carErd: string;
  carFuel: string;
  carTransmission: string;
  carCountry: string;
};

export type IAdvancedSeachFieldData = {
  brand?: string[];
  budgetMin: number;
  budgetMax: number;
  vehicleType?: string[];
  fuel?: string[];
  milleageMin: number;
  milleageMax: number;
  transmission?: string[];
  // erd: string;
  // body: string;
};
// const categories = [
//   {
//     title: "Search By Brand",
//     values: [
//       { title: "Toyota", number_of_cars: 15 },
//       { title: "Toyota", number_of_cars: 15 },
//       { title: "Toyota", number_of_cars: 15 },
//       { title: "Toyota", number_of_cars: 15 },
//       { title: "Toyota", number_of_cars: 15 },
//       { title: "Toyota", number_of_cars: 15 },
//       { title: "Toyota", number_of_cars: 15 },
//       { title: "Toyota", number_of_cars: 15 },
//       { title: "Toyota", number_of_cars: 15 },
//       { title: "Toyota", number_of_cars: 15 },
//       { title: "Toyota", number_of_cars: 15 },
//     ],
//   },
//   {
//     title: "Search By Budget",
//     values: [
//       { price_min: 100, price_max: 1000, number_of_cars: 15 },
//       { price_min: 1000, price_max: 2000, number_of_cars: 27 },
//       { price_min: 2000, price_max: 3000, number_of_cars: 18 },
//       { price_min: 3000, price_max: 4000, number_of_cars: 22 },
//       { price_min: 4000, price_max: 5000, number_of_cars: 14 },
//       { price_min: 5000, price_max: 6000, number_of_cars: 19 },
//       { price_min: 6000, price_max: 7000, number_of_cars: 25 },
//       { price_min: 7000, price_max: 8000, number_of_cars: 30 },
//       { price_min: 8000, price_max: 9000, number_of_cars: 12 },
//       { price_min: 9000, price_max: 10000, number_of_cars: 20 },
//     ],
//   },
//   {
//     title: "Vehicle Type",
//     values: [
//       { title: "Sedan", number_of_cars: 20 },
//       { title: "SUV", number_of_cars: 10 },
//       { title: "Luxury", number_of_cars: 24 },
//       { title: "Pickup", number_of_cars: 90 },
//       { title: "Minivan", number_of_cars: 54 },
//       { title: "Hatchback", number_of_cars: 51 },
//       { title: "Convertible", number_of_cars: 18 },
//     ],
//   },
//   {
//     title: "Fuel",
//     values: [
//       { title: "Petrol", number_of_cars: 20 },
//       { title: "Diesel", number_of_cars: 10 },
//       { title: "CNG", number_of_cars: 24 },
//       { title: "Electric", number_of_cars: 90 },
//     ],
//   },
//   {
//     title: "Milleage",
//     values: [
//       { kpml_min: 0, kpml_max: 10, number_of_cars: 35 },
//       { kpml_min: 10, kpml_max: 20, number_of_cars: 27 },
//       { kpml_min: 20, kpml_max: 30, number_of_cars: 27 },
//       { kpml_min: 30, kpml_max: 50, number_of_cars: 18 },
//       { kpml_min: 50, kpml_max: 4000, number_of_cars: 22 },
//     ],
//   },
//   {
//     title: "Transmission",
//     values: [
//       { title: "Manual", number_of_cars: 35 },
//       { title: "Automatic", number_of_cars: 27 },
//     ],
//   },
// ];

export interface IGlobalContext {
  carData: ICarData;
  setCarData: React.Dispatch<React.SetStateAction<ICarData>>;
  advancedSearchFieldData: IAdvancedSeachFieldData;
  setAdvancedSearchFieldData: React.Dispatch<
    React.SetStateAction<IAdvancedSeachFieldData>
  >;
  categoryToFieldKeyMap: Record<string, keyof IAdvancedSeachFieldData | null>;
  setCategoryToFieldKeyMap: React.Dispatch<
    React.SetStateAction<Record<string, keyof IAdvancedSeachFieldData | null>>
  >;
}

export const GlobalContext = createContext<IGlobalContext>({
  carData: {
    cartype: "used",
    carBrand: "",
    carModel: "",
    carErd: "",
    carFuel: "",
    carTransmission: "",
    carCountry: "",
  },
  setCarData: (carData) => {},
  advancedSearchFieldData: {
    brand: [],
    budgetMin: 0,
    budgetMax: 0,
    vehicleType: [],
    fuel: [],
    milleageMin: 0,
    milleageMax: 0,
    transmission: [],
  },
  setAdvancedSearchFieldData: (advancedSearchFieldData) => {},
  // i can add the milleage, add is as an array, and then upon selection, i calculate the min, max values.

  categoryToFieldKeyMap: {
    "Search By Brand": "brand",
    "Search By Budget": null,
    "Vehicle Type": "vehicleType",
    Fuel: "fuel",
    // Milleage: milleage,
    Transmission: "transmission",
  },
  setCategoryToFieldKeyMap: (categoryToFieldKeyMap) => {},
});
