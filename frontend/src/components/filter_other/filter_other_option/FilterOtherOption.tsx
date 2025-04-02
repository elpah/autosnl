type FilterPriceOptionProps = {
  value: number;
  label: string;
  disabled?: boolean;
};

export const FilterOtherOption = ({
  value,
  label,
  disabled = false,
}: FilterPriceOptionProps) => {
  return (
    <option value={value} disabled={disabled}>
      {label}
    </option>
  );
};
