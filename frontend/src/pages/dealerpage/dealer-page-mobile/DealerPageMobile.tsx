import React from "react";
import { FilterItem } from "../../../components/filter-item-card/FilterItem";
import styles from "./dealer-page-mobile.module.scss";
import { SelectItemContainer } from "../../../components/select-item-container/SelectItemContainer";
import { CarCardContainer } from "../../../components/car-card-container/CarCardContainer";
import { ContactFormMap } from "../../../components/contact-form-map/ContactFormMap";

export const DealerPageMobile: React.FC = () => {
  return (
    <div className={styles.dealer_page_mobile_container}>
      <div className={styles.dealer_page_header}>Elpah Motors</div>
      <div className={styles.filter_items_container}>
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
      </div>
      <div className={styles.select_item_container_wrapper}>
        <SelectItemContainer />
      </div>
      <div className={styles.car_card_container_wrapper}>
        <CarCardContainer />
      </div>
      <div className={styles.address_contaact_container}>
        <ContactFormMap/>
      </div>
    </div>
  );
};
