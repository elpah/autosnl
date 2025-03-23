import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./delivery.module.scss";
import { GlobalContext } from "../../context/GlobalContext";
import { useTranslation } from "react-i18next";

export const Delivery = () => {
  const navigate = useNavigate();
  const {t} = useTranslation<string>("footer")
  
  const globalContext = useContext(GlobalContext);
  return (
    <div className={styles.delivery_container}>
      <div className={styles.delivery_info_wrapper}>
        <h2 className={styles.delivery_header}>
          {t('deliveryHeader')}
        </h2>
        <p className={styles.delivery_text}>
          {t('deliveryText')}
        </p>
        <button
          className={styles.button}
          onClick={() => navigate(`/${globalContext.lang}/contact`)}
        >
        {t('contactUs')}
        </button>
      </div>
    </div>
  );
};
