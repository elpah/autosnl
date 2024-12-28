import React from 'react'

import styles from "./car-price-info.module.scss"

const CarPriceInfo = () => {
  return (
    <div className={styles.car_price_container}>
    <div className={styles.price_header}>Mercedes C300</div>
    <div className={styles.inc_btw_price_container}>
      <div className={styles.inc_btw_price}> 5,000,000€</div>
      <div className={styles.inc_btw_price_text}>inc. BTW</div>
    </div>
    <div
      className={`${styles.sub_price_container} ${styles.excl_btw_price_container}`}
    >
      <div className={`${styles.sub_price} ${styles.excl_btw_price}`}>
        3,000,000€
      </div>
      <div
        className={`${styles.sub_price_text} ${styles.excl_btw_price_text}`}
      >
        {" "}
        excl. BTW
      </div>
    </div>
    <div
      className={` ${styles.sub_price_container} ${styles.excl_bpm_price_container}`}
    >
      <div className={`${styles.sub_price} ${styles.excl_bpm_btw_price}`}>
        1,000,000€
      </div>
      <div
        className={`${styles.sub_price_text} ${styles.excl_bpm_btw_price_text}`}
      >
        {" "}
        excl. bpm
      </div>
    </div>
  </div>
  )
}

export default CarPriceInfo