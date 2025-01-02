import React, { useContext } from "react";
import {
  GlobalContext,
  type IGlobalContext,
} from "../../context/GlobalContext";

import styles from "./filter-price.module.scss";

export const FilterPrice = () => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? 0 : parseFloat(e.target.value);

    globalContext.setAdvancedSearchFieldData((prev) => ({
      ...prev,
      priceMin: value,
    }));
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? 0 : parseFloat(e.target.value);
    globalContext.setAdvancedSearchFieldData((prev) => ({
      ...prev,
      priceMax: value,
    }));
  };

  return (
    <form className={styles.form_container} action="">
      <input type="number" placeholder="Min Price" onChange={handleMinChange} />
      <input type="number" placeholder="Max Price" onChange={handleMaxChange} />
    </form>
  );
};
