import React from "react";
import styles from "./value.module.scss";
import quality from '../../assets/images/about_images/quality.png'

type Value ={
  image:string;
  title:string;
  text:string;
}

export const Value = ({image,title,text}:Value) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.head}>{title}</div>
      <div className={styles.para}>
       {text}
      </div>
    </div>
  );
};
