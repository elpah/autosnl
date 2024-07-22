import React from "react";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div>
        <div className={styles.logo_container}></div>
        <div className={styles.paragraph}></div>
      </div>
      <div>
        <h2 className={styles.footer_headers}>Explore</h2>
        <ul>
          <li>All Cars</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div>
        <h2 className={styles.footer_headers}>Services</h2>
        <ul>
          <li>Used Cars</li>
          <li>New Cars</li>
        </ul>
      </div>
      <div>
        <h2 className={styles.footer_headers}>Resources</h2>
        <ul>
          <li>Privacy Policies</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div>
        <h2 className={styles.footer_headers}>Contact</h2>
        <div>
          <div>
            <img src="" alt="Phone Icon" />
          </div>
          <p>+310000000000</p>
        </div>
        <div>
          <div>
            <img src="" alt="email Icon" />
          </div>
          <p>email@email.com</p>
        </div>
        <div className={styles.socials}>
          <img src="" alt="Facebook" />
          <img src="" alt="Twitter" />
          <img src="" alt="LinkedIn" />
          <img src="" alt="Instagram" />
        </div>
      </div>
    </div>
  );
};
