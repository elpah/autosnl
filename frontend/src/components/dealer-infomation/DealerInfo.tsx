import React from 'react'

import fbIcon from "../../assets/images/socials_icons/facebook-icon.png";
import igIcon from "../../assets/images/socials_icons/instagram-icon.png";
import linkedinIcon from "../../assets/images/socials_icons/linkedin-icon.png";

import styles from "./dealer-info.module.scss"
import { InfoCard } from './info-card/InfoCard'

interface DealerInfoProps {
  children?: React.ReactNode; 
}
export const DealerInfo = ({children}:DealerInfoProps) => {
  return (
    <>
    <div className={styles.dealer_info_container}>
        <div className={styles.dealer_info_header}>Dealer Details</div>
        <div className={styles.dealer_info_cards_container}>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
        </div>
    </div>
    {children}
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
