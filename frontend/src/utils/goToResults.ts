import { NavigateFunction } from "react-router-dom";
import { ICarData, IGlobalContext } from "../context/GlobalContext";
import queryString from "query-string";

export const goToAdvancedSearch = (
  globalContext: IGlobalContext,
  navigate: NavigateFunction
) => {
  const fields: (keyof ICarData)[] = [
    "brand",
    "model",
    "vehicleType",
    "fuel",
    "transmission",
    "country",
  ];
  const updatedData: Record<string, string[]> = {};
  const queryParams: Record<string, string | number | string[]> = {};
  

  fields.forEach((field) => {
    const value = globalContext.carData[field];
    updatedData[field] = value ? [String(value)] : [];
    if (value) {
      queryParams[field] = String(value);
    }
  });
  queryParams.pageNumber = 1;

  globalContext.setAdvancedSearchFieldData((prevData) => ({
    ...prevData,
    ...updatedData,
  }));
  const query = queryString.stringify(queryParams, {
    skipEmptyString: true,
  });
  navigate(`/${globalContext.lang}/advanced-search?${query}`);
};

export const goToSearchResult = (
  globalContext: IGlobalContext,
  navigate: NavigateFunction
) => {
  const query = queryString.stringify(
    {
      carType: globalContext.carData.carType,
      brand: globalContext.carData.brand,
      model: globalContext.carData.model,
      vehicleType: globalContext.carData.vehicleType,
      fuel: globalContext.carData.fuel,
      transmission: globalContext.carData.transmission,
      country: globalContext.carData.country,
      pageNumber: 1,
    },
    {
      skipEmptyString: true,
    }
  );
  navigate(`/${globalContext.lang}/search-result?${query}`);
};