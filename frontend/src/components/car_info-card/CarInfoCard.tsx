import React from "react";
import tempImg from "../../assets/images/car_info_card_images/temp_img.png"

import styles from "./car_info_card.module.scss"

type CardInfoProps = {
    bg: boolean;
};

export const CarInfoCard = ({ bg }: CardInfoProps) => {
    return (

        <div className={`${bg ? styles.blue_bg_container : ''} ${styles.info_card_container}`}>
            <div className={styles.image_container}>
                <img className={styles.info_image} src={tempImg} alt="info icon" />
            </div>
            <div className={styles.header_detail_container}>
                <div className={`${bg ? styles.blue_bg_header : ''} ${styles.detail_header}`}>
                    Milleage
                </div>
                <div className={`${bg ? styles.blue_bg_details_info : ''} ${styles.detail_info}`}>
                    56748 KM
                </div>
            </div>
        </div>
    );
};
