import React from "react";
import styles from "./advanced-search.module.scss";
import { AdvancedSearchMobile } from "./advanced-search-mobile/AdvancedSearchMobile";
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
