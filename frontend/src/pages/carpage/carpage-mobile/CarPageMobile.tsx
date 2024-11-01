import React from "react";

// import CurrentCoverImage from "../../../assets/images/car_image_testing.png";
import fbIcon from "../../../assets/images/socials_icons/facebook-icon.png"
import igIcon from "../../../assets/images/socials_icons/instagram-icon.png"
import linkedinIcon from "../../../assets/images/socials_icons/linkedin-icon.png"

import { CarInfoCard } from "../../../components/car_info-card/CarInfoCard";
import { CarDamagesDetailsCard } from "../../../components/car-damages-card/CarDamagesDetailsCard";
import { Options } from "../../../components/options/Options";
import { DealerInfo } from "../../../components/dealer-infomation/DealerInfo";

import styles from "./car-page-mobile.module.scss";
import CarInfoCover from "../../../components/car-info-cover/CarInfoCover";


export const CarPageMobile = () => {
  return (
    <div className={styles.car_mobile_container_wrapper}>
      <div className={styles.car_mobile_container}>
        <CarInfoCover/>
        <div className={styles.car_price_container}>
          <div className={styles.price_header}>Mercedes C300</div>
          <div className={styles.inc_btw_price_container}>
            <div className={styles.inc_btw_price}> 5,000,000€</div>
            <div className={styles.inc_btw_price_text}>inc. BTW</div>
          </div>
          <div
            className={`${styles.sub_price_container} ${styles.excl_btw_price_container}`}
          >
            <div className={`${styles.sub_price} ${styles.excl_btw_price}`}>
              3,000,000€
            </div>
            <div
              className={`${styles.sub_price_text} ${styles.excl_btw_price_text}`}
            >
              {" "}
              excl. BTW
            </div>
          </div>
          <div
            className={` ${styles.sub_price_container} ${styles.excl_bpm_price_container}`}
          >
            <div className={`${styles.sub_price} ${styles.excl_bpm_btw_price}`}>
              1,000,000€
            </div>
            <div
              className={`${styles.sub_price_text} ${styles.excl_bpm_btw_price_text}`}
            >
              {" "}
              excl. bpm
            </div>
          </div>
        </div>
        <div className={styles.car_info_cards_container}>
          <CarInfoCard bg={true} />
          <CarInfoCard bg={true} />
          <CarInfoCard bg={true} />
          <CarInfoCard bg={true} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
        </div>
        <div className={styles.damages_card_container}>
          <CarDamagesDetailsCard />
        </div>

        <div className={styles.options_container}>
          <Options />
        </div>
      </div>
      <div className={styles.dealer_details_container}>
        <DealerInfo />
      </div>
      <div className={styles.button_container}>
        <button className={styles.button}>Visit Company Profile</button>
      </div>
      <div className={styles.socials_container}>
        <img className={styles.social_icon} src={fbIcon} alt="facebook icon" />
        <img className={styles.social_icon} src={igIcon} alt="instagram icon" />
        <img className={styles.social_icon} src={linkedinIcon} alt="linkedin icon"/>
      </div>
    </div>
  );
};
