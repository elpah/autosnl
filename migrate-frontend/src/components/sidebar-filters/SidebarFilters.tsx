import { useContext, useEffect } from "react";

import styles from "./sidebar-filter.module.scss";
import { Category } from "./categories/Category";
import { CategoryCheckItem } from "./category-check-item/CategoryCheckItem";
import { useCategoryData } from "../../tdata/categoryData";
import { useTranslation } from "react-i18next";

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
  const { data, isLoading } = useBrandModel();
  const { t } = useTranslation<string>("advancedSearch");
  const categoryData = useCategoryData();

  useEffect(() => {
    console.table(globalContext.advancedSearchFieldData);
  }, [globalContext.advancedSearchFieldData]);

  const label = (array: any) => {
    if (array.kpml_min || array.kpml_max <= 10) {
      if (array.kpml_min && array.kpml_max) {
        return `${array.kpml_min} Kpml - ${array.kpml_max} Kpml`;
      } else if (array.kpml_max <= 10) return `Under 10 Kpml`;
    } else return array.title;
  };

  const handleMinChange = (fieldKey: string, value: number) => {
    globalContext.setAdvancedSearchFieldData((prev) => {
      const updatedData = { ...prev, [fieldKey]: value };
      return updatedData;
    });
  };

  const handleMaxChange = (fieldKey: string, value: number) => {
    globalContext.setAdvancedSearchFieldData((prev) => {
      const updatedData = { ...prev, [fieldKey]: value };
      if (fieldKey === "mileageMax" && value < prev.mileageMin) {
        updatedData["mileageMin"] = value;
      }
      if (fieldKey === "erdMax" && value < prev.erdMin) {
        updatedData["erdMin"] = value;
      }
      return updatedData;
    });
  };
  if (isLoading) return <p></p>;
  return (
    <div className={styles.container}>
      {categoryData.map((category, index) => {
        const fieldKey = globalContext.categoryToFieldKeyMap[category.title];
        if (fieldKey === null) return null;
        return (
          <Category key={index} title={category.title}>
            {category.title === t("searchByBrand") ? (
              data ? (
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
            ) : category.title === t("searchByModel") ? (
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
            ) : category.title === t("price") ? (
              <FilterPrice />
            ) : category.title === t("country") ? (
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
            ) : category.title === t("fuel") ? (
              Object.entries(data?.fuel || {}).map(([key, fuelData]) => (
                <CategoryCheckItem
                  key={key}
                  label={fuelData[globalContext.lang]}
                  fieldKey="fuel"
                  value={key}
                />
              ))
            ) : category.title === t("vehicleType") ? (
              Object.entries(data?.body || {}).map(([key, bodyData]) => (
                <CategoryCheckItem
                  key={key}
                  label={bodyData[globalContext.lang]}
                  fieldKey="vehicleType"
                  value={key}
                />
              ))
            ) : category.title === t("transmission") && category.values ? (
              category.values.map((value, index) => (
                <CategoryCheckItem
                  key={index}
                  label={label(value) || value}
                  fieldKey="transmission"
                  value={index === 0 ? "manual" : "automatic"}
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
                  {category["Min"]?.map((minValue, index) => {
                    const maxAllowed =
                      category.title === t("mileage")
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
                  minOrMaxLabel={category.label?.max}
                  handleValueChange={(value) =>
                    handleMaxChange(`${category.field?.max}`, value)
                  }
                >
                  {category["Max"]?.map((maxValue, index) => {
                    const minAllowed =
                      category.title === t("mileage")
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
          </Category>
        );
      })}
    </div>
  );
};
