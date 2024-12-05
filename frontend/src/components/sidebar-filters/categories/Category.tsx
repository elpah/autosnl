import React, { useState } from "react";
// import { plus_icon, minus_icon } from assets/images/images";
import { FaPlus, FaMinus } from "react-icons/fa";

import styles from "./category.module.scss";

type CategoryProps = {
  title: string;
  children: React.ReactNode;
};
export const Category = ({ title, children }: CategoryProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleItems = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sub_wrapper}>
        <div className={styles.header_container} onClick={toggleItems}>
          <div className={styles.header}>{title}</div>
          <div className={styles.open_close_icon_container}>
            {isOpen ? (
              <FaMinus className={styles.open_close_icon} />
            ) : (
              <FaPlus className={styles.open_close_icon} />
            )}
          </div>
        </div>
        <div
          className={`${styles.cat_items_container} ${
            isOpen ? styles.open : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
