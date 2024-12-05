import React, { useContext } from "react";
import styles from "./category-check-item.module.scss";
import {
  GlobalContext,
  IAdvancedSeachFieldData,
  IGlobalContext,
} from "../../../context/GlobalContext";

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
  onChange,
  fieldKey
}: CheckItemProp) => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const isChecked = checked !== undefined ? checked : (globalContext.advancedSearchFieldData[fieldKey] as string[]).includes(label);

  const handleChange = () => {
    globalContext.setAdvancedSearchFieldData((prev) => {
      const currentValues = prev[fieldKey] as string[]; // Assuming fieldKey is an array field
      const newValues = isChecked
        ? currentValues.filter((item) => item !== label) // Remove if checked
        : [...currentValues, label]; // Add if unchecked

      return { ...prev, [fieldKey]: newValues };
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
