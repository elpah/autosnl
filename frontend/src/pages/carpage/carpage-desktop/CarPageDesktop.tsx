import CarInfoCover from "../../../components/car-info-cover/CarInfoCover";
import { CarDamagesDetailsCard } from "../../../components/car-damages-card/CarDamagesDetailsCard";
import { Options } from "../../../components/options/Options";
import CarPriceInfo from "../../../components/car-price-info/CarPriceInfo";
import CarInfoCardContainer from "../../../components/car-info-card-container/CarInfoCardContainer";
import { DealerInfo } from "../../../components/dealer-infomation/DealerInfo";
import { VisitButton } from "../../../components/visit-button/VisitButton";
import {type ICarPageProps } from "../../../types/otherTypes";
import styles from "./carpage-desktop.module.scss";

export const CarPageDesktop = ({
  coverImages,
  carNameModel,
  inc_btw_price,
  excl_btw_price,
  excl_bpm_btw_price,
  carMileage,
  carTransmission,
  carFuel,
  carPower,
  carEngineCapacity,
  carERD,
  carVat,
  carColor,
  carVanish,
  carBody,
  carNumberOfDoors,
  carWeight,
  damages,
  options,
  dealerInfo,
  handleButtonClick
}: ICarPageProps) => {
  return (
    <div className={styles.car_page_desktop_container}>
      <div className={styles.left}>
        <CarInfoCover coverImages={coverImages} />
        <CarDamagesDetailsCard damages={damages} />
        <Options carOptions={options} />
      </div>
      <div className={styles.right}>
        <CarPriceInfo
          carNameModel={carNameModel}
          inc_btw_price={inc_btw_price}
          excl_btw_price={excl_btw_price}
          excl_bpm_btw_price={excl_bpm_btw_price}
        />
        <CarInfoCardContainer
          carDetails={{
            carMileage,
            carTransmission,
            carFuel,
            carPower,
            carEngineCapacity,
            carERD,
            carVat,
            carColor,
            carVanish,
            carBody,
            carNumberOfDoors,
            carWeight,
          }}
        />
        <DealerInfo dealer={dealerInfo}>
          <VisitButton handleButtonClick={handleButtonClick} />
        </DealerInfo>
      </div>
    </div>
  );
};
