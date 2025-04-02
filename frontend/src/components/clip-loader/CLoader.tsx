import { ClipLoader } from "react-spinners";
import styles from "./loader.module.scss";

export const CLoader = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader color="#bfbfbf" size={50} speedMultiplier={0.7} />
    </div>
  );
};
