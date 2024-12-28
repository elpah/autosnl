import React from "react";

import { CarDamagesDetailsCard } from "../../../components/car-damages-card/CarDamagesDetailsCard";
import { Options } from "../../../components/options/Options";
import { DealerInfo } from "../../../components/dealer-infomation/DealerInfo";

import styles from "./car-page-mobile.module.scss";
import CarInfoCover from "../../../components/car-info-cover/CarInfoCover";
import CarPriceInfo from "../../../components/car-price-info/CarPriceInfo";
import CarInfoCardContainer from "../../../components/car-info-card-container/CarInfoCardContainer";
import { VisitButton } from "../../../components/visit-button/VisitButton";

export const CarPageMobile = () => {
  return (
    <div className={styles.car_mobile_container_wrapper}>
      <div className={styles.car_mobile_container}>
        <CarInfoCover />
        <CarPriceInfo />
        <CarInfoCardContainer />
        <div className={styles.damages_card_container}>
          <CarDamagesDetailsCard />
        </div>
        <div className={styles.options_container}>
          <Options />
        </div>
      </div>
      <div className={styles.dealer_details_container}>
        <DealerInfo> 
          <VisitButton/>
        </DealerInfo>
      </div>
    </div>
  );
};
