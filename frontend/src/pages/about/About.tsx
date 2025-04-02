import { useTranslation } from "react-i18next";
import {
  about_cover,
  customer_satisfaction,
  integrity,
  innovation,
  quality,
} from "../../assets/images/images";
import { Value } from "../../components/about-values/Value";
import { Delivery } from "../../components/delivery-section/Delivery";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { isValidLang } from "../../utils/utilsFunctions";
import styles from "./about.module.scss";

const About: React.FC = () => {
  const { t } = useTranslation<string>("about");
  const { lang: urlLang } = useParams();
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    if (urlLang && isValidLang(urlLang)) {
      globalContext.setLang(urlLang);
    } else if (globalContext.lang) {
      globalContext.setLang(globalContext.lang);
    } else {
      globalContext.setLang("en");
    }
  }, [urlLang]);

  const values = [
    {
      image: `${quality}`,
      title: t("values.quality.title"),
      text: t("values.quality.text"),
    },
    {
      image: `${customer_satisfaction}`,
      title: t("values.customerSatisfaction.title"),
      text: t("values.customerSatisfaction.text"),
    },
    {
      image: `${integrity}`,
      title: t("values.integrity.title"),
      text: t("values.integrity.text"),
    },
    {
      image: `${innovation}`,
      title: t("values.innovation.title"),
      text: t("values.innovation.text"),
    },
  ];
  return (
    <div className={styles.about_container}>
      <div
        className={styles.cover}
        style={{ backgroundImage: `url(${about_cover})` }}
      >
        <h1 className={styles.header}>{t("about")}</h1>
        <p className={styles.header_subtext}>{t("headerText")}</p>
      </div>
      <div className={styles.body_container}>
        <div className={styles.body_part}>
          <h2 className={styles.body_part_header}>{t("whatWeAre")}</h2>
          <p className={styles.body_part_text}>{t("whatWeAreText")}</p>
        </div>
        <div className={styles.body_part}>
          <h2 className={styles.body_part_header}>{t("ourMission")}</h2>
          <p className={styles.body_part_text}>{t("mission")}</p>
        </div>
      </div>
      <div className={styles.values}>
        <h2 className={styles.values_header}>{t("ourValues")}</h2>
        <div className={styles.values_wrapper}>
          <div className={styles.values_sub_container}>
            {values.map((item, index) => (
              <Value
                key={index}
                title={item.title}
                image={item.image}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
      <Delivery />
    </div>
  );
};
export default About;
