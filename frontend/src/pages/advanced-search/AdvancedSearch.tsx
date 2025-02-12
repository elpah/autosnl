import React, { useContext, useEffect } from "react";
import styles from "./advanced-search.module.scss";
import { AdvancedSearchMobile } from "./advanced-search-mobile/AdvancedSearchMobile";
import { AdvancedSearchDesktop } from "./advanced-search-desktop/AdvancedSearchDesktop";
import { Delivery } from "../../components/delivery-section/Delivery";
import queryString from "query-string";
import useBrandModel from "../../hooks/useBrandModel";

import {
  GlobalContext,
  type ICarData,
  type IGlobalContext,
} from "../../context/GlobalContext";
import { useLocation, useNavigate } from "react-router-dom";
import useAdvancedSearchCars from "../../hooks/useAdvancedSearchCars";

const AdvancedSearch = () => {
  const { search } = useLocation();
  const queryParams = queryString.parse(search);
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const navigate = useNavigate();
  const { data: brandData, error:brandDataError, isLoading:brandDataIsLoading } = useBrandModel();
  const {
    data: advancedCarFetchedData,
    error: advancedCarError,
    isLoading: advancedCarIsLoading,
  } = useAdvancedSearchCars(globalContext.advancedSearchFieldData);


  useEffect(()=>{
    console.table(globalContext.advancedSearchFieldData);
  },[]);

   useEffect(() => {
    let params: Record<string, string | string[] | null> = {};
    const brand = globalContext.advancedSearchFieldData.brand;
    if (brand && brand.includes("All Brands")) {
      params.brand = "All Brands";
    } else if (brand && brand.length > 0) {
      params.brand = brand.join(",");
    } else {
      delete params.brand;
    }

    Object.entries(globalContext.advancedSearchFieldData).forEach(
      ([key, value]) => {
        if (key === "brand") return;
        if (Array.isArray(value) && value.length > 0) {
          params[key] = value.join(",");
        } else if (
          (key === "priceMin" ||
            key === "priceMax" ||
            key === "erdMin" ||
            key === "erdMax" ||
            key === "milleageMin" ||
            key === "milleageMax") &&
          typeof value === "number" &&
          value > 0
        ) {
          params[key] = value.toString();
        } else {
          delete params[key];
        }
      }
    );

    const queryStringParams = queryString.stringify(params);

    if (queryStringParams) {
      navigate(`?${queryStringParams}`, { replace: true });
    }
  }, [globalContext.advancedSearchFieldData, search, navigate ]);


  useEffect(() => {
     const parseArrayParam = (
      param: string | (string | null)[] | undefined
    ): string[] => {
      if (typeof param === "string") {
        return param.split(",");
      } else if (Array.isArray(param)) {
        return param.filter((item): item is string => item !== null);
      }
      return [];
    };
    if (!brandDataIsLoading && brandData) {
      const allBrands = Object.keys(brandData);
      const brandArray =
        queryParams.brand === "All Brands"
          ? ["All Brands", ...allBrands]
          : queryParams.brand
          ? [queryParams.brand as string]
          : [];
      globalContext.setAdvancedSearchFieldData((prevData) => ({
        ...prevData,
        brand: brandArray,
        model: parseArrayParam(queryParams.model!),
        fuel: parseArrayParam(queryParams.fuel!),
       vehicleType: parseArrayParam(queryParams.vehicleType!),
      country: parseArrayParam(queryParams.country!),
      transmission: parseArrayParam(queryParams.transmission!),
      priceMin: queryParams.priceMin ? Number(queryParams.priceMin) : 0, 
      priceMax: queryParams.priceMax ? Number(queryParams.priceMax) : 0,
       milleageMin: queryParams.milleageMin
        ? Number(queryParams.milleageMin)
        : 0,
      milleageMax: queryParams.milleageMax
        ? Number(queryParams.milleageMax)
        : 0,
      erdMin: queryParams.erdMin ? Number(queryParams.erdMin) : 0,
      erdMax: queryParams.erdMax ? Number(queryParams.erdMax) : 0,
      pageNumber: queryParams.pageNumber ? Number(queryParams.pageNumber) : 1,
      }));
    }
  }, [brandDataIsLoading]);

 
  return (
    <div className={styles.container}>
      <AdvancedSearchMobile />
      <AdvancedSearchDesktop />
      <Delivery />
    </div>
  );
};

export default AdvancedSearch;
