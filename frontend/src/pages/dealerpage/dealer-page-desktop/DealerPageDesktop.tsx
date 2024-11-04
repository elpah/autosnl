import React from "react";

import styles from "./dealer-page-desktop.module.scss";
import { CarCardContainer } from "../../../components/car-card-container/CarCardContainer";
import { SidebarFilters } from "../../../components/sidebar-filters/SidebarFilters";
export const DealerPageDesktop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.left}>
          <SidebarFilters/>
        </div>
        <div className={styles.right}>
          <div className={styles.header_search_container}>
            <div className={styles.header}>Elpah Motors</div>
            <div className={styles.search_container}>
              <div className={styles.search_name}>sort by:</div>
              <div className={styles.icon_container}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2.50004 3.875C2.42592 3.87507 2.35348 3.89709 2.29187 3.9383C2.23026 3.97951 2.18225 4.03806 2.15389 4.10654C2.12554 4.17502 2.11811 4.25037 2.13255 4.32307C2.147 4.39577 2.18266 4.46256 2.23504 4.515L5.73504 8.015C5.80535 8.08523 5.90066 8.12467 6.00004 8.12467C6.09941 8.12467 6.19472 8.08523 6.26504 8.015L9.76504 4.515C9.81741 4.46256 9.85308 4.39577 9.86752 4.32307C9.88196 4.25037 9.87454 4.17502 9.84618 4.10654C9.81782 4.03806 9.76981 3.97951 9.7082 3.9383C9.64659 3.89709 9.57416 3.87507 9.50004 3.875H2.50004Z"
                    fill="#4C4C4C"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.cars_container_wrapper}>
            <CarCardContainer/>
          </div>
        </div>
      </div>
    </div>
  );
};
