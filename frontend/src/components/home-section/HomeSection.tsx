import { useContext } from "react";
import CarCard from "../car-card/CarCard";
import { type CarTranslation } from "../../types/carCategoriesResponse";
import { GlobalContext } from "../../context/GlobalContext";
import { Car } from "../../types/homeSectionResponseType";
import styles from "./home-section.module.scss";

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
                console.log(vehicleType);
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
          {carsArray
            ?.filter(
              (car) =>
                selectedVehicleType === "" ||
                car.lang.en.carBody.toLowerCase() ===
                  selectedVehicleType.toLowerCase()
            )
            .map((car) => (
              <CarCard
                key={car.carId}
                carBrand={car.lang[globalContext.lang].carBrand}
                carModel={car.lang[globalContext.lang].carModel}
                carFuel={car.lang[globalContext.lang].carFuel}
                carImage={car.carImages[0]}
                carYear={car.carERD.toString()}
                carId={car.carId}
                carMileage={car.carMileage.toString()}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
