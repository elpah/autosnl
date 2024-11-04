import React from "react";
import styles from "./category-check-item.module.scss";

type CheckItemProp = {
  label?: string;
  checked?: boolean;
  onChange?: () => void;
};

export const CategoryCheckItem = ({
  label,
  checked,
  onChange,
}: CheckItemProp) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span>{label || "$2600 - $3200"}</span>
        <span className={styles.items_number}>(32)</span>
      </label>
    </div>
  );
};
