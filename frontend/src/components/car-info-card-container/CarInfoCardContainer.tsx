import { CarInfoCard } from "../car_info-card/CarInfoCard";
import { useTranslation } from "react-i18next";
import styles from "./car-info-card-container.module.scss";

import {
  body,
  color,
  engine_capacity,
  erd,
  fuel_type,
  milleage,
  number_of_doors,
  power,
  transmission,
  vanish,
  vat,
  weight,
} from "../../assets/images/images";

type CarInfoProps = {
  carDetails: {
    carMileage: string;
    carTransmission: string;
    carFuel: string;
    carPower: string;
    carEngineCapacity: string;
    carERD: string;
    carVat: string;
    carColor: string;
    carVanish: string;
    carBody: string;
    carNumberOfDoors: string;
    carWeight?: string;
  };
};

const CarInfoCardContainer = ({ carDetails }: CarInfoProps) => {
  const { t } = useTranslation("carPage");
  const carInformation = [
    {
      header: t("mileage"),
      value: carDetails.carMileage,
      card_icon: milleage,
      bg: true,
    },
    {
      header: t("transmission"),
      value: carDetails.carTransmission,
      card_icon: transmission,
      bg: true,
    },
    {
      header: t("fuelType"),
      value: carDetails.carFuel,
      card_icon: fuel_type,
      bg: true,
    },
    { header: t("erd"), value: carDetails.carERD, card_icon: erd, bg: true },
    {
      header: t("power"),
      value: carDetails.carPower,
      card_icon: power,
      bg: false,
    },
    {
      header: t("engineCapacity"),
      value: carDetails.carEngineCapacity,
      card_icon: engine_capacity,
      bg: false,
    },
    {
      header: t("weight"),
      value: carDetails.carWeight,
      card_icon: weight,
      bg: false,
    },
    { header: t("vat"), value: carDetails.carVat, card_icon: vat, bg: false },
    {
      header: t("color"),
      value: carDetails.carColor,
      card_icon: color,
      bg: false,
    },
    {
      header: t("bodyType"),
      value: carDetails.carBody,
      card_icon: body,
      bg: false,
    },
    {
      header: t("numberOfDoors"),
      value: carDetails.carNumberOfDoors,
      card_icon: number_of_doors,
      bg: false,
    },
    {
      header: t("vanish"),
      value: carDetails.carVanish,
      card_icon: vanish,
      bg: false,
    },
  ];
  return (
    <div className={styles.car_info_cards_container}>
      {carInformation.map((info, index) => (
        <CarInfoCard
          key={index}
          card_header={info.header}
          bg={info.bg}
          card_icon={info.card_icon}
          card_value={info.value || "N/A"}
        />
      ))}
    </div>
  );
};

export default CarInfoCardContainer;
