import { useContext } from "react";
import styles from "./category-check-item.module.scss";
import {
  GlobalContext,
  IAdvancedSeachFieldData,
  IGlobalContext,
} from "../../../context/GlobalContext";
import useBrandModel from "../../../hooks/useBrandModel";

type CheckItemProp = {
  label: string;
  checked?: boolean;
  onChange?: () => void;
  fieldKey: keyof IAdvancedSeachFieldData;
  value?: string;
};

export const CategoryCheckItem = ({
  label,
  checked,
  fieldKey,
  value,
}: CheckItemProp) => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const { data, error, isLoading } = useBrandModel();

  const brandEntries = Object.entries(data?.brands || {});
  const allBrands = ["All Brands", ...brandEntries.map(([key]) => key)];

  const brandKey =
    value ||
    brandEntries.find(
      ([key, brand]) => brand.name[globalContext.lang] === label
    )?.[0] ||
    label;

  const isChecked =
    checked !== undefined
      ? checked
      : (globalContext.advancedSearchFieldData[fieldKey] as string[]).includes(
          brandKey
        );

  const handleChange = () => {
    globalContext.setAdvancedSearchFieldData((prev) => {
      const currentValues = prev[fieldKey] as string[];
      let newValues: string[];

      if (fieldKey === "brand") {
        if (brandKey === "All Brands") {
          return {
            ...prev,
            brand: isChecked ? [] : allBrands,
            model: isChecked ? [] : prev.model,
          };
        }

        if (isChecked) {
          newValues = currentValues.filter(
            (item) => item !== brandKey && item !== "All Brands"
          );
          const modelsToRemove = Object.keys(
            data?.brands[brandKey]?.models || {}
          );
          const newModelValues = (prev.model || []).filter(
            (model) => !modelsToRemove.includes(model)
          );

          return {
            ...prev,
            brand: newValues,
            model: newModelValues,
          };
        } else {
          newValues = [...currentValues, brandKey];
          const isAllBrandsSelected = newValues.length === allBrands.length - 1;
          return {
            ...prev,
            brand: isAllBrandsSelected
              ? allBrands.filter((b) => b !== "All Brands")
              : newValues,
          };
        }
      } else {
        newValues = isChecked
          ? currentValues.filter((item) => item !== brandKey)
          : [...currentValues, brandKey];

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
          value={brandKey}
        />
        <span className={styles.label_text}>{label}</span>
      </label>
    </div>
  );
};
