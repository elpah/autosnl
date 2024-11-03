import React from 'react'

import { FilterItem } from '../../components/filter-item-card/FilterItem'
import { DealerPageMobile } from './dealer-page-mobile/DealerPageMobile'

import styles from "./dealer-page.module.scss"

export const DealerPage = () => {
  return (
    <div className={styles.dealer_page_container}>
      <DealerPageMobile/>
    </div>
  )
}
