import React from 'react'
import faqicon from "../../assets/images/faq_images/faqicon.png";

import styles from './faq.module.scss'
import { Faqcard } from '../../components/faqcard/Faqcard';
export const Faq = () => {
  return (
   <div className={styles.faq_container}>
    <div className={styles.cover}>
      <div className={styles.header_container}>
        <div className={styles.header_image_container}>
          <img className={styles.header_img} src={faqicon} alt='QA icon' />
        </div>
        <div className={styles.header}>FAQ</div>
      </div >
        <div className={styles.header_subtext}>General Questions</div>
      </div>

      <div className={styles.faqs_container}>
        <Faqcard/>
        <Faqcard/>
         <Faqcard/> 
         <Faqcard/>
      </div>
   </div>
  )
}
