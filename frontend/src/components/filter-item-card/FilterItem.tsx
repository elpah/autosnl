import React from "react";

import styles from "./filter-item.module.scss";
export const FilterItem = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_name}> Vehicle Tyle</div>
      <svg
      className={styles.svg_icon}
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
      >
        <path
          d="M2.08322 3.22916C2.02145 3.22921 1.96109 3.24757 1.90975 3.28191C1.85841 3.31625 1.8184 3.36504 1.79477 3.42211C1.77114 3.47917 1.76495 3.54196 1.77699 3.60255C1.78902 3.66313 1.81874 3.71879 1.86239 3.76249L4.77905 6.67916C4.83765 6.73768 4.91708 6.77055 4.99989 6.77055C5.0827 6.77055 5.16213 6.73768 5.22072 6.67916L8.13739 3.76249C8.18104 3.71879 8.21075 3.66313 8.22279 3.60255C8.23483 3.54196 8.22864 3.47917 8.20501 3.42211C8.18138 3.36504 8.14137 3.31625 8.09003 3.28191C8.03869 3.24757 7.97832 3.22921 7.91655 3.22916H2.08322Z"
          fill="#4C4C4C"
        />
      </svg>
    </div>
  );
};
