import React from 'react'

import { FilterItem } from '../../components/filter-item-card/FilterItem'
import { DealerPageMobile } from './dealer-page-mobile/DealerPageMobile'

import styles from "./dealer-page.module.scss"
import { Footer } from '../../components/footer/Footer'
import { DealerPageDesktop } from './dealer-page-desktop/DealerPageDesktop'

const DealerPage = () => {
  return (
    <div className={styles.dealer_page_container}>
      <DealerPageMobile/>
      <DealerPageDesktop/>
    </div>
  )
}

export default DealerPage