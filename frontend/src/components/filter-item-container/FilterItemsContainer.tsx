import React, { useState } from "react";

import styles from "./filter-items-container.module.scss";
import { FilterItem } from "../filter-item-card/FilterItem";
import { SelectItemContainer } from "../select-item-container/SelectItemContainer";
import { Card } from "../select-item-container/card-items/Card";

export const FilterItemsContainer = () => {
  const [closeContainer, setCloseContainer] = useState(true);
  const [currentTitle, setCurrentTitle] = useState("");

  const categories = [
    {
      title: "Search By Brand",
      values: [
        { title: "Toyota", number_of_cars: 15 },
        { title: "Toyota", number_of_cars: 15 },
        { title: "Toyota", number_of_cars: 15 },
        { title: "Toyota", number_of_cars: 15 },
        { title: "Toyota", number_of_cars: 15 },
        { title: "Toyota", number_of_cars: 15 },
        { title: "Toyota", number_of_cars: 15 },
        { title: "Toyota", number_of_cars: 15 },
        { title: "Toyota", number_of_cars: 15 },
        { title: "Toyota", number_of_cars: 15 },
        { title: "Toyota", number_of_cars: 15 },
      ],
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
  const foundCategory = categories.find(
    (category) => category.title === currentTitle
  );

  return (
    <>
      <div className={styles.filter_items_container}>
        {categories.map((category, index) => (
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
            {foundCategory.values.map((value, index) => (
              <Card key={index} cardItemName={label(value)} />
            ))}
          </SelectItemContainer>
        )}
      </div>
    </>
  );
};
