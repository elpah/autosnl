import React from "react";
import styles from "./advanced-search.module.scss";
import { AdvancedSearchMobile } from "./advanced-search-mobile/AdvancedSearchMobile";
import { CarCardContainer } from "../../components/car-card-container/CarCardContainer";
import { SidebarFilters } from "../../components/sidebar-filters/SidebarFilters";
import { AdvancedSearchDesktop } from "./advanced-search-desktop/AdvancedSearchDesktop";
import { Delivery } from "../../components/delivery-section/Delivery";

const AdvancedSearch = () => {
  return (
    <div className={styles.container}>
      <AdvancedSearchMobile />
      <AdvancedSearchDesktop />
        <Delivery />
    </div>
  );
};

export default AdvancedSearch;

//135
