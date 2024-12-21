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
  vehicleType?: string[];
  fuel?: string[];
  priceMin: number;
  priceMax: number;
  milleageMin: number;
  milleageMax: number;
  transmission?: string[];
  erdMin: number;
  erdMax: number;
};

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
    vehicleType: [],
    fuel: [],
    priceMin: 0,
    priceMax: 0,
    milleageMin: 0,
    milleageMax: 0,
    transmission: [],
    erdMin: 0,
    erdMax: 0,
  },
  setAdvancedSearchFieldData: (advancedSearchFieldData) => {},
  categoryToFieldKeyMap: {
    "Search By Brand": "brand",
    "Vehicle Type": "vehicleType",
    Fuel: "fuel",
    "Min Price": "priceMin",
    "Max Price": "priceMax",
    "Min Milleage": "milleageMin",
    "Max Milleage": "milleageMax",
    "Min Erd": "erdMin",
    "Max Erd": "erdMax",
    Transmission: "transmission",
  },

  setCategoryToFieldKeyMap: (categoryToFieldKeyMap) => {},
});
