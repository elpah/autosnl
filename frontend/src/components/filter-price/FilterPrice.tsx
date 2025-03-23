import React, { useContext, useState } from "react";
import {
  GlobalContext,
  type IGlobalContext,
} from "../../context/GlobalContext";

import styles from "./filter-price.module.scss";

export const FilterPrice = () => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);

  const minLimit = 0;
  const maxLimit = 150000;

  const [minPrice, setMinPrice] = useState(
    globalContext.advancedSearchFieldData.priceMin || minLimit
  );
  const [maxPrice, setMaxPrice] = useState(
    globalContext.advancedSearchFieldData.priceMax || maxLimit
  );

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || minLimit;
    if (value < maxPrice) {
      setMinPrice(value);
      globalContext.setAdvancedSearchFieldData((prev) => ({
        ...prev,
        priceMin: value,
      }));
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || maxLimit;
    if (value > minPrice) {
      setMaxPrice(value);
      globalContext.setAdvancedSearchFieldData((prev) => ({
        ...prev,
        priceMax: value,
      }));
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value);

    if (name === "min" && numericValue < maxPrice) {
      setMinPrice(numericValue);
      globalContext.setAdvancedSearchFieldData((prev) => ({
        ...prev,
        priceMin: numericValue,
      }));
    }
    if (name === "max" && numericValue > minPrice) {
      setMaxPrice(numericValue);
      globalContext.setAdvancedSearchFieldData((prev) => ({
        ...prev,
        priceMax: numericValue,
      }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider_container}>
        <input
          className={styles.range_input}
          type="range"
          name="min"
          min={minLimit}
          max={maxLimit}
                   step={100}

          value={minPrice}
          onChange={handleSliderChange}
        />
        <input
          className={styles.range_input}
          type="range"
          name="max"
          min={minLimit}
          max={maxLimit}
                   step={100}

          value={maxPrice}
          onChange={handleSliderChange}
        />
        <div
          className={styles.range_track}
          style={{
            left: `${(minPrice / maxLimit) * 100}%`,
            right: `${100 - (maxPrice / maxLimit) * 100}%`,
          }}
        />
      </div>
      <div className={styles.price_values}>
        <span>€{minPrice}</span> - <span>€{maxPrice}</span>
      </div>
      <form className={styles.form_container}>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinChange}
          min={minLimit}
          max={maxPrice - 1}
                    step={100}

        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxChange}
          min={minPrice + 1}
          max={maxLimit}
          step={100}
        />
      </form>
    </div>
  );
};
