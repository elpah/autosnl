import React from "react";

import styles from "./options.module.scss"
import { OptionItem } from "./option-items/OptionItem";



export const Options = () => {
    return (
       
            <div className={styles.options_container}>
                <div className={styles.options_header}> Options</div>
                <OptionItem />
                <OptionItem />
                <OptionItem />
                <OptionItem />
                <OptionItem />
            </div>
    );
};