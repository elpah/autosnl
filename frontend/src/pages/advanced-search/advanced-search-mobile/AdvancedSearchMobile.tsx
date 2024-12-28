import React from "react";

import styles from "./advanced-search-mobile.module.scss";
import { FilterItemsContainer } from "../../../components/filter-item-container/FilterItemsContainer";
import { CarCardContainer } from "../../../components/car-card-container/CarCardContainer";
export const AdvancedSearchMobile = () => {
  return (
    <div className={styles.container_wrapper}>
      <div className={styles.header_map_container}>
        <div className={styles.car_map_container}>
          <div className={styles.map_name}>Home</div>
          <div className={styles.map_vector_container}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
            >
              <path
                d="M7.0279 4.9485L3.344 1.595C3.30801 1.56245 3.27956 1.52365 3.26035 1.48092C3.24114 1.43819 3.23156 1.39239 3.23218 1.34623C3.23279 1.30007 3.24359 1.2545 3.26393 1.2122C3.28428 1.16991 3.31375 1.13175 3.3506 1.1C3.42599 1.03495 3.52631 0.999178 3.63024 1.0003C3.73418 1.00142 3.83354 1.03934 3.9072 1.106L7.86335 4.7075C7.89914 4.73982 7.92749 4.77829 7.94673 4.82068C7.96597 4.86307 7.97572 4.90852 7.97541 4.95438C7.9751 5.00024 7.96474 5.04558 7.94494 5.08775C7.92513 5.12992 7.89627 5.16808 7.86005 5.2L3.696 8.8975C3.62146 8.96294 3.52188 8.99951 3.41825 8.99951C3.31463 8.99951 3.21505 8.96294 3.1405 8.8975C3.10408 8.86534 3.07512 8.82687 3.05535 8.78436C3.03558 8.74184 3.02539 8.69616 3.02539 8.65C3.02539 8.60384 3.03558 8.55816 3.05535 8.51564C3.07512 8.47313 3.10408 8.43466 3.1405 8.4025L7.0279 4.9485Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={styles.map_name}>Advanced Search</div>
        </div>
        <h1 className={styles.header}>2000 Cars Available</h1>
      </div>
      <FilterItemsContainer />
      <div className={styles.car_card_container_wrapper}>
        <CarCardContainer />
      </div>
    </div>
  );
};
