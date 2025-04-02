import styles from "./loading-cars.module.scss";
import LoadingCarCard from "../loading-carcard/LoadingCarCard";

export const LoadingCars = () => {
  return (
    <div className={styles.loading_container}>
      {Array.from({ length: 30 }).map((_, index) => (
        <LoadingCarCard key={index} />
      ))}
    </div>
  );
};
