import React from 'react'
import styles from './contact.module.scss'
import { ContactCard } from '../../components/contact-card/ContactCard'
export const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_cover}>
        <div className={styles.header}>Contact Us</div>
        <div className={styles.header_subtext}>Welcome to ZaurAutos</div>
      </div>
      <div className={styles.contact_body}>
        <div className={styles.body_header}>Contact Details</div>
        <div className={styles.body_subtext}>Contact our head office</div>
        <div className={styles.body_card_container}>
          <ContactCard/>
          <ContactCard/>
          <ContactCard/>
        </div>
      </div>

    </div>
  )
}
