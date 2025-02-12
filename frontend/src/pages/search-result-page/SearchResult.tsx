import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import styles from "./search-result.module.scss";
import { CarCardContainer2 } from "../../components/car-card-container2/CarCardContainer";
import { Delivery } from "../../components/delivery-section/Delivery";
import {
  GlobalContext,
  ICarData,
  type IGlobalContext,
} from "../../context/GlobalContext";
import { FaArrowRight } from "react-icons/fa";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import useBrandModel from "../../hooks/useBrandModel";
import useCars from "../../hooks/useCars";
import CarCard from "../../components/car-card/CarCard";
import queryString from "query-string";
import { goToAdvancedSearch } from "../../utils/goToResults";
const SearchResult = () => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const [searchParams] = useSearchParams();
  const { search } = useLocation();
  const queryParams = queryString.parse(search);

  const navigate = useNavigate();
  const {
    data: brandModelData,
    error: brandModelError,
    isLoading: brandModelIsLoading,
  } = useBrandModel();

  const {
    data: carFetchedData,
    error: carError,
    isLoading: carIsLoading,
  } = useCars(globalContext.carData);

  useEffect(() => {
    console.log(globalContext.carData);
  }, [globalContext.carData]);

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

    navigate(`/search-result?${newParams.toString()}`);
  };

  useEffect(() => {
    if (!brandModelIsLoading && brandModelData) {
      globalContext.setCarData((prevData: ICarData) => ({
        carType: "",
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
  }, [search, brandModelIsLoading]);

  useEffect(() => {
    console.log(carFetchedData);
  }, [carFetchedData]);

  return (
    <div className={styles.container_wrapper}>
      <div className={styles.container}>
        <h1 className={styles.header}>
          {globalContext.carData.brand &&
          globalContext.carData.brand !== "All Brands"
            ? `${globalContext.carData.brand} Car Models`
            : globalContext.carData.brand === "All Brands" &&
              globalContext.carData.model
            ? `${globalContext.carData.model} Models`
            : "All Cars"}
        </h1>
        {carFetchedData?.totalCars ? (
          <p className={styles.para}>
            There are a total of {carFetchedData?.totalCars}{" "}
            {globalContext.carData.brand &&
            globalContext.carData.brand !== "All Brands"
              ? `${globalContext.carData.brand} models`
              : "cars"}{" "}
            available{" "}
            {globalContext.carData.country
              ? `in ${globalContext.carData.country}`
              : ""}
          </p>
        ) : carIsLoading ? (
          <p className={styles.para}></p>
        ) : (
          <p className={styles.para}>No Cars Found</p>
        )}

        <div className={styles.make_model_container}>
          <select
            className={styles.make_select}
            id="make-select"
            name="brand"
            value={globalContext.carData.brand}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Make
            </option>
            <option value="All Brands">All Brands</option>
            {brandModelData &&
              Object.keys(brandModelData).map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
          </select>
          <select
            className={styles.model_select}
            id="model-select"
            value={globalContext.carData.model}
            name="model"
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Model
            </option>

            {globalContext.carData.brand && brandModelData ? (
              globalContext.carData.brand === "All Brands" ? (
                Object.values(brandModelData)
                  .flat()
                  .map((model, index) => (
                    <option key={index} value={model}>
                      {model}
                    </option>
                  ))
              ) : (
                brandModelData[globalContext.carData.brand]?.map(
                  (model, index) => (
                    <option key={index} value={model}>
                      {model}
                    </option>
                  )
                )
              )
            ) : (
              <option value="" disabled>
                Select a brand first
              </option>
            )}
          </select>
        </div>
        <div
          onClick={() => goToAdvancedSearch(globalContext, navigate)}
          className={styles.advanced_search_container}
        >
          <p className={styles.advance_search_text}>Advanced search</p>
          <FaArrowRight className={styles.advance_search_icon} />
        </div>
        <CarCardContainer2
          totalCars={carFetchedData?.totalCars || 0}
          currentPage={globalContext.carData.pageNumber}
        >
          {carIsLoading ? (
            <div>Loading...</div>
          ) : carFetchedData?.cars && carFetchedData.cars.length > 0 ? (
            carFetchedData.cars.map((car) => (
              <CarCard
                key={car.carId}
                carImage={car.carImages[0]}
                carBrand={car.carBrand}
                carModel={car.carModel}
                carMilleage={car.carMilleage}
                carFuel={car.carFuel}
                carYear={car.carERD}
                // handleViewDetails={() => console.log("success")}
              />
            ))
          ) : (
            <div>No cars available to display.</div>
          )}
        </CarCardContainer2>
      </div>
      <Delivery />
    </div>
  );
};

export default SearchResult;
