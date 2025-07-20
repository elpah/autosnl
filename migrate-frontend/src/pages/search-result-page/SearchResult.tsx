import { type ChangeEvent, useContext, useEffect } from "react";
import { CarCardContainer2 } from "../../components/car-card-container2/CarCardContainer";
import { Delivery } from "../../components/delivery-section/Delivery";
import {
  GlobalContext,
  type ICarData,
  type IGlobalContext,
} from "../../context/GlobalContext";
import { FaArrowRight } from "react-icons/fa";
import {
  useSearchParams,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import useBrandModel from "../../hooks/useBrandModel";
import useCars from "../../hooks/useCars";
import CarCard from "../../components/car-card/CarCard";
import queryString from "query-string";
import { goToAdvancedSearch } from "../../utils/goToResults";
import { LoadingCars } from "../../components/loading-cars/LoadingCars";
import { scroll_to_top } from "../../utils/utilsFunctions";
import { useTranslation } from "react-i18next";
import { isValidLang } from "../../utils/utilsFunctions";
import styles from "./search-result.module.scss";

const SearchResult = () => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const [searchParams] = useSearchParams();
  const { search } = useLocation();
  const queryParams = queryString.parse(search);
  const { lang: urlLang } = useParams();
  const { t } = useTranslation<string>("searchResult");

  useEffect(() => {
    scroll_to_top();
  }, [globalContext]);

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
    if (!globalContext.carData.carType) {
      globalContext.setCarData((prevData: ICarData) => ({
        ...prevData,
        carType: "used",
      }));
    }
  }, []);

  const navigate = useNavigate();
  const {
    data: brandModelData,
    // error: brandModelError,
    isLoading: brandModelIsLoading,
  } = useBrandModel();

  const {
    data: carFetchedData,
    // error: carError,
    isLoading: carIsLoading,
  } = useCars(globalContext.carData);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const resetFields = [
      "fuel",
      "transmission",
      "vehicleType",
      "country",
      "carType",
    ];

    if (name === "brand") {
      globalContext.setCarData((prevData: ICarData) => ({
        ...prevData,
        carType: "",
        fuel: "",
        transmission: "",
        vehicleType: "",
        country: "",
        model: "",
        pageNumber: 1,
      }));
    } else {
      globalContext.setCarData((prevData: ICarData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    const newParams = new URLSearchParams(searchParams);
    newParams.set(name, value);
    if (name === "brand") {
      newParams.delete("model");
    }
    newParams.set("pageNumber", "1");
    resetFields.forEach((param) => newParams.delete(param));

    navigate(`/${globalContext.lang}/search-result?${newParams.toString()}`);
  };

  useEffect(() => {
    if (!brandModelIsLoading && brandModelData) {
      globalContext.setCarData(() => ({
        carType: queryParams.carType ? String(queryParams.carType) : "",
        brand: queryParams.brand ? String(queryParams.brand) : "",
        model: queryParams.model ? String(queryParams.model) : "",
        fuel: queryParams.fuel ? String(queryParams.fuel) : "",
        transmission: queryParams.transmission
          ? String(queryParams.transmission)
          : "",
        vehicleType: queryParams.vehicleType
          ? String(queryParams.vehicleType)
          : "",
        country: queryParams.country ? String(queryParams.country) : "",
        pageNumber: queryParams.pageNumber ? Number(queryParams.pageNumber) : 1,
      }));
    }
  }, [search, brandModelIsLoading, brandModelData]);

  return (
    <div className={styles.container_wrapper}>
      <div className={styles.container}>
        <h1 className={styles.header}>
          {globalContext.carData.brand &&
          globalContext.carData.brand !== "All Brands"
            ? globalContext.carData.model
              ? `${
                  brandModelData?.brands[globalContext.carData.brand]?.name[
                    globalContext.lang
                  ]
                } ${
                  brandModelData?.brands[globalContext.carData.brand]?.models[
                    globalContext.carData.model
                  ]?.[globalContext.lang]
                }`
              : `${
                  brandModelData?.brands[globalContext.carData.brand]?.name[
                    globalContext.lang
                  ]
                }`
            : globalContext.carData.brand === "All Brands" &&
              globalContext.carData.model
            ? (() => {
                let foundBrand = "";
                let modelName = "";
                for (const brandKey in brandModelData?.brands) {
                  const brand = brandModelData?.brands[brandKey];
                  if (
                    brand.models &&
                    brand.models[globalContext.carData.model]
                  ) {
                    foundBrand = brandKey;
                    modelName =
                      brand.models[globalContext.carData.model][
                        globalContext.lang
                      ];
                    break;
                  }
                }
                return foundBrand && modelName
                  ? `${
                      brandModelData?.brands[foundBrand]?.name[
                        globalContext.lang
                      ]
                    } ${modelName}`
                  : `${t("allCars")}`;
              })()
            : t("allCars")}{" "}
        </h1>
        <p
          className={styles.para}
          style={{ visibility: carIsLoading ? "hidden" : "visible" }}
        >
          {carFetchedData?.totalCars
            ? `${carFetchedData.totalCars} ${
                carFetchedData.totalCars > 1 ? t("cars") : t("car")
              } ${t("available")}`
            : t("noCarsAvailable")}
        </p>

        <div className={styles.make_model_container}>
          <select
            className={styles.make_select}
            id="make-select"
            name="brand"
            value={globalContext.carData.brand}
            onChange={handleChange}
          >
            <option value="" disabled>
              {t("selectMake")}
            </option>
            <option value="All Brands">{t("allbrands")}</option>
            {brandModelData &&
              brandModelData.brands &&
              Object.keys(brandModelData.brands).map((brand, index) => {
                const brandData = brandModelData.brands[brand];
                const brandName = brandData.name[globalContext.lang];
                return (
                  <option key={index} value={brand}>
                    {brandName}
                  </option>
                );
              })}
          </select>
          <select
            className={styles.model_select}
            id="model-select"
            value={globalContext.carData.model}
            name="model"
            onChange={handleChange}
          >
            <option value="" disabled>
              {t("selectModel")}
            </option>
            {globalContext.carData.brand && brandModelData ? (
              globalContext.carData.brand === "All Brands" ? (
                Object.keys(brandModelData.brands).map((brandName, index) => {
                  const brandModels = brandModelData.brands[brandName].models;

                  if (!brandModels) {
                    return null;
                  }
                  return Object.keys(brandModels).map(
                    (modelName, modelIndex) => {
                      const model = brandModels[modelName];
                      const modelNameTranslated = model[globalContext.lang];

                      return (
                        <option
                          key={`${index}-${modelIndex}`}
                          value={modelName}
                        >
                          {modelNameTranslated}
                        </option>
                      );
                    }
                  );
                })
              ) : (
                Object.keys(
                  brandModelData.brands[globalContext.carData.brand].models
                ).map((modelName, index) => {
                  const model =
                    brandModelData.brands[globalContext.carData.brand].models[
                      modelName
                    ];
                  const modelNameTranslated = model[globalContext.lang];
                  return (
                    <option key={index} value={modelName}>
                      {modelNameTranslated}
                    </option>
                  );
                })
              )
            ) : (
              <option value="" disabled>
                {t("selectBrandFirst")}
              </option>
            )}
          </select>
        </div>
        <div
          onClick={() => {
            globalContext.setAdvancedSearchFieldData((prev) => ({
              ...prev,
              dealerId: "",
            }));
            goToAdvancedSearch(globalContext, navigate);
          }}
          className={styles.advanced_search_container}
        >
          <p className={styles.advance_search_text}>{t("advancedSearch")}</p>
          <FaArrowRight className={styles.advance_search_icon} />
        </div>

        {carIsLoading ? (
          <LoadingCars />
        ) : carFetchedData?.cars && carFetchedData.cars.length > 0 ? (
          <CarCardContainer2
            totalCars={carFetchedData?.totalCars || 0}
            currentPage={globalContext.carData.pageNumber}
          >
            {carFetchedData.cars.map((car) => (
              <CarCard
                carId={car.carId}
                key={car.carId}
                carImage={car.carImages[0]}
                carBrand={car.lang[globalContext.lang].carBrand}
                carModel={car.lang[globalContext.lang].carModel}
                carMileage={car.carMileage.toString()}
                carFuel={car.lang[globalContext.lang].carFuel}
                carYear={car.carERD.toString()}
                carPrice={car.price_incl_btw? `€ ${car.price_incl_btw}` : ""}
              />
            ))}
          </CarCardContainer2>
        ) : (
          <p>{t("noneFound")}</p>
        )}
      </div>
      <Delivery />
    </div>
  );
};
export default SearchResult;
