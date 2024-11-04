import React from 'react'
import plusIcon from "../../../assets/images/category_icons/plus_icon.png"
import minusIcon from "../../../assets/images/category_icons/minus_icon.png"


import styles from "./category.module.scss"
import { CategoryCheckItem } from '../category-check-item/CategoryCheckItem'
export const Category = () => {

    
  return (
    <div className={styles.container}>
        <div className={styles.sub_wrapper}>
        <div className={styles.header_container}>
            <div className={styles.header}> Search By Brand</div>
            <div className={styles.open_close_icon_container}>
                <img className={styles.open_close_icon} src={plusIcon} alt="open or close" />
            </div>
        </div>
        <div className={styles.cat_items_container}>
            <CategoryCheckItem/>
            <CategoryCheckItem/>
            <CategoryCheckItem/>
            <CategoryCheckItem/>
            <CategoryCheckItem/>
            <CategoryCheckItem/>
            <CategoryCheckItem/>
            <CategoryCheckItem/><CategoryCheckItem/>
            <CategoryCheckItem/>
            <CategoryCheckItem/>
            <CategoryCheckItem/><CategoryCheckItem/>
            <CategoryCheckItem/>
            <CategoryCheckItem/>
            <CategoryCheckItem/><CategoryCheckItem/>
            <CategoryCheckItem/>
            <CategoryCheckItem/>
            <CategoryCheckItem/>
        </div>
        </div>
    </div>
  )
}
