import React from "react";
import styles from "./OptionItem.module.scss"

export const OptionItem = () => {
    return (
        <>
            <hr />
            <div className={styles.option_items_container}>
                <div className={styles.option_header_icon_container}>
                    <div className={styles.option_header}>Airbag</div>
                    <svg className={styles.header_icon} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2.08322 3.22913C2.02145 3.22918 1.96109 3.24754 1.90975 3.28188C1.85841 3.31622 1.8184 3.36501 1.79477 3.42207C1.77114 3.47914 1.76495 3.54193 1.77699 3.60252C1.78902 3.6631 1.81874 3.71876 1.86239 3.76246L4.77905 6.67913C4.83765 6.73765 4.91707 6.77052 4.99989 6.77052C5.0827 6.77052 5.16213 6.73765 5.22072 6.67913L8.13739 3.76246C8.18104 3.71876 8.21075 3.6631 8.22279 3.60252C8.23482 3.54193 8.22864 3.47914 8.20501 3.42207C8.18138 3.36501 8.14137 3.31622 8.09003 3.28188C8.03869 3.24754 7.97832 3.22918 7.91655 3.22913H2.08322Z" fill="#4C4C4C" />
                    </svg>
                </div>
                    <ul className={styles.option_list_container}>
                        <li className={styles.option_li}>Lorem ipsum dolor </li>
                        <li className={styles.option_li}>Lorem ipsum dolor </li>
                        <li className={styles.option_li}>Lorem ipsum dolor </li>
                    </ul>
            </div>
        </>
    );
};

