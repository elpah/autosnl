import React from "react";
import styles from "./contact-card.module.scss";
import image from "../../assets/images/contact-images/location.png";

export const ContactCard = () => {
  return (
    <div className={styles.contact_card_container}>
      <div className={styles.contact_image_container}>
        <img className={styles.contact_image} src={image} alt="" />
      </div>
      <div className={styles.card_text_container}>
        <div className={styles.card_header}> Office Location</div>
        <div className={styles.card_subtext}>
          No 2 Joseph Adesanya Street, Lagos
        </div>
      </div>
    </div>
  );
};
