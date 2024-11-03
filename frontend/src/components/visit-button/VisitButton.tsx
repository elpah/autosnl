import React from 'react'

import styles from "./visit-button.module.scss"
export const VisitButton = () => {
  return (
    <div className={styles.button_container}>
    <button className={styles.button}>Visit Company Profile</button>
  </div>
  )
}
