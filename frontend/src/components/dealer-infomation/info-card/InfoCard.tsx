import React from 'react'

import styles from "./info-card.module.scss"
export const InfoCard = () => {
  return (
    <div className={styles.contact_card_container}>
        <div className={styles.contact_image_container}>
            <img  className={styles.contact_image} src="" alt="" />
            <div className={styles.contact_info}> Putter Auto's</div>
        </div>
    </div>
  )
}

