import { damages_details } from "../../assets/images/images";
import { useTranslation } from "react-i18next";
import styles from "./car-damages-card-details.module.scss";

type DamageDetail = {
  title: string;
  text: string;
};

type CarDamagesProps = {
  damages: DamageDetail[];
};
export const CarDamagesDetailsCard = ({ damages }: CarDamagesProps) => {
  const { t } = useTranslation<string>("carPage");
  return (
    <div className={styles.car_damages_container}>
      <div className={styles.header_img_container}>
        <div className={styles.damage_image_container}>
          <img
            className={styles.damage_img_icon}
            src={damages_details}
            alt="icon"
          />
        </div>
        <div className={styles.damages_header}>{t("damagesDetails")}</div>
      </div>
      <div className={styles.damages_info}>
        <ul className={styles.list_container_ol}>
          {damages.length > 0 ? (
            damages.map((damage, index) => (
              <li key={index} className={styles.list_item}>
                <p className={styles.list_title}>{damage.title}</p>
                <p className={styles.list_sub}>- {damage.text}</p>
              </li>
            ))
          ) : (
            <p>{t("noDamages")}</p>
          )}
        </ul>
      </div>
    </div>
  );
};
