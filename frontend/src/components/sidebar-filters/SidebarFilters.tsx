import { useContext, useEffect } from "react";

import styles from "./sidebar-filter.module.scss";
import { Category } from "./categories/Category";
import { CategoryCheckItem } from "./category-check-item/CategoryCheckItem";
import { categoryData } from "../../tdata/categoryData";

import {
  GlobalContext,
  type IGlobalContext,
} from "../../context/GlobalContext";
import { FilterOtherContainer } from "../filter-other-container/FilterOtherContainer";
import { FilterOtherOption } from "../filter_other/filter_other_option/FilterOtherOption";
import { FilterOther } from "../filter_other/FilterOther";
import { FilterPrice } from "../filter-price/FilterPrice";

export const SidebarFilters = () => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);

  useEffect(() => {
    console.table(globalContext.advancedSearchFieldData);
  }, [globalContext.advancedSearchFieldData]);

  const label = (array: any) => {
    if (array.price_min && array.price_max)
      return `€${array.price_min} - €${array.price_max}`;
    else if (array.kpml_min || array.kpml_max <= 10) {
      if (array.kpml_min && array.kpml_max) {
        return `${array.kpml_min} Kpml - ${array.kpml_max} Kpml`;
      } else if (array.kpml_max <= 10) return `Under 10 Kpml`;
    } else return array.title;
  };

  const handleMinChange = (fieldKey: string, value: number) => {
    globalContext.setAdvancedSearchFieldData((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  const handleMaxChange = (fieldKey: string, value: number) => {
    globalContext.setAdvancedSearchFieldData((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  return (
    <div className={styles.container}>
      {categoryData.map((category, index) => {
        const fieldKey = globalContext.categoryToFieldKeyMap[category.title];

        if (fieldKey === null) return null;

        return (
          <Category key={index} title={category.title}>
            {category.title === "Price (€)" ? (
              <FilterPrice />
            ) : category.values ? (
              category.values.map((value, index) => (
                <CategoryCheckItem
                  key={index}
                  label={label(value)}
                  number_of_cars={value.number_of_cars}
                  fieldKey={fieldKey}
                />
              ))
            ) : (
              <FilterOtherContainer>
                <FilterOther
                  minOrMaxLabel={category.label.min}
                  handleValueChange={(value) =>
                    handleMinChange(`${category.field?.min}`, value)
                  }
                >
                  {category["Min"]?.map((minValue, index: number) => (
                    <FilterOtherOption
                      key={index}
                      value={minValue}
                      label={`${minValue}`}
                    />
                  ))}
                </FilterOther>
                <FilterOther
                  minOrMaxLabel={category.label.max}
                  handleValueChange={(value) =>
                    handleMaxChange(`${category.field?.max}`, value)
                  }
                >
                  {category["Max"]?.map((maxValue, index: number) => (
                    <FilterOtherOption
                      key={index}
                      value={maxValue}
                      label={`${maxValue}`}
                    />
                  ))}
                </FilterOther>
              </FilterOtherContainer>
            )}
          </Category>
        );
      })}
    </div>
  );
};
