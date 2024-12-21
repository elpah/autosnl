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

export const FilterItemsContainer = () => {
  const [closeContainer, setCloseContainer] = useState(true);
  const [currentTitle, setCurrentTitle] = useState("");
  const globalContext = useContext<IGlobalContext>(GlobalContext);

  const categories = [
    {
      title: "Search By Brand",
      values: [
        { title: "Abarth", number_of_cars: 5 },
        { title: "Acura", number_of_cars: 8 },
        { title: "Aixam", number_of_cars: 3 },
        { title: "Alfa Romeo", number_of_cars: 7 },
        { title: "Alpina", number_of_cars: 2 },
        { title: "Alpine", number_of_cars: 6 },
        { title: "Apollo", number_of_cars: 4 },
        { title: "Arash", number_of_cars: 1 },
        { title: "Ariel", number_of_cars: 2 },
        { title: "Arrinera", number_of_cars: 1 },
        { title: "Aston Martin", number_of_cars: 5 },
        { title: "Audi", number_of_cars: 22 },
        { title: "BAIC", number_of_cars: 9 },
        { title: "Bentley", number_of_cars: 5 },
        { title: "Berkeleys", number_of_cars: 1 },
        { title: "Bollinger Motors", number_of_cars: 3 },
        { title: "Borgward", number_of_cars: 2 },
        { title: "Brabus", number_of_cars: 4 },
        { title: "Bugatti", number_of_cars: 3 },
        { title: "Buick", number_of_cars: 10 },
        { title: "BYD", number_of_cars: 12 },
        { title: "Cadillac", number_of_cars: 11 },
        { title: "Caterham", number_of_cars: 3 },
        { title: "Changan", number_of_cars: 8 },
        { title: "Chery", number_of_cars: 9 },
        { title: "Chevrolet", number_of_cars: 18 },
        { title: "Chrysler", number_of_cars: 8 },
        { title: "Citroën", number_of_cars: 13 },
        { title: "CUPRA", number_of_cars: 6 },
        { title: "Dacia", number_of_cars: 7 },
        { title: "Daewoo", number_of_cars: 4 },
        { title: "Daihatsu", number_of_cars: 6 },
        { title: "Datsun", number_of_cars: 5 },
        { title: "De Tomaso", number_of_cars: 2 },
        { title: "Dodge", number_of_cars: 15 },
        { title: "Dongfeng", number_of_cars: 8 },
        { title: "Eagle (discontinued)", number_of_cars: 1 },
        { title: "Exagon Motors", number_of_cars: 2 },
        { title: "FAW", number_of_cars: 7 },
        { title: "Ferrari", number_of_cars: 5 },
        { title: "Fiat", number_of_cars: 12 },
        { title: "Fisker", number_of_cars: 4 },
        { title: "Ford", number_of_cars: 20 },
        { title: "Geely", number_of_cars: 9 },
        { title: "Genesis", number_of_cars: 8 },
        { title: "GMC", number_of_cars: 14 },
        { title: "Great Wall Motors", number_of_cars: 6 },
        { title: "Haval", number_of_cars: 7 },
        { title: "Honda", number_of_cars: 19 },
        { title: "Hyundai", number_of_cars: 21 },
        { title: "Infiniti", number_of_cars: 10 },
        { title: "Isuzu", number_of_cars: 8 },
        { title: "Jaguar", number_of_cars: 7 },
        { title: "Jeep", number_of_cars: 16 },
        { title: "Karma", number_of_cars: 2 },
        { title: "Kia", number_of_cars: 18 },
        { title: "Koenigsegg", number_of_cars: 1 },
        { title: "Lamborghini", number_of_cars: 4 },
        { title: "Lancia", number_of_cars: 3 },
        { title: "Land Rover", number_of_cars: 9 },
        { title: "Lexus", number_of_cars: 17 },
        { title: "Lincoln", number_of_cars: 6 },
        { title: "Lotus", number_of_cars: 5 },
        { title: "Maserati", number_of_cars: 4 },
        { title: "Maybach", number_of_cars: 2 },
        { title: "Mazda", number_of_cars: 13 },
        { title: "McLaren", number_of_cars: 3 },
        { title: "Mercedes-Benz", number_of_cars: 15 },
        { title: "MG", number_of_cars: 9 },
        { title: "Mini", number_of_cars: 8 },
        { title: "Mitsubishi", number_of_cars: 11 },
        { title: "NIO", number_of_cars: 5 },
        { title: "Nissan", number_of_cars: 20 },
        { title: "Opel", number_of_cars: 9 },
        { title: "Pagani", number_of_cars: 2 },
        { title: "Peugeot", number_of_cars: 14 },
        { title: "Polestar", number_of_cars: 4 },
        { title: "Pontiac (discontinued)", number_of_cars: 2 },
        { title: "Porsche", number_of_cars: 10 },
        { title: "RAM", number_of_cars: 6 },
        { title: "Renault", number_of_cars: 12 },
        { title: "Rimac", number_of_cars: 1 },
        { title: "Rivian", number_of_cars: 2 },
        { title: "Rolls-Royce", number_of_cars: 3 },
        { title: "Saab (discontinued)", number_of_cars: 2 },
        { title: "Saleen", number_of_cars: 1 },
        { title: "Saturn (discontinued)", number_of_cars: 1 },
        { title: "Scion (discontinued)", number_of_cars: 1 },
        { title: "SEAT", number_of_cars: 7 },
        { title: "Škoda", number_of_cars: 8 },
        { title: "Smart", number_of_cars: 6 },
        { title: "SsangYong", number_of_cars: 5 },
        { title: "Subaru", number_of_cars: 14 },
        { title: "Suzuki", number_of_cars: 11 },
        { title: "Tata Motors", number_of_cars: 7 },
        { title: "Tesla", number_of_cars: 9 },
        { title: "Toyota", number_of_cars: 25 },
        { title: "Ultima Sports", number_of_cars: 2 },
        { title: "Vauxhall", number_of_cars: 8 },
        { title: "Venturi", number_of_cars: 3 },
        { title: "Volkswagen", number_of_cars: 23 },
        { title: "Volvo", number_of_cars: 13 },
        { title: "W Motors", number_of_cars: 2 },
        { title: "Wey", number_of_cars: 4 },
        { title: "Zenvo", number_of_cars: 1 },
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
      Min: [1997, 1998, 1999, 2022, 50],
      Max: [100, 200, 300, 500, 600],
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
  const foundCategory = categories.find(
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
