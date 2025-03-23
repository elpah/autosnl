import { useTranslation } from "react-i18next";
import styles from "./visit-button.module.scss";
type IButtonProps = {
  handleButtonClick:()=>void;
};
export const VisitButton = ({handleButtonClick}:IButtonProps) => {
  const {t} = useTranslation("carPage")
  return (
    <div className={styles.button_container}>
      <button onClick={handleButtonClick} className={styles.button}>
        {t("visit")}
      </button>
    </div>
  );
};
