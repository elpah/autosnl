import LoadingCarCard from "../loading-carcard/LoadingCarCard";
import styles from "./advance-is-loading.module.scss";
const AdvanceIsLoading = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 21 }).map((_, index) => (
        <LoadingCarCard key={index} />
      ))}
    </div>
  );
};
export default AdvanceIsLoading;
