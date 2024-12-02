import React from "react";
import styles from "./contact.module.scss";
import {contact_cover,email_icon, phone_icon, location_icon} from "../../assets/images/images";


import { ContactCard } from "../../components/contact-card/ContactCard";
import { ContactFormMap } from "../../components/contact-form-map/ContactFormMap";

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      title: "Location",
      details: "Stationstraat 71, 1506 DE, Zaandam",
      link: "https://maps.app.goo.gl/HLYK4SUxGKNajLTXA",
      image: `${location_icon}`,
    },
    {
      id: 1,
      title: "Email",
      details: "info@zaurautos.nl",
      link: "mailto:info@zaurautos.nl",
      image: `${email_icon}`,
    },
    {
      id: 1,
      title: "Phone",
      details: "+31000000000",
      link: "tel:+31000000000",
      image: `${phone_icon}`,
    },
  ];

  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_cover}
            style={{ backgroundImage: `url(${contact_cover})` }}
>
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