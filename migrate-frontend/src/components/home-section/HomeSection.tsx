import { useContext } from "react";
import { type CarTranslation } from "../../types/carCategoriesResponse";
import { GlobalContext } from "../../context/GlobalContext";
import { type Car } from "../../types/homeSectionResponseType";
import styles from "./home-section.module.scss";
import SectionSwiper from "../section-swiper/SectionSwiper";

type SectionHomeProps = {
  title: string;
  selectedVehicleType: string;
  body: Record<string, CarTranslation>;
  setSelectedVehicleType: (type: string) => void;
  carsArray: Car[];
};

export const HomeSection = ({
  title,
  selectedVehicleType,
  setSelectedVehicleType,
  body = {},
  carsArray,
}: SectionHomeProps) => {
  const globalContext = useContext(GlobalContext);

  return (
    <section className={styles.section_container}>
      <h2 className={styles.section_header}>{title}</h2>
      <div className={styles.section_sub_container}>
        <div className={styles.section_items_container}>
          {Object.entries(body).map(([vehicleType, type]) => (
            <div
              key={vehicleType}
              onClick={() => {
                setSelectedVehicleType(vehicleType);
              }}
              className={`${styles.section_item} ${
                selectedVehicleType === vehicleType ? styles.selected : ""
              }`}
            >
              {type[globalContext.lang]}
            </div>
          ))}
        </div>
        <div className={styles.car_container}>
          <SectionSwiper
            selectedVehicleType={selectedVehicleType}
            carsArray={carsArray}
          />
        </div>
      </div>
    </section>
  );
};
