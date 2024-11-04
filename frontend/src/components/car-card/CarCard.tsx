import React from "react";
import mile from "../../assets/images/car_details/miles.svg";
import fuel from "../../assets/images/car_details/fuel.svg";
import year from "../../assets/images/car_details/year.svg";
import carimage from "../../assets/images/car_image_testing.png";

import styles from "./car-card.module.scss";
export default function CarCard() {
  return (
    <div className={styles.car_card_container}>
      <div className={styles.car_image_container}>
        <img className={styles.car_img} src={carimage} alt="" />
      </div>
      <div className={styles.car_body_container}>
        <div className={styles.card_header}>Mercedes-Benz C300</div>
        <div className={styles.car_details_container}>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src={mile} alt="" />
            </div>
            <div className={styles.text}>134.8</div>
          </div>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src={fuel} alt="" />
            </div>
            <div className={styles.text}>Petrol</div>
          </div>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src={year} alt="" />
            </div>
            <div className={styles.text}>2024</div>
          </div>
        </div>
        <button className={styles.button}>View Details</button>
      </div>
    </div>
  );
}
