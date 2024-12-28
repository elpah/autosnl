import React from "react";
import {damages_details} from "../../assets/images/images"

import styles from "./car-damages-card-details.module.scss"

// type CardInfoProps = {
//     bg: boolean;
// };

export const CarDamagesDetailsCard = () => {
    return (

        <div className={styles.car_damages_container}>
            <div className={styles.header_img_container}>
                <div className={styles.damage_image_container}>
                    <img className={styles.damage_img_icon} src={damages_details} alt="icon" />
                </div>
                <div className={styles.damages_header}>Damages Details</div>
            </div>
            <div className={styles.damages_info}>
                <ul className={styles.list_container_ol}>
                    <li className={styles.list_item}>
                        <p className={styles.list_title}>Registration papers available €15850</p>
                        <p className={styles.list_sub}>- Netto (Exclusief btw)</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_title}>Registration papers available €15850</p>
                        <p className={styles.list_sub}>- Netto (Exclusief btw)</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_title}>Registration papers available €15850</p>
                        <p className={styles.list_sub}>- Netto (Exclusief btw)</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_title}>Registration papers available €15850</p>
                        <p className={styles.list_sub}>- Netto (Exclusief btw)</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};
