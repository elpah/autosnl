import React from "react";
import tempImage from "../../../assets/images/dealer_card_images/dealer-name-icon.png";

import styles from "./info-card.module.scss";
export const InfoCard = () => {
  return (
    <div className={styles.contact_card_container}>
      <div className={styles.contact_image_container}>
        <img className={styles.contact_image} src={tempImage} alt="temporary" />
      </div>
      <div className={styles.contact_info}> Putter Auto's</div>
    </div>
  );
};
