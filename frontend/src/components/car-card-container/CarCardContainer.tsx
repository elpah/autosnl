import React from "react";

import styles from "./car-card-container.module.scss";
import CarCard from "../car-card/CarCard";

export const CarCardContainer = () => {
  return (
    <>
      <div className={styles.car_card_container}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
      <div className={styles.next_cars_container}>
        <div className={`${styles.car_page_number} ${styles.current_page_number}`}>1</div>
        <div className={styles.car_page_number}>2</div>
        <div className={styles.car_page_number}>3</div>
        <div className={styles.car_page_number}>4</div>
        <div className={styles.car_page_number}>5</div>
        <div className={styles.next_icon_container}>
          <svg
          className={styles.next_icon}
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M3.28385 8.34571C3.32698 8.38893 3.37821 8.42322 3.43462 8.44662C3.49103 8.47001 3.5515 8.48206 3.61257 8.48206C3.67364 8.48206 3.73411 8.47001 3.79051 8.44662C3.84692 8.42322 3.89815 8.38893 3.94128 8.34571L7.02785 5.26029C7.06229 5.22594 7.0896 5.18514 7.10824 5.14023C7.12688 5.09531 7.13647 5.04716 7.13647 4.99853C7.13647 4.94991 7.12688 4.90176 7.10824 4.85684C7.0896 4.81193 7.06229 4.77113 7.02785 4.73678L3.94128 1.65136C3.75928 1.46943 3.46585 1.46943 3.28385 1.65136C3.10185 1.8333 3.10185 2.12661 3.28385 2.30855L5.973 5.00039L3.28014 7.69224C3.10185 7.87046 3.10185 8.16749 3.28385 8.34571Z"
              fill="#4C4C4C"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
