import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./delivery.module.scss";
export const Delivery = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.delivery_container}>
      <div className={styles.delivery_info_wrapper}>
        <h2 className={styles.delivery_header}>
          No Advance, No waiting. Instant Delivery
        </h2>
        <p className={styles.delivery_text}>
          Drive your new car home today! With our seamless process, you won't
          need to worry about upfront payments or long waiting periods. Choose
          your vehicle, complete the purchase, and take immediate delivery.
          Enjoy the convenience of a hassle-free car buying experience, designed
          to get you on the road as quickly as possible.
        </p>
        <button className={styles.button} onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </div>
    </div>
  );
};
