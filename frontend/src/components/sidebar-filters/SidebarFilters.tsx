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
import useBrandModel from "../../hooks/useBrandModel";

export const SidebarFilters = () => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const { data, error, isLoading } = useBrandModel();

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
            {category.title === "Search By Brand" ? (
              data ? (
                <>
                  <CategoryCheckItem
                    label="All Brands"
                    fieldKey="brand"
                    number_of_cars={10}
                  />
                  {Object.keys(data).map((brand, index) => (
                    <CategoryCheckItem
                      key={index}
                      label={brand}
                      fieldKey="brand"
                      number_of_cars={10}
                    />
                  ))}
                </>
              ) : null
            ) : category.title === "Search By Model" ? (
              globalContext.advancedSearchFieldData.brand?.includes(
                "All Brands"
              ) ? (
                Object.values(data || {})
                  .flat()
                  .map((model, index) => (
                    <CategoryCheckItem
                      key={`${model}-${index}`}
                      label={model}
                      fieldKey="model"
                      number_of_cars={10}
                    />
                  ))
              ) : (
                globalContext.advancedSearchFieldData.brand?.map((brand) =>
                  data?.[brand]?.map((model, index) => (
                    <CategoryCheckItem
                      key={`${brand}-${index}`}
                      label={model}
                      fieldKey="model"
                      number_of_cars={10}
                    />
                  ))
                )
              )
            ) : category.title === "Price (€)" ? (
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
                  minOrMaxLabel={category.label?.min}
                  handleValueChange={(value) =>
                    handleMinChange(`${category.field?.min}`, value)
                  }
                >
                  {category["Min"]?.map((minValue, index) => (
                    <FilterOtherOption
                      key={index}
                      value={minValue}
                      label={`${minValue}`}
                    />
                  ))}
                </FilterOther>
                <FilterOther
                  minOrMaxLabel={category.label?.max}
                  handleValueChange={(value) =>
                    handleMaxChange(`${category.field?.max}`, value)
                  }
                >
                  {category["Max"]?.map((maxValue, index) => (
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
