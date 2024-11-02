import React from 'react'

import fbIcon from "../../assets/images/socials_icons/facebook-icon.png";
import igIcon from "../../assets/images/socials_icons/instagram-icon.png";
import linkedinIcon from "../../assets/images/socials_icons/linkedin-icon.png";

import styles from "./dealer-info.module.scss"
import { InfoCard } from './info-card/InfoCard'

export const DealerInfo = () => {
  return (
    <>
    <div className={styles.dealer_info_container}>
        <div className={styles.dealer_info_header}>Dealer Details</div>
        <div className={styles.dealer_info_}>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
        </div>
    </div>
     <div className={styles.button_container}>
     <button className={styles.button}>Visit Company Profile</button>
   </div>
   <div className={styles.socials_container}>
        <img className={styles.social_icon} src={fbIcon} alt="facebook icon" />
        <img className={styles.social_icon} src={igIcon} alt="instagram icon" />
        <img
          className={styles.social_icon}
          src={linkedinIcon}
          alt="linkedin icon"
        />
      </div>
   </>
  )
}
