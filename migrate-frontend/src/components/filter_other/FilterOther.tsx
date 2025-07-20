import { useState } from "react";
import styles from "./filter-other.module.scss";

type FilterOtherProps = {
  minOrMaxLabel?: string;
  children: React.ReactNode;
  handleValueChange: (value: number) => void;
};

export const FilterOther = ({
  children,
  minOrMaxLabel,
  handleValueChange,
}: FilterOtherProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    const numericValue = parseFloat(selectedValue);
    if (!isNaN(numericValue)) {
      handleValueChange(numericValue);
    }
  };
  return (
    <div className={styles.filter_price}>
      <select value={selectedValue} onChange={handleChange} id="number-select">
        <option value="" disabled>
          {minOrMaxLabel}
        </option>
        {children}
      </select>
    </div>
  );
};
