import React from 'react'

import styles from "./card.module.scss"
type CardItemNameProp = {
  cardItemName:string | any;
}
export const Card = ({cardItemName}:CardItemNameProp) => {
  return (
    <div className={styles.card_container}>{cardItemName}</div>
  )
}
