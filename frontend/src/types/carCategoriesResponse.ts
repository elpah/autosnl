// type ICarCategoriesResponse = {
//   brands: { [brand: string]: string[] };
//   countries: string[];
//   fuel: string[];
//   body: string[];
// };



type CarTranslation = {
  en: string;
  ru: string;
  nl: string;
  ua: string;
};

type Model = {
  [modelName: string]: CarTranslation;
};

type Brand = {
  name: CarTranslation;
  models: Model;
};

type Brands = {
  [brandName: string]: Brand;
};

type Country = CarTranslation;

type Countries = {
  [countryCode: string]: Country;
};

type Fuel = CarTranslation;

type FuelTypes = {
  [fuelType: string]: Fuel;
};

type Body = CarTranslation;

type Bodies = {
  [bodyType: string]: Body;
};

export type ICarCategoriesResponse = {
  brands: Brands;
  countries: Countries;
  fuel: FuelTypes;
  body: Bodies;
};
