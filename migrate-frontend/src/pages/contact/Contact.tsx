import {
  email_icon,
  phone_icon,
  location_icon,
} from "../../assets/images/images";
import { ContactCard } from "../../components/contact-card/ContactCard";
import { ContactFormMap } from "../../components/contact-form-map/ContactFormMap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { isValidLang } from "../../utils/utilsFunctions";
import styles from "./contact.module.scss";

const Contact = () => {
  const { t } = useTranslation<string>("contact");
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
  const contactDetails = [
    {
      title: t("location"),
      details: "Stationstraat 71, 1506 DE, Zaandam",
      link: "https://maps.app.goo.gl/HLYK4SUxGKNajLTXA",
      image: `${location_icon}`,
    },
    {
      title: t("email"),
      details: "info@zaurautos.com",
      link: "mailto:info@zaurautos.com",
      image: `${email_icon}`,
    },
    {
      title: t("phone"),
      details: "+31 615 377 090",
      link: "tel:+31615377090",
      image: `${phone_icon}`,
    },
  ];
  return (
    <div className={styles.contact_container}>
      <div
        className={styles.contact_cover}
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dvwpuenzk/image/upload/c_scale,w_1200,q_auto,f_auto/v1757473020/contact_cover_v6nlx2.webp')`,
        }}
      >
        <h1 className={styles.header}> {t("contactUs")}</h1>
        <p className={styles.header_subtext}>{t("welcome")}</p>
      </div>
      <div className={styles.contact_body}>
        <h2 className={styles.body_header}>{t("contactDetails")}</h2>
        <div className={styles.body_card_container}>
          {contactDetails.map((contact, index) => (
            <ContactCard
              key={index}
              title={contact.title}
              details={contact.details}
              link={contact.link}
              image={contact.image}
            />
          ))}
        </div>
        <ContactFormMap />
      </div>
    </div>
  );
};
export default Contact;
