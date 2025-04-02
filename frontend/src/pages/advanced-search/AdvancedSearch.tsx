import { useContext, useEffect, useState } from "react";
import { AdvancedSearchMobile } from "./advanced-search-mobile/AdvancedSearchMobile";
import { AdvancedSearchDesktop } from "./advanced-search-desktop/AdvancedSearchDesktop";
import { Delivery } from "../../components/delivery-section/Delivery";
import queryString from "query-string";
import useBrandModel from "../../hooks/useBrandModel";
import { CarCardContainer } from "../../components/car-card-container/CarCardContainer";
import CarCard from "../../components/car-card/CarCard";
import { CLoader } from "../../components/clip-loader/CLoader";
import { isValidLang } from "../../utils/utilsFunctions";
import {
  GlobalContext,
  type IGlobalContext,
} from "../../context/GlobalContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAdvancedSearchCars from "../../hooks/useAdvancedSearchCars";
import AdvanceIsLoading from "../../components/advance-loading/AdvanceIsLoading";
import { scroll_to_top } from "../../utils/utilsFunctions";
import { useTranslation } from "react-i18next";
import styles from "./advanced-search.module.scss";

const AdvancedSearch = () => {
  const { search } = useLocation();
  const queryParams = queryString.parse(search);
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation("advancedSearch");
  const { lang: urlLang } = useParams();

  useEffect(() => {
    if (urlLang && isValidLang(urlLang)) {
      globalContext.setLang(urlLang);
    } else if (globalContext.lang) {
      globalContext.setLang(globalContext.lang);
    } else {
      globalContext.setLang("en");
    }
  }, [urlLang]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    scroll_to_top();
    return () => clearTimeout(timer);
  }, []);

  const {
    data: brandData,
    error: brandDataError,
    isLoading: brandDataIsLoading,
  } = useBrandModel();
  const {
    data: advancedCarFetchedData,
    error: advancedCarError,
    isLoading: advancedCarIsLoading,
  } = useAdvancedSearchCars(globalContext.advancedSearchFieldData);

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
            key === "mileageMin" ||
            key === "mileageMax") &&
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
  }, [globalContext.advancedSearchFieldData, search, navigate]);

  useEffect(() => {
    const parseArrayParam = (
      param: string | (string | null)[] | undefined
    ): string[] => {
      if (typeof param === "string") {
        return param.split(",").filter(Boolean);
      } else if (Array.isArray(param)) {
        return param.filter((item): item is string => item !== null);
      }
      return [];
    };
    if (!brandDataIsLoading && brandData) {
      const allBrands = Object.keys(brandData.brands);

      const brandArray =
        queryParams.brand === "All Brands"
          ? ["All Brands", ...allBrands]
          : queryParams.brand
          ? parseArrayParam(queryParams.brand)
          : [];
      globalContext.setAdvancedSearchFieldData((prevData) => ({
        ...prevData,
        brand: [...brandArray],
        model: parseArrayParam(queryParams.model!),
        fuel: parseArrayParam(queryParams.fuel!),
        vehicleType: parseArrayParam(queryParams.vehicleType!),
        country: parseArrayParam(queryParams.country!),
        transmission: parseArrayParam(queryParams.transmission!),
        priceMin: queryParams.priceMin ? Number(queryParams.priceMin) : 0,
        priceMax: queryParams.priceMax ? Number(queryParams.priceMax) : 0,
        mileageMin: queryParams.mileageMin ? Number(queryParams.mileageMin) : 0,
        mileageMax: queryParams.mileageMax ? Number(queryParams.mileageMax) : 0,
        erdMin: queryParams.erdMin ? Number(queryParams.erdMin) : 0,
        erdMax: queryParams.erdMax ? Number(queryParams.erdMax) : 0,
        pageNumber: queryParams.pageNumber ? Number(queryParams.pageNumber) : 1,
      }));
    }
  }, [brandDataIsLoading]);

  if (loading) {
    return <CLoader />;
  }

  return (
    <div className={styles.container}>
      <AdvancedSearchMobile
        isLoading={advancedCarIsLoading}
        loadingContainer={<AdvanceIsLoading />}
        header={`${
          advancedCarIsLoading
            ? "Loading..."
            : `${advancedCarFetchedData?.totalCars} ${
                advancedCarFetchedData?.totalCars &&
                advancedCarFetchedData?.totalCars > 1
                  ? t("cars")
                  : t("car")
              } ${t("available")} `
        }`}
        carList={
          <CarCardContainer
            totalCars={advancedCarFetchedData?.totalCars || 0}
            currentPage={globalContext.carData.pageNumber}
          >
            {advancedCarFetchedData?.cars.map((car) => (
              <CarCard
                carId={car.carId}
                key={car.carId}
                carImage={car.carImages[0]}
                carBrand={car.lang[globalContext.lang].carBrand}
                carModel={car.lang[globalContext.lang].carModel}
                carMileage={car.carMileage.toString()}
                carFuel={car.lang[globalContext.lang].carFuel}
                carYear={car.carERD.toString()}
              />
            ))}
          </CarCardContainer>
        }
      />
      <AdvancedSearchDesktop
        isLoading={advancedCarIsLoading}
        loadingContainer={<AdvanceIsLoading />}
        header={`${
          advancedCarIsLoading
            ? "Loading..."
            : `${advancedCarFetchedData?.totalCars} ${
                advancedCarFetchedData?.totalCars &&
                advancedCarFetchedData?.totalCars > 1
                  ? t("cars")
                  : t("car")
              } ${t("available")} `
        }`}
        carList={
          <CarCardContainer
            totalCars={advancedCarFetchedData?.totalCars || 0}
            currentPage={globalContext.advancedSearchFieldData.pageNumber}
          >
            {advancedCarFetchedData?.cars.map((car) => (
              <CarCard
                carId={car.carId}
                key={car.carId}
                carImage={car.carImages[0]}
                carBrand={car.lang[globalContext.lang].carBrand}
                carModel={car.lang[globalContext.lang].carModel}
                carMileage={car.carMileage.toString()}
                carFuel={car.lang[globalContext.lang].carFuel}
                carYear={car.carERD.toString()}
              />
            ))}
          </CarCardContainer>
        }
      />
      <Delivery />
    </div>
  );
};
export default AdvancedSearch;
