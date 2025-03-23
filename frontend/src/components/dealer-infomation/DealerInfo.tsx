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
import { useTranslation } from "react-i18next";

import styles from "./dealer-info.module.scss";

interface DealerInfoProps {
  dealer?: {
    dealerId: string;
    dealerName: string;
    dealerAddress: string;
    dealerPhone: string;
    dealerEmail: string;
  };
  children?: React.ReactNode;
}
export const DealerInfo = ({ dealer, children }: DealerInfoProps) => {
  const { t } = useTranslation("carPage");
  const dealer_info = [
    { value: dealer?.dealerName, icon: `${person_icon}` },
    { value: dealer?.dealerAddress, icon: `${location_icon}` },
    { value: dealer?.dealerPhone, icon: `${phone_icon}` },
    { value: dealer?.dealerEmail, icon: `${email_icon}` },
  ];

  return (
    <>
      <div className={styles.dealer_info_container}>
        <div className={styles.dealer_info_header}>{t("dealerDetails")}</div>
        <div className={styles.dealer_info_cards_container}>
          {dealer_info.map((info, index) => (
            <InfoCard
              key={index}
              value={info.value || "N/A"}
              icon={info.icon}
            />
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
