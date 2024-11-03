import React from "react";

import styles from "./select-item-container.module.scss";
import { Card } from "./card-items/Card";

export const SelectItemContainer = () => {
  return (
    <div className={styles.select_item_container}>
      <div className={styles.card_header}>Fuel Type</div>
      <div className={styles.card_container}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
