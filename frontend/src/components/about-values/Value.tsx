import styles from "./value.module.scss";

type ValueObject = {
  image: string;
  title: string;
  text: string;
};
export const Value = ({ image, title, text }: ValueObject) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src={image} alt="Value icon" />
      </div>
      <div className={styles.head}>{title}</div>
      <div className={styles.para}>{text}</div>
    </div>
  );
};
