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
import { useNavigate } from "react-router-dom";
import useBrandModel from "../../hooks/useBrandModel";
import useCars from "../../hooks/useCars";

const SearchResult = () => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const navigate = useNavigate();
  const { data:brandModelData, error:brandModelError, isLoading:brandModelIsLoading } = useBrandModel();
  useState()
    const { data:carData, error:carError, isLoading:carIsLoading } = useCars(globalContext.carData.carBrand,globalContext.carData.carModel, globalContext.carData.pageNumber);


  useEffect(() => {
    console.log(globalContext.carData);
  }, [globalContext.carData]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name == "carBrand") {
      globalContext.setCarData((prevData: ICarData) => ({
        ...prevData,
        carModel: "",
      }));
    }
    globalContext.setCarData((prevData: ICarData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container_wrapper}>
      <div className={styles.container}>
        <h1 className={styles.header}>Jeep cars models</h1>
        <p className={styles.para}>
          There are a total of 60 Jeep models currently on sale in India. These
          include 20 SUVs Jeep 10 Jeep Avenger, Jeep Sub-4m SUV.
        </p>
        <div className={styles.make_model_container}>
          <select
            className={styles.make_select}
            id="make-select"
            name="carBrand"
            value={globalContext.carData.carBrand}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Make
            </option>
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
            value={globalContext.carData.carModel}
            name="carModel"
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Model
            </option>
            {globalContext.carData.carBrand && brandModelData ? (
              brandModelData[globalContext.carData.carBrand]?.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))
            ) : (
              <option value="" disabled>
                Select a brand first
              </option>
            )}
          </select>
        </div>
        <div
          onClick={() => navigate("/advanced-search")}
          className={styles.advanced_search_container}
        >
          <p className={styles.advance_search_text}>Advanced search</p>
          <FaArrowRight className={styles.advance_search_icon} />
        </div>
        <CarCardContainer2 />
      </div>
      <Delivery />
    </div>
  );
};

export default SearchResult;
