import React from "react";

import styles from "./car-card.module.scss";
export default function CarCard() {
  return (
    <div className={styles.car_card_container}>
      <div className={styles.car_image_container}>
        <img className={styles.car_img} src="" alt="" />
      </div>
      <div className={styles.car_body_container}>
        <div className={styles.card_header}>Mercedes-Benz</div>
        <div className={styles.car_details_container}>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src="" alt="" />
            </div>
            <div className={styles.text}>134.8</div>
          </div>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src="" alt="" />
            </div>
            <div className={styles.text}>Petrol</div>
          </div>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src="" alt="" />
            </div>
            <div className={styles.text}>2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}
