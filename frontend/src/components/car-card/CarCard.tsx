import React from "react";
import {mile, fuel, year} from "../../assets/images/images"

import carimage from "../../assets/images/car_image_testing.png";

import styles from "./car-card.module.scss";
import { useNavigate } from "react-router-dom";
export default function CarCard() {
  const navigate = useNavigate();
  return (
    <div className={styles.car_card_container}
   onClick={()=>navigate("/car-page")}
    >
      <div className={styles.car_image_container}>
        <img className={styles.car_img} src={carimage} alt="car" />
      </div>
      <div className={styles.car_body_container}>
        <div className={styles.card_header}>Mercedes-Benz C300</div>
        <div className={styles.car_details_container}>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src={mile} alt="mileage icon" />
            </div>
            <div className={styles.text}>134.8</div>
          </div>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src={fuel} alt="fuel type icon" />
            </div>
            <div className={styles.text}>Petrol</div>
          </div>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src={year} alt="calender year icon" />
            </div>
            <div className={styles.text}>2024</div>
          </div>
        </div>
        <button className={styles.button}>View Details</button>
      </div>
    </div>
  );
}
