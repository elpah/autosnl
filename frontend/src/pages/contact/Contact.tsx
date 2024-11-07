import React from "react";
import styles from "./contact.module.scss";
import emailIcon from "../../assets/images/contact-images/email.png";
import locationIcon from "../../assets/images/contact-images/location.png";
import phoneIcon from "../../assets/images/contact-images/phone.png";

import { ContactCard } from "../../components/contact-card/ContactCard";
import { ContactFormMap } from "../../components/contact-form-map/ContactFormMap";

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      title: "Location",
      details: "Stationstraat 71, 1506 DE, Zaandam",
      link: "https://maps.app.goo.gl/HLYK4SUxGKNajLTXA",
      image: `${locationIcon}`,
    },
    {
      id: 1,
      title: "Email",
      details: "info@zaurautos.nl",
      link: "mailto:info@zaurautos.nl",
      image: `${emailIcon}`,
    },
    {
      id: 1,
      title: "Phone",
      details: "+31000000000",
      link: "tel:+31000000000",
      image: `${phoneIcon}`,
    },
  ];

  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_cover}>
        <h1 className={styles.header}>Contact Us</h1>
        <p className={styles.header_subtext}>Welcome to ZaurAutos</p>
      </div>
      <div className={styles.contact_body}>
        <div className={styles.body_header}>Contact Details</div>
        <div className={styles.body_subtext}>Contact our head office</div>
        <div className={styles.body_card_container}>
          {contactDetails.map((contact) => (
            <ContactCard
              key={contact.id}
              title={contact.title}
              details={contact.details}
              link={contact.link}
              image={contact.image}
            />
          ))}
        </div>
        <ContactFormMap/>
      </div>
    </div>
  );
};
export default Contact