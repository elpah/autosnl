import React from "react";
import styles from "./footer.module.scss";
import callIcon from "../../assets/images/footer_images/call.png";
import emailIcon from "../../assets/images/footer_images/email.png";
import facebook from "../../assets/images/footer_images/socials/facebook.png";
import instagram from "../../assets/images/footer_images/socials/instagram.png";
import linkedin from "../../assets/images/footer_images/socials/linkedin.png";
import twitter from "../../assets/images/footer_images/socials/twitter.png";

export const Footer = () => {
  return (
    <>
    <div className={styles.footer_container}>
      <div className={styles.footer_header_div}>
        <h2 className={styles.logo_header}>ZaurAutos</h2>
        <p className={styles.logo_paragraph}>
          Drive your new car home today! With our seamless process, you won't
          need to worry about upfront payments or long waiting periods.
        </p>
      </div>
      <div className={styles.section_container_div}>
        <div className={styles.footer_section_div}>
          <h2 className={styles.footer_headers}>Explore</h2>
          <ul className={styles.footer_listcontainer}>
            <li>All Cars</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className={styles.footer_section_div}>
          <h2 className={styles.footer_headers}>Services</h2>
          <ul className={styles.footer_listcontainer}>
            <li>Used Cars</li>
            <li>New Cars</li>
          </ul>
        </div>
        <div className={styles.footer_section_div}>
          <h2 className={styles.footer_headers}>Resources</h2>
          <ul className={styles.footer_listcontainer}>
            <li>Privacy Policies</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className={styles.footer_section_div}>
          <h2 className={styles.footer_headers}>Contact</h2>
          <div className={styles.contact_div_phone}>
            <div className={styles.contact_img_container}>
              <img
                className={styles.contact_image}
                src={callIcon}
                alt="Phone Icon"
              />
            </div>
            <p className={styles.contact_item}>+310000000000</p>
          </div>
          <div className={styles.contact_div_email}>
            <div className={styles.contact_img_container}>
              <img
                className={styles.contact_image}
                src={emailIcon}
                alt="email Icon"
              />
            </div>
            <p className={styles.contact_item}>email@email.com</p>
          </div>
          <div className={styles.socials}>
            <img
              className={styles.socials_image}
              src={facebook}
              alt="Facebook"
            />
            <img className={styles.socials_image} src={twitter} alt="Twitter" />
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
    <div className={styles.copyright}>
      Copyright © 2024 ParuahStudios
    </div>
  </>
  );
};
