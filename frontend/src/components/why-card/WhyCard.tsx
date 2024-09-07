import React from "react";

import whyImg from "../../assets/images/why_card_images/best_rate.png";
import styles from "./whycard.module.scss";
type Why = {
    image:string;
    title:string;
    paragraph:string
}
export const WhyCard = ({title, image, paragraph}:Why) => {
  return (
    <div className={styles.why_card}>
      <div className={styles.why_img_container}>
        <img className={styles.why_img} src={image} alt="" />
      </div>
      <div className={styles.whycard_body}>
        <div className={styles.whycard_header}>{title}</div>
        <div className={styles.whycard_para}>
         {paragraph}
        </div>
      </div>
    </div>
  );
};
