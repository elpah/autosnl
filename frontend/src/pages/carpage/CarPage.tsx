import React from "react";
import { CarPageMobile } from "./carpage-mobile/CarPageMobile";

import styles from "./car_page.module.scss"
export const CarPage = () => {
    return (
        <div className={styles.car_page_container}>
            <CarPageMobile/>
        </div>
    );
};
