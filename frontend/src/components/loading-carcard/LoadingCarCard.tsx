import styles from "./loading-carcard.module.scss";

export default function LoadingCarCard() {
  return (
    <div className={styles.car_card_container}>
      <div className={styles.car_image_container}></div>

      <div className={styles.car_body_container}>
        <div className={styles.card_header}></div>

        <div className={styles.car_details_container}>
          <div className={styles.car_details}>
            <div className={styles.text}></div>
          </div>
          <div className={styles.car_details}>
            <div className={styles.text}></div>
          </div>
          <div className={styles.car_details}>
            <div className={styles.text}></div>
          </div>
        </div>

        <div className={styles.button}></div>
      </div>
    </div>
  );
}
