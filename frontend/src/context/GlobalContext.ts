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
  brand: string[];
  budgetMin: number;
  budgetMax: number;
  vehicleType: string[];
  fuel: string;
  milleageMin: number;
  milleageMax: number;
  transmission: string;
  erd: string;
  body: string;
};
export interface IGlobalContext {
  carData: ICarData;
  setCarData: React.Dispatch<React.SetStateAction<ICarData>>;
  advancedSearchFieldData: IAdvancedSeachFieldData;
  setAdvancedSearchFieldData: React.Dispatch<
    React.SetStateAction<IAdvancedSeachFieldData>
  >;
  //   withdrawInvestment: IWithdrawal;
  //   setWithdrawInvestment: (investment: IWithdrawal) => void;
  //   showShoppingCart: boolean;
  //   setShowShoppingCart: (show: boolean) => void;
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
    fuel: "petrol",
    milleageMin: 0,
    milleageMax: 0,
    transmission: "automatic",
    erd: "",
    body: "sedan",
  },
  setAdvancedSearchFieldData: (advancedSearchFieldData) => {},
});
