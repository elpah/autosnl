import React from "react";
import styles from "./carpage-desktop.module.scss";
import { CarInfoCard } from "../../../components/car_info-card/CarInfoCard";
import CarInfoCover from "../../../components/car-info-cover/CarInfoCover";
import { CarDamagesDetailsCard } from "../../../components/car-damages-card/CarDamagesDetailsCard";
import { Options } from "../../../components/options/Options";
import CarPriceInfo from "../../../components/car-price-info/CarPriceInfo";
import CarInfoCardContainer from "../../../components/car-info-card-container/CarInfoCardContainer";
import { DealerInfo } from "../../../components/dealer-infomation/DealerInfo";

export const CarPageDesktop = () => {
  return (
    <div className={styles.car_page_desktop_container}>
      <div className={styles.left}>
        <CarInfoCover />
        <CarDamagesDetailsCard />
        <Options />
      </div>
      <div className={styles.right}>
        <CarPriceInfo/>
        <CarInfoCardContainer/>
        <DealerInfo/>
      </div>
    </div>
  );
};
