import { CarDamagesDetailsCard } from "../../../components/car-damages-card/CarDamagesDetailsCard";
import { Options } from "../../../components/options/Options";
import { DealerInfo } from "../../../components/dealer-infomation/DealerInfo";

import styles from "./car-page-mobile.module.scss";
import CarInfoCover from "../../../components/car-info-cover/CarInfoCover";
import CarPriceInfo from "../../../components/car-price-info/CarPriceInfo";
import CarInfoCardContainer from "../../../components/car-info-card-container/CarInfoCardContainer";
import { VisitButton } from "../../../components/visit-button/VisitButton";
import { type ICarPageProps } from "../../../types/otherTypes";

export const CarPageMobile = ({
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
    <div className={styles.car_mobile_container_wrapper}>
      <div className={styles.car_mobile_container}>
        <CarInfoCover coverImages={coverImages} />
        <CarPriceInfo
          carNameModel={carNameModel}
          inc_btw_price={inc_btw_price}
          excl_btw_price={excl_btw_price}
          excl_bpm_btw_price={excl_bpm_btw_price}
        />
        <CarInfoCardContainer
          carDetails={{
            carMileage: carMileage,
            carTransmission: carTransmission,
            carFuel: carFuel,
            carPower: carPower,
            carEngineCapacity: carEngineCapacity,
            carERD: carERD,
            carVat: carVat,
            carColor: carColor,
            carVanish: carVanish,
            carBody: carBody,
            carNumberOfDoors: carNumberOfDoors,
            carWeight: carWeight,
          }}
        />
        <div className={styles.damages_card_container}>
          <CarDamagesDetailsCard damages={damages} />
        </div>
        <div className={styles.options_container}>
          <Options carOptions={options} />
        </div>
      </div>
      <div className={styles.dealer_details_container}>
        <DealerInfo dealer={dealerInfo}>
          <VisitButton handleButtonClick={handleButtonClick} />
        </DealerInfo>
      </div>
    </div>
  );
};
