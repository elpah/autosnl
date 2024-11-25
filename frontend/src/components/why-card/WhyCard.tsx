import React from "react";

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
        <img className={styles.why_img} src={image} alt="Why card icon" />
      </div>
      <div className={styles.whycard_body}>
        <h2 className={styles.whycard_header}>{title}</h2>
        <p className={styles.whycard_para}>
         {paragraph}
        </p>
      </div>
    </div>
  );
};
