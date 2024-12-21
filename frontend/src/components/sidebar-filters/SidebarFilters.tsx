import { useContext, useEffect } from "react";

import styles from "./sidebar-filter.module.scss";
import { Category } from "./categories/Category";
import { CategoryCheckItem } from "./category-check-item/CategoryCheckItem";

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
  const categories = [
    {
      title: "Search By Brand",
      values: [
        { title: "Toyota", number_of_cars: 15 },
        { title: "Honda", number_of_cars: 20 },
        { title: "Ford", number_of_cars: 10 },
        { title: "Chevrolet", number_of_cars: 18 },
        { title: "BMW", number_of_cars: 12 },
        { title: "Mercedes", number_of_cars: 8 },
        { title: "Audi", number_of_cars: 22 },
        { title: "Volkswagen", number_of_cars: 25 },
        { title: "Nissan", number_of_cars: 14 },
        { title: "Hyundai", number_of_cars: 17 },
        { title: "Kia", number_of_cars: 19 },
        { title: "Mazda", number_of_cars: 11 },
      ],
    },
    {
      title: "Price (€)",
      Min: [10, 20, 30, 50, 50],
      Max: [100, 200, 300, 500, 600],
      label: { min: "Min Price", max: "Max Price" },
      field: { min: "priceMin", max: "priceMax" },
    },
    {
      title: "Vehicle Type",

      values: [
        { title: "Sedan", number_of_cars: 20 },
        { title: "SUV", number_of_cars: 10 },
        { title: "Luxury", number_of_cars: 24 },
        { title: "Pickup", number_of_cars: 90 },
        { title: "Minivan", number_of_cars: 54 },
        { title: "Hatchback", number_of_cars: 51 },
        { title: "Convertible", number_of_cars: 18 },
      ],
    },
    {
      title: "Fuel",
      values: [
        { title: "Petrol", number_of_cars: 20 },
        { title: "Diesel", number_of_cars: 10 },
        { title: "CNG", number_of_cars: 24 },
        { title: "Electric", number_of_cars: 90 },
      ],
    },
    {
      title: "Milleage",
      Min: [10, 20, 30, 50, 50],
      Max: [100, 200, 300, 500, 600],
      label: { min: "Min Milleage", max: "Max Milleage" },
      field: { min: "milleageMin", max: "milleageMax" },
    },
    {
      title: "Transmission",
      values: [
        { title: "Manual", number_of_cars: 35 },
        { title: "Automatic", number_of_cars: 27 },
      ],
    },
    {
      title: "ERD",
      Min: Array.from({ length: 2024 - 1961 + 1 }, (_, index) => 1961 + index),
      Max: Array.from({ length: 2024 - 1961 + 1 }, (_, index) => 1961 + index),
      label: { min: "Min Erd", max: "Max Erd" },
      field: { min: "erdMin", max: "erdMax" },
    },
  ];

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
      {categories.map((category, index) => {
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
