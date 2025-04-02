import { useTranslation } from "react-i18next";

export const useCategoryData = () => {
  const { t } = useTranslation("advancedSearch");

  return [
    {
      title: t("searchByBrand"),
    },
    {
      title: t("searchByModel"), 
    },
    {
      title: t("price"), 
    },
    {
      title: t("vehicleType"),
    },
    {
      title: t("fuel"), 
    },
    {
      title: t("mileage"),
      Min: [
        0, 5000, 10000, 20000, 30000, 50000, 75000, 100000, 150000, 200000,
        300000, 400000, 500000, 750000,
      ],
      Max: [
        5000, 10000, 20000, 30000, 50000, 75000, 100000, 150000, 200000, 300000,
        400000, 500000, 750000,
      ],
      label: { min: t("minMil"), max: t("maxMil") },
      field: { min: "mileageMin", max: "mileageMax" },
    },
    {
      title: t("transmission"),
      values: [t("manual"), t("automatic")],
    },
    {
      title: t("erd"), 
      Min: Array.from(
        { length: new Date().getFullYear() - 1961 + 1 },
        (_, index) => 1961 + index
      ),
      Max: Array.from(
        { length: new Date().getFullYear() - 1961 + 1 },
        (_, index) => 1961 + index
      ),
      label: { min: t("minErd"), max: t("maxErd") },
      field: { min: "erdMin", max: "erdMax" },
    },
    {
      title: t("country"),
    },
  ];
};
