import React from "react";

import styles from "./sidebar-filter.module.scss";
import { Category } from "./categories/Category";
export const SidebarFilters = () => {
  return (
    <div className={styles.container}>
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  );
};
