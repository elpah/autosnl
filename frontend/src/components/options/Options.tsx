import styles from "./options.module.scss";
import { OptionItem } from "./option-items/OptionItem";
import { useTranslation } from "react-i18next";

type CarOptions = {
  [key: string]: string[];
};

type OptionsProps = {
  carOptions: CarOptions;
};

export const Options: React.FC<OptionsProps> = ({ carOptions }) => {
  const { t } = useTranslation("carPage");
  return (
    <div className={styles.options_container}>
      <div className={styles.options_header}>{t("options")}</div>
      {Object.entries(carOptions).map(([key, items]) => (
        <OptionItem key={key} title={formatTitle(key)} items={items || []} />
      ))}
    </div>
  );
};

const formatTitle = (key: string): string => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};
