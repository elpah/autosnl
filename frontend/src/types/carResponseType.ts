import { IDealer } from "./otherTypes";

// type ICarDataResponse = {
//   carId: string;
//   carType?: string;
//   carBrand: string;
//   carModel: string;
//   carImages: string[];
//   carMileage: string;
//   carFuel: string;
//   carTransmission: string;
//   carPower?: string;
//   carEngineCapacity?: string;
//   carERD: string;
//   carMODTill?: string;
//   carSalesPrice?: string;
//   carNetPrice?: string;
//   carVat?: string;
//   carColor?: string;
//   carVanish?: string;
//   carGrossExportPrice?: string;
//   carBody?: string;
//   carNumberOfDoors?: string;
//   carWeight?:string
//   carDamages?: string[];
//   carDamageDetails?: {
//     title: string;
//     text: string;
//   }[];
//   carDetails?: string;
//   carOptions?: {
//     airbag: string;
//     coolingAndHeating: string;
//     security: string;
//     other: string;
//     exterior: string;
//     entertainment: string;
//     comfortInterior: string;
//     interior: string;
//     comfortExterior: string;
//     safety: string;
//     emmission: string;
//     Lightening: string;
//     salesInformation: string;
//   };
//   dealerId?:string;
// };


// type ICarResponse = {
//   totalCars: number;
//   dealer?: IDealer;
//   cars: ICarDataResponse[];
// };

// export { type ICarDataResponse, type ICarResponse };




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
};

export {
  type ICarResponse,
  type ICarDataResponse,
};
