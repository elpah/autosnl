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
import { useCategoryData } from "../../tdata/categoryData";
import useBrandModel from "../../hooks/useBrandModel";
import { useTranslation } from "react-i18next";

export const FilterItemsContainer = () => {
  const [closeContainer, setCloseContainer] = useState(true);
  const [currentTitle, setCurrentTitle] = useState("");
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const { data, error, isLoading } = useBrandModel();
  const categoryData = useCategoryData();
  const { t } = useTranslation<string>("advancedSearch");

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

  const handleMinXChange = (fieldKey: string, value: number) => {
    globalContext.setAdvancedSearchFieldData((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  const handleMaxXChange = (fieldKey: string, value: number) => {
    globalContext.setAdvancedSearchFieldData((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  return (
    <>
      <div className={styles.filter_items_container}>
        {categoryData.map((category, index) => {
          return (
            <FilterItem
              key={index}
              title={category.title}
              handleclick={() => {
                setCurrentTitle(category.title);
                setCloseContainer(true);
              }}
              selected={category.title === currentTitle}
            />
          );
        })}
      </div>
      <div className={styles.select_item_container_wrapper}>
        {foundCategory && closeContainer && (
          <SelectItemContainer
            key={foundCategory.title}
            handleCloseContainer={() => setCloseContainer(false)}
            title={foundCategory.title}
          >
            {foundCategory.title === t("price") ? (
              <FilterPrice />
            ) : foundCategory.title === t("searchByBrand") ? (
              data && data.brands ? (
                <>
                  <CategoryCheckItem
                    label={t("allBrand")}
                    fieldKey="brand"
                    value="All Brands"
                  />
                  {Object.entries(data.brands).map(([brandKey, brandData]) => {
                    const brandName = brandData.name[globalContext.lang];

                    return (
                      <CategoryCheckItem
                        key={brandKey}
                        label={brandName}
                        fieldKey="brand"
                        value={brandKey}
                      />
                    );
                  })}
                </>
              ) : null
            ) : foundCategory.title === t("searchByModel") ? (
              globalContext.advancedSearchFieldData.brand?.includes(
                "All Brands"
              ) ? (
                Object.values(data?.brands || {}).flatMap((brand) =>
                  Object.entries(brand.models || {}).map(
                    ([modelKey, modelData]) => (
                      <CategoryCheckItem
                        key={modelKey}
                        label={modelData[globalContext.lang]}
                        fieldKey="model"
                        value={modelKey}
                      />
                    )
                  )
                )
              ) : (
                globalContext.advancedSearchFieldData.brand?.flatMap((brand) =>
                  Object.entries(data?.brands?.[brand]?.models || {}).map(
                    ([modelKey, modelData]) => (
                      <CategoryCheckItem
                        key={modelKey}
                        label={modelData[globalContext.lang]}
                        fieldKey="model"
                        value={modelKey}
                      />
                    )
                  )
                )
              )
            ) : foundCategory.title === t("fuel") ? (
              Object.entries(data?.fuel || {}).map(([key, fuelData]) => (
                <CategoryCheckItem
                  key={key}
                  label={fuelData[globalContext.lang]}
                  fieldKey="fuel"
                  value={key}
                />
              ))
            ) : foundCategory.title === t("vehicleType") ? (
              Object.entries(data?.body || {}).map(([key, bodyData]) => (
                <CategoryCheckItem
                  key={key}
                  label={bodyData[globalContext.lang]}
                  fieldKey="vehicleType"
                  value={key}
                />
              ))
            ) : foundCategory.title === t("country") ? (
              Object.entries(data?.countries || {}).map(
                ([key, countryData]) => (
                  <CategoryCheckItem
                    key={key}
                    label={countryData[globalContext.lang]}
                    fieldKey="country"
                    value={key}
                  />
                )
              )
            ) : foundCategory.title === t("transmission") &&
              foundCategory.values ? (
              foundCategory.values.map((value, index) => (
                <CategoryCheckItem
                  key={index}
                  label={label(value) || value}
                  fieldKey="transmission"
                  value={index === 0 ? "manual" : "automatic"}
                />
              ))
            ) : foundCategory.values ? (
              foundCategory.values.map((value, index) => {
                const fieldKey =
                  globalContext.categoryToFieldKeyMap[foundCategory.title];
                if (
                  !fieldKey ||
                  !(fieldKey in globalContext.advancedSearchFieldData)
                ) {
                  return null;
                }

                return (
                  <CategoryCheckItem
                    key={index}
                    label={label(value)}
                    fieldKey={fieldKey}
                  />
                );
              })
            ) : (
              <FilterOtherContainer>
                <FilterOther
                  minOrMaxLabel={foundCategory.label?.min}
                  handleValueChange={(value) =>
                    handleMinXChange(`${foundCategory.field?.min}`, value)
                  }
                >
                  {foundCategory["Min"]?.map((minValue, index) => {
                    const maxAllowed =
                      foundCategory.title === t("mileage")
                        ? globalContext.advancedSearchFieldData.mileageMax
                        : globalContext.advancedSearchFieldData.erdMax;

                    return (
                      <FilterOtherOption
                        key={index}
                        value={minValue}
                        label={`${minValue}`}
                        disabled={maxAllowed > 0 && minValue > maxAllowed}
                      />
                    );
                  })}
                </FilterOther>
                <FilterOther
                  minOrMaxLabel={foundCategory.label?.max}
                  handleValueChange={(value) =>
                    handleMaxXChange(`${foundCategory.field?.max}`, value)
                  }
                >
                  {foundCategory["Max"]?.map((maxValue, index) => {
                    const minAllowed =
                      foundCategory.title === t("mileage")
                        ? globalContext.advancedSearchFieldData.mileageMin
                        : globalContext.advancedSearchFieldData.erdMin;
                    return (
                      <FilterOtherOption
                        key={index}
                        value={maxValue}
                        label={`${maxValue}`}
                        disabled={maxValue < minAllowed && minAllowed !== 0}
                      />
                    );
                  })}
                </FilterOther>
              </FilterOtherContainer>
            )}
          </SelectItemContainer>
        )}
      </div>
    </>
  );
};
