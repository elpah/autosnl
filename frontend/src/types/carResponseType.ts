import { IDealer } from "./otherTypes";

type ICarDamageDetail = {
  title: string;
  text: string;
};

type ICarOptions = {
  airbag?: string[];
  coolingAndHeating?: string[];
  security?: string[];
  entertainment?: string[];
  comfortInterior?: string[];
  comfortExterior?: string[];
  safety?: string[];
  lighting?: string[];
};

type ICarLocalizedData = {
  carBrand: string;
  carModel: string;
  carDetails?: string;
  carBody?: string;
  carColor?: string;
  carVanish?: string;
  carTransmission?: string;
  carFuel: string;
  carCountry?: string;
  carDamageDetails?: ICarDamageDetail[];
  carOptions?: ICarOptions;
  carType: string;
};

type ICarDataResponse = {
  carId: string;
  lang: Record<string, ICarLocalizedData>;
  carImages: string[];
  carMileage: number;
  carWeight?: string;
  carPower?: string;
  carEngineCapacity?: string;
  carERD: number;
  carMODTill?: string;
  dealer?: string;
  price_incl_btw?: number;
  price_excl_btw?: number;
  price_excl_bpm?: number;
  carVat?: number;
  carNumberOfDoors?: string;
};


type ICarResponse = {
  totalCars: number;
  cars: ICarDataResponse[];
  dealer?: IDealer;
};

export {
  type ICarResponse,
  type ICarDataResponse,
};
