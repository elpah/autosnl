import { type CarTranslation } from "./carCategoriesResponse";

export type CarLang = {
  carBrand: string;
  carModel: string;
  carBody: string;
  carFuel: string;
};

export type Car = {
  _id: string;
  carId: string;
  lang: {
    en: CarLang;
    ru: CarLang;
    nl: CarLang;
    ua: CarLang;
  };
  carImages: string[];
  carMileage: number;
  carERD: number;
  price_incl_btw: string;
};

export type SectionBody = Record<string, CarTranslation>;

export type Sections = {
  recommended: {
    cars: Car[];
    body: SectionBody;
  };
  trusted: {
    cars: Car[];
    body: SectionBody;
  };
  damaged: {
    cars: Car[];
    body: SectionBody;
  };
};

export type HomeSectionResponse = {
  sections: Sections;
};
