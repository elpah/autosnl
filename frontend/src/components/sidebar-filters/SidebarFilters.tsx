import React, { useContext, useEffect } from "react";

import styles from "./sidebar-filter.module.scss";
import { Category } from "./categories/Category";
import { CategoryCheckItem } from "./category-check-item/CategoryCheckItem";

import {
  GlobalContext,
  type IGlobalContext,
} from "../../context/GlobalContext";

export const SidebarFilters = () => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  useEffect(()=>{
    console.table(globalContext.advancedSearchFieldData)
  },[globalContext.advancedSearchFieldData])
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
      ]
      
    },
    {
      title: "Search By Budget",
      values: [
        { price_min: 100, price_max: 1000, number_of_cars: 15 },
        { price_min: 1000, price_max: 2000, number_of_cars: 27 },
        { price_min: 2000, price_max: 3000, number_of_cars: 18 },
        { price_min: 3000, price_max: 4000, number_of_cars: 22 },
        { price_min: 4000, price_max: 5000, number_of_cars: 14 },
        { price_min: 5000, price_max: 6000, number_of_cars: 19 },
        { price_min: 6000, price_max: 7000, number_of_cars: 25 },
        { price_min: 7000, price_max: 8000, number_of_cars: 30 },
        { price_min: 8000, price_max: 9000, number_of_cars: 12 },
        { price_min: 9000, price_max: 10000, number_of_cars: 20 },
      ],
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
      values: [
        { kpml_min: 0, kpml_max: 10, number_of_cars: 35 },
        { kpml_min: 10, kpml_max: 20, number_of_cars: 27 },
        { kpml_min: 20, kpml_max: 30, number_of_cars: 27 },
        { kpml_min: 30, kpml_max: 50, number_of_cars: 18 },
        { kpml_min: 50, kpml_max: 4000, number_of_cars: 22 },
      ],
    },
    {
      title: "Transmission",
      values: [
        { title: "Manual", number_of_cars: 35 },
        { title: "Automatic", number_of_cars: 27 },
      ],
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

  return (
    <div className={styles.container}>
      {categories.map((category, index) => {
        const fieldKey = globalContext.categoryToFieldKeyMap[category.title];

        if (fieldKey === null) return null;

        return (
          <Category key={index} title={category.title}>
            {category.values.map((value, index) => (
              <CategoryCheckItem
                key={index}
                label={label(value)}
                number_of_cars={value.number_of_cars}
                fieldKey={fieldKey}
              />
            ))}
          </Category>
        );
      })}
    </div>
  );
};
