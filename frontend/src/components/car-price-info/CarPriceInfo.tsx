import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "./car-price-info.module.scss";

type CarPriceInfoProps = {
  carNameModel: string;
  inc_btw_price: string;
  excl_btw_price: string;
  excl_bpm_btw_price: string;
};

const CarPriceInfo = ({
  carNameModel,
  inc_btw_price,
  excl_btw_price,
  excl_bpm_btw_price,
}: CarPriceInfoProps) => {
  
  const globalContext = useContext(GlobalContext)
  const {t} = useTranslation("carPage");
  return (
    <div className={styles.car_price_container}>
      <div className={styles.price_header}>{carNameModel}</div>
      <div className={styles.inc_btw_price_container}>
        <div className={styles.inc_btw_price}>{inc_btw_price}€</div>
        <div className={styles.inc_btw_price_text}>{t('inc')}{" "}{t('vat')}</div>
      </div>
      <div
        className={`${styles.sub_price_container} ${styles.excl_btw_price_container}`}
      >
        <div className={`${styles.sub_price} ${styles.excl_btw_price}`}>
          {excl_btw_price}€
        </div>
        <div
          className={`${styles.sub_price_text} ${styles.excl_btw_price_text}`}
        >
          {t('exc')} {t('vat')}
        </div>
      </div>
      <div
        className={` ${styles.sub_price_container} ${styles.excl_bpm_price_container}`}
      >
        <div className={`${styles.sub_price} ${styles.excl_bpm_btw_price}`}>
          {excl_bpm_btw_price}€
        </div>
        <div
          className={`${styles.sub_price_text} ${styles.excl_bpm_btw_price_text}`}
        >
          {" "}
           {t('exc')}  {t('bpm')}
        </div>
      </div>
    </div>
  );
};

export default CarPriceInfo;
