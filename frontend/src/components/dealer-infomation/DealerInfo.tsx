import React from 'react'

import styles from "./dealer-info.module.scss"
import { InfoCard } from './info-card/InfoCard'

export const DealerInfo = () => {
  return (
    <div className={styles.dealer_info_container}>
        <div className={styles.dealer_info_header}>Dealer Details</div>
        <div className={styles.dealer_info_}>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
        </div>
    </div>
  )
}
