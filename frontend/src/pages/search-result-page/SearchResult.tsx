import React, { useContext, useEffect } from "react";

import styles from "./search-result.module.scss";
import { CarCardContainer2 } from "../../components/car-card-container2/CarCardContainer";
import { Delivery } from "../../components/delivery-section/Delivery";

import { GlobalContext, type ICarData, type IGlobalContext } from '../../context/GlobalContext';

const SearchResult = () => {
const globalContext = useContext<IGlobalContext>(GlobalContext);

  useEffect(()=>{
    console.log(globalContext.carData);
  },[])
  return (
    <div className={styles.container_wrapper}>
    <div className={styles.container}>
      <h1 className={styles.header}>Jeep cars models</h1>
      <p className={styles.para}>
        There are a total of 60 Jeep models currently on sale in India. These
        include 20 SUVs Jeep 10 Jeep Avenger, Jeep Sub-4m SUV.
      </p>
      <div className={styles.make_model_container}>
        <select className={styles.make_select} id="make-select">
          <option value="" disabled selected>
            Select Make
          </option>
          <option className={styles.option_item} value="us">
            Toyota
          </option>
          <option className={styles.option_item} value="ca">
            Toyota
          </option>
          <option className={styles.option_item} value="gb">
            Toyota
          </option>
          <option className={styles.option_item} value="au">
            Toyota
          </option>
          <option className={styles.option_item} value="in">
            Toyota
          </option>
        </select>
        <select className={styles.model_select} id="model-select">
          <option value="" disabled selected>
            Select Model
          </option>
          <option className={styles.option_item} value="us">
            Corolla
          </option>
          <option className={styles.option_item} value="ca">
            Corolla
          </option>
          <option className={styles.option_item} value="gb">
            Corolla
          </option>
          <option className={styles.option_item} value="au">
            Corolla
          </option>
          <option className={styles.option_item} value="in">
            Corolla
          </option>
        </select>
      </div>
      <CarCardContainer2/>
    </div>
    <Delivery/>
s
    </div>
  );
};

export default SearchResult;
