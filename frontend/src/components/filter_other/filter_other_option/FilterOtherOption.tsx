import React from "react";
type FilterPriceOptionProps = {
  value: number;
  label: string;
};

export const FilterOtherOption = ({ value, label }: FilterPriceOptionProps) => {
  return <option value={value}>{label}</option>;
};
