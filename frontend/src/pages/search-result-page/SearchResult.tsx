import React, { useContext, useEffect, useState } from "react";
import styles from "./search-result.module.scss";
import { CarCardContainer2 } from "../../components/car-card-container2/CarCardContainer";
import { Delivery } from "../../components/delivery-section/Delivery";
import {
  GlobalContext,
  type IGlobalContext,
} from "../../context/GlobalContext";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchResult = () => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);

  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(globalContext.carData);
  }, [globalContext.carData]);

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMake(e.target.value);
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
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
            value={selectedMake}
            onChange={handleMakeChange}
          >
            <option value="" disabled>
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

          <select
            className={styles.model_select}
            id="model-select"
            value={selectedModel}
            onChange={handleModelChange}
          >
            <option value="" disabled>
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
