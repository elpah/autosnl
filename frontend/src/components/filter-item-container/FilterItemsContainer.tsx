import React, { useState, useContext } from "react";

import {
  GlobalContext,
  type IGlobalContext,
} from "../../context/GlobalContext";

import styles from "./filter-items-container.module.scss";
import { FilterItem } from "../filter-item-card/FilterItem";
import { SelectItemContainer } from "../select-item-container/SelectItemContainer";
import { FilterOtherContainer } from "../filter-other-container/FilterOtherContainer";
import { FilterOther } from "../filter_other/FilterOther";
import { FilterOtherOption } from "../filter_other/filter_other_option/FilterOtherOption";
import { FilterPrice } from "../filter-price/FilterPrice";
import { CategoryCheckItem } from "../sidebar-filters/category-check-item/CategoryCheckItem";
import { categoryData } from "../../tdata/categoryData";

export const FilterItemsContainer = () => {
  const [closeContainer, setCloseContainer] = useState(true);
  const [currentTitle, setCurrentTitle] = useState("");
  const globalContext = useContext<IGlobalContext>(GlobalContext);

  const label = (array: any) => {
    if (array.price_min && array.price_max)
      return `€${array.price_min} - €${array.price_max}`;
    else if (array.kpml_min || array.kpml_max <= 10) {
      if (array.kpml_min && array.kpml_max) {
        return `${array.kpml_min} Kpml - ${array.kpml_max} Kpml`;
      } else if (array.kpml_max <= 10) return `Under 10 Kpml`;
    } else return array.title;
  };
  const foundCategory = categoryData.find(
    (category) => category.title === currentTitle
  );

  const handleMinPriceChange = (fieldKey: string, value: number) => {
    globalContext.setAdvancedSearchFieldData((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  const handleMaxPriceChange = (fieldKey: string, value: number) => {
    globalContext.setAdvancedSearchFieldData((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  return (
    <>
      <div className={styles.filter_items_container}>
        {categoryData.map((category, index) => (
          <FilterItem
            key={index}
            title={category.title}
            handleclick={() => {
              setCurrentTitle(category.title);
              setCloseContainer(true);
            }}
            selected={category.title === currentTitle}
          />
        ))}
      </div>
      <div className={styles.select_item_container_wrapper}>
        {foundCategory && closeContainer && (
          <SelectItemContainer
            key={foundCategory.title}
            handleCloseContainer={() => setCloseContainer(false)}
            title={foundCategory.title}
          >
            {foundCategory.title === "Price (€)" ? (
              <FilterPrice />
            ) : foundCategory.values ? (
              foundCategory.values.map((value, index) => (
                <CategoryCheckItem
                  key={index}
                  label={label(value)}
                  number_of_cars={value.number_of_cars}
                  fieldKey="brand"
                />
              ))
            ) : (
              <FilterOtherContainer>
                <FilterOther
                  minOrMaxLabel={foundCategory.label?.min}
                  handleValueChange={(value) =>
                    handleMinPriceChange(`${foundCategory.field?.min}`, value)
                  }
                >
                  {foundCategory["Min"]?.map((minValue, index: number) => (
                    <FilterOtherOption
                      key={index}
                      value={minValue}
                      label={`${minValue}`}
                    />
                  ))}
                </FilterOther>
                <FilterOther
                  minOrMaxLabel={foundCategory.label?.max}
                  handleValueChange={(value) =>
                    handleMaxPriceChange(`${foundCategory.field?.max}`, value)
                  }
                >
                  {foundCategory["Max"]?.map((maxValue, index: number) => (
                    <FilterOtherOption
                      key={index}
                      value={maxValue}
                      label={`${maxValue}`}
                    />
                  ))}
                </FilterOther>
              </FilterOtherContainer>
            )}
          </SelectItemContainer>
        )}
      </div>
    </>
  );
};
