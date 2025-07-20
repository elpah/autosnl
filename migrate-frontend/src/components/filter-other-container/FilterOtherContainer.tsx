import styles from "./filter-other-container.module.scss";

type filterPriceContainerProps = {
  children: React.ReactNode;
};

export const FilterOtherContainer = ({
  children,
}: filterPriceContainerProps) => {
  return <div className={styles.filter_price_container}>{children}</div>;
};
