import { createContext } from "react";

export type ICarData = {
  carType: string;
  brand: string;
  model: string;
  fuel: string;
  transmission: string;
  vehicleType: string;
  country: string;
  pageNumber: number;
};

export type IAdvancedSeachFieldData = {
  brand?: string[];
  model?: string[];
  vehicleType?: string[];
  fuel?: string[];
  priceMin: number;
  priceMax: number;
  milleageMin: number;
  milleageMax: number;
  transmission?: string[];
  erdMin: number;
  erdMax: number;
  country?: string[];
  pageNumber: number;
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
    carType: "used",
    brand: "",
    model: "",
    fuel: "",
    transmission: "",
    vehicleType: "",
    country: "",
    pageNumber: 1,
  },
  setCarData: (carData) => {},
  advancedSearchFieldData: {
    brand: [],
    model: [],
    vehicleType: [],
    fuel: [],
    priceMin: 0,
    priceMax: 0,
    milleageMin: 0,
    milleageMax: 0,
    transmission: [],
    erdMin: 0,
    erdMax: 0,
    country: [],
    pageNumber: 1,
  },
  setAdvancedSearchFieldData: (advancedSearchFieldData) => {},
  categoryToFieldKeyMap: {
    "Search By Brand": "brand",
    "Search By Model": "model",
    "Vehicle Type": "vehicleType",
    Fuel: "fuel",
    "Min Price": "priceMin",
    "Max Price": "priceMax",
    "Min Milleage": "milleageMin",
    "Max Milleage": "milleageMax",
    "Min Erd": "erdMin",
    "Max Erd": "erdMax",
    Transmission: "transmission",
    Country: "country",
  },
  setCategoryToFieldKeyMap: (categoryToFieldKeyMap) => {},
});
