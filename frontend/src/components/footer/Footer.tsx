import { Link, useNavigate } from "react-router-dom";
import queryString from "query-string";
import {
  footer_call,
  footer_email,
  facebook,
  twitter,
  linkedin,
  instagram,
} from "../../assets/images/images";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useTranslation } from "react-i18next";

import styles from "./footer.module.scss";

export const Footer = () => {
  const navigate = useNavigate();
  const globalContext = useContext(GlobalContext);
  const { t } = useTranslation<string>("footer");

  const navigate_map = (value: string) => {
    let query;
    query = queryString.stringify(
      { carType: value },
      { skipEmptyString: true }
    );
    navigate(`/${globalContext.lang}/search-result?${query}`);
  };

  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_header_div}>
          <h2 className={styles.logo_header}>ZaurAutos</h2>
          <p className={styles.logo_paragraph}>{t("headerText")}</p>
        </div>
        <div className={styles.section_container_div}>
          <div className={styles.footer_section_div}>
            <h2 className={styles.footer_headers}>{t("explore")}</h2>

            <ul className={styles.footer_listcontainer}>
              <li>
                <Link to={`/${globalContext.lang}/search-result`}>
                  {t("allCars")}
                </Link>
              </li>
              <li>
                <Link to={`/${globalContext.lang}/about`}>{t("aboutUs")}</Link>
              </li>
              <li>
                <Link to={`/${globalContext.lang}/contact`}>
                  {t("contactUs")}
                </Link>
              </li>
              <li>
                <Link to={`/${globalContext.lang}/faq`}>{t("faq")}</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_section_div}>
            <h2 className={styles.footer_headers}>Services</h2>
            <ul className={styles.footer_listcontainer}>
              <li onClick={() => navigate_map("used")}>{t("usedCars")}</li>
              <li onClick={() => navigate_map("used")}>{t("newCars")}</li>
            </ul>
          </div>
          <div className={styles.footer_section_div}>
            <h2 className={styles.footer_headers}>{t("resources")}</h2>
            <ul className={styles.footer_listcontainer}>
              <li>{t("privacy")}</li>
              <li>{t("terms")}</li>
            </ul>
          </div>
          <div className={styles.footer_section_div}>
            <h2 className={styles.footer_headers}>{t("contact")}</h2>
            <div className={styles.contact_div_phone}>
              <div className={styles.contact_img_container}>
                <img
                  className={styles.contact_image}
                  src={footer_call}
                  alt="Phone Icon"
                />
              </div>

              <p className={styles.contact_item}>
                <a href="tel:+310000000000">+31000000000</a>
              </p>
            </div>
            <div className={styles.contact_div_email}>
              <div className={styles.contact_img_container}>
                <img
                  className={styles.contact_image}
                  src={footer_email}
                  alt="email Icon"
                />
              </div>
              <p className={styles.contact_item}>
                <a href="mailto:email@email.com"> email@email.com</a>
              </p>
            </div>
            <div className={styles.socials}>
              <img
                className={styles.socials_image}
                src={facebook}
                alt="Facebook"
              />
              <img
                className={styles.socials_image}
                src={twitter}
                alt="Twitter"
              />
              <img
                className={styles.socials_image}
                src={linkedin}
                alt="LinkedIn"
              />
              <img
                className={styles.socials_image}
                src={instagram}
                alt="Instagram"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>{t("copyright")}</div>
    </>
  );
};
