import React from "react";
import styles from "./contact-card.module.scss";
import { Link } from "react-router-dom";

type CardDetails = {
  title: string;
  details: string;
  image: string;
  link: string;
};
export const ContactCard = ({ title, details, image, link }: CardDetails) => {
  return (
    <Link to={link} className={styles.link_card_container}>
      <div className={styles.contact_card_container}>
        <div className={styles.contact_image_container}>
          <img
            className={styles.contact_image}
            src={image}
            alt=" contact card icon"
          />
        </div>
        <div className={styles.card_text_container}>
          <div className={styles.card_header}>{title}</div>
          <div className={styles.card_subtext}>{details}</div>
        </div>
      </div>
    </Link>
  );
};
