import React from "react";

import styles from "./filter-items-container.module.scss";
import { FilterItem } from "../filter-item-card/FilterItem";
import { SelectItemContainer } from "../select-item-container/SelectItemContainer";
export const FilterItemsContainer = () => {
  return (
    <>
      <div className={styles.filter_items_container}>
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
        <FilterItem />
      </div>
      <div className={styles.select_item_container_wrapper}>
        <SelectItemContainer />
    </div>
    </>
  );
};
