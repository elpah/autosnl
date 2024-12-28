import React from "react";
import styles from "./dealer-page-mobile.module.scss";
import { CarCardContainer } from "../../../components/car-card-container/CarCardContainer";
import { ContactFormMap } from "../../../components/contact-form-map/ContactFormMap";
import { DealerInfo } from "../../../components/dealer-infomation/DealerInfo";
import { VisitButton } from "../../../components/visit-button/VisitButton";
import { FilterItemsContainer } from "../../../components/filter-item-container/FilterItemsContainer";

export const DealerPageMobile: React.FC = () => {
  return (
    <div className={styles.dealer_page_mobile_container}>
      <div className={styles.dealer_page_header}>Elpah Motors</div>
      <FilterItemsContainer/>
      <div className={styles.car_card_container_wrapper}>
        <CarCardContainer />
      </div>
      <div className={styles.address_contaact_container}>
        <ContactFormMap />
      </div>
      <DealerInfo>
        <VisitButton/>
      </DealerInfo>
    </div>
  );
};
