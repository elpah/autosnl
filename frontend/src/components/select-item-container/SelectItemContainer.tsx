import React from "react";

import styles from "./select-item-container.module.scss";

type SelectItemContainerProps = {
  title: string;
  children: React.ReactNode;
  handleCloseContainer: () => void;
};

export const SelectItemContainer = ({
  title,
  children,
  handleCloseContainer,
}: SelectItemContainerProps) => {
  return (
    <div className={styles.select_item_container}>
      <div className={styles.card_header}>{title}</div>
      <div className={styles.card_container}>{children}</div>
      <div
        className={styles.close_icon_container}
        onClick={() => {
          handleCloseContainer();
        }}
      >
        <svg
          className={styles.close_icon}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M2.81592 7.1846L5.0005 5.00001L7.18508 7.1846M7.18508 2.81543L5.00008 5.00001L2.81592 2.81543"
            stroke="black"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
