import React from "react";

import styles from "./car-info-card-container.module.scss";
import { CarInfoCard } from "../car_info-card/CarInfoCard";

import {
  body,
  color,
  engine_capacity,
  erd,
  fuel_type,
  gross_export_pro,
  milleage,
  net_price,
  number_of_doors,
  power,
  sale_price,
  transmission,
  vanish,
  vat,
  weight,
} from "../../assets/images/images";

const car_infomation = [
  {
    header: "Mileage",
    value: "8472823 KM",
    card_icon: milleage,
    bg: true,
  },
  {
    header: "Transmission",
    value: "Automatic",
    card_icon: transmission,
    bg: true,
  },
  {
    header: "Fuel Type",
    value: "Diesel",
    card_icon: fuel_type,
    bg: true,
  },
  {
    header: "ERD",
    value: "2025",
    card_icon: erd,
    bg: true,
  },
  {
    header: "Power",
    value: "150 HP",
    card_icon: power,
    bg: false,
  },
  {
    header: "Engine Capacity",
    value: "2.0L",
    card_icon: engine_capacity,
    bg: false,
  },
  {
    header: "Sale Price",
    value: "$22,000",
    card_icon: sale_price,
    bg: false,
  },

  {
    header: "Net Price",
    value: "$20,000",
    card_icon: net_price,
    bg: false,
  },
  {
    header: "VAT",
    value: "5%",
    card_icon: vat,
    bg: false,
  },
  {
    header: "Color",
    value: "Metallic Silver",
    card_icon: color,
    bg: false,
  },
  {
    header: "Body Type",
    value: "Sedan",
    card_icon: body,
    bg: false,
  },
  {
    header: "Number of Doors",
    value: "4",
    card_icon: number_of_doors,
    bg: false,
  },

  {
    header: "Weight",
    value: "1,500 kg",
    card_icon: weight,
    bg: false,
  },

  {
    header: "Gross Export Price",
    value: "$25,000",
    card_icon: gross_export_pro,
    bg: false,
  },
  {
    header: "Vanish",
    value: "Yes",
    card_icon: vanish,
    bg: false,
  },
];

const CarInfoCardContainer = () => {
  return (
    <div className={styles.car_info_cards_container}>
      {car_infomation.map((info, index) => (
        <CarInfoCard
          key={index}
          card_header={info.header}
          bg={info.bg}
          card_icon={info.card_icon}
          card_value={info.value}
        />
      ))}
    </div>
  );
};

export default CarInfoCardContainer;
