import React, { useContext } from "react";
import styles from "./category-check-item.module.scss";
import {
  GlobalContext,
  IAdvancedSeachFieldData,
  IGlobalContext,
} from "../../../context/GlobalContext";
import useBrandModel from "../../../hooks/useBrandModel";

type CheckItemProp = {
  label: string;
  number_of_cars: number;
  checked?: boolean;
  onChange?: () => void;
  fieldKey: keyof IAdvancedSeachFieldData;
};

export const CategoryCheckItem = ({
  label,
  number_of_cars,
  checked,
  fieldKey,
}: CheckItemProp) => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const { data, error, isLoading } = useBrandModel();

  const isChecked =
    checked !== undefined
      ? checked
      : (globalContext.advancedSearchFieldData[fieldKey] as string[]).includes(
          label
        );

  const handleChange = () => {
    globalContext.setAdvancedSearchFieldData((prev) => {
      const currentValues = prev[fieldKey] as string[];
      const allBrands = ["All Brands", ...Object.keys(data || {})];
      let newValues: string[];

      if (fieldKey === "brand") {
        if (label === "All Brands") {
          if (isChecked) {
            return {
              ...prev,
              brand: [],
              model: [],
            };
          } else {
            return {
              ...prev,
              brand: allBrands,
            };
          }
        }

        if (isChecked) {
          newValues = currentValues.filter(
            (item) => item !== label && item !== "All Brands"
          );
          const modelsToRemove = data![label] || [];
          const newModelValues = (prev.model || []).filter(
            (model) => !modelsToRemove.includes(model)
          );

          return {
            ...prev,
            brand: newValues,
            model: newModelValues,
            allBrandsSelected: false,
          };
        } else {
          newValues = [...currentValues, label];
          const isAllBrandsSelected = newValues.length === allBrands.length - 1;

          return {
            ...prev,
            brand: isAllBrandsSelected ? allBrands : newValues,
            allBrandsSelected: isAllBrandsSelected,
          };
        }
      } else {
        newValues = isChecked
          ? currentValues.filter((item) => item !== label)
          : [...currentValues, label];

        return {
          ...prev,
          [fieldKey]: newValues,
        };
      }
    });
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className={styles.label_text}>{label}</span>
        <span className={styles.items_number}>({number_of_cars})</span>
      </label>
    </div>
  );
};
