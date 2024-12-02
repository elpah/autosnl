import React from "react";

import {
  email_icon,
  phone_icon,
  location_icon,
  person_icon,
  facebook,
  instagram,
  linkedin,
} from "../../assets/images/images";

import { InfoCard } from "./info-card/InfoCard";

import styles from "./dealer-info.module.scss";

interface DealerInfoProps {
  children?: React.ReactNode;
}
export const DealerInfo = ({ children }: DealerInfoProps) => {
  
const dealer_info = [
  { value: "Elpah Autos", icon: `${person_icon}` },
  { value: "Stationstraat XX, 14583, Zaandam", icon: `${location_icon}` },
  { value: "+3100000000", icon: `${phone_icon}` },
  { value: "email@email.com", icon: `${email_icon}` },
];
  return (
    <>
      <div className={styles.dealer_info_container}>
        <div className={styles.dealer_info_header}>Dealer Details</div>
        <div className={styles.dealer_info_cards_container}>
          {dealer_info.map((info, index) => (
            <InfoCard key={index} value={info.value} icon={info.icon} />
          ))}
        </div>
      </div>
      {children}
      <div className={styles.socials_container}>
        <img
          className={styles.social_icon}
          src={facebook}
          alt="facebook icon"
        />
        <img
          className={styles.social_icon}
          src={instagram}
          alt="instagram icon"
        />
        <img
          className={styles.social_icon}
          src={linkedin}
          alt="linkedin icon"
        />
      </div>
    </>
  );
};
