import React from "react";
import {mile, fuel, year} from "../../assets/images/images"
import styles from "./car-card.module.scss";
import { useNavigate } from "react-router-dom";

type ICarCard={
  carBrand:string;
  carModel:string;
  carMilleage:string;
  carFuel:string;
  carYear:string;
  carImage:string;
  // handleViewDetails:VoidFunction;
}

export default function CarCard({carImage,carBrand, carModel,carMilleage,carFuel,carYear}:ICarCard) {
  const navigate = useNavigate();
  return (
    <div className={styles.car_card_container}
   onClick={()=>navigate("/car-page")}
    >
      <div className={styles.car_image_container}>
        <img className={styles.car_img} src={carImage} alt="car" />
      </div>
      <div className={styles.car_body_container}>
        <div className={styles.card_header}>{`${carBrand || "Audi"} ${carModel || "A4"}`}</div>
        <div className={styles.car_details_container}>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src={mile} alt="mileage icon" />
            </div>
            <div className={styles.text}>{carMilleage || "214"}</div>
          </div>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src={fuel} alt="fuel type icon" />
            </div>
            <div className={styles.text}>{carFuel || "Petrol"}</div>
          </div>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src={year} alt="calender year icon" />
            </div>
            <div className={styles.text}>{carYear || 2024}</div>
          </div>
        </div>
        <button className={styles.button}>View Details</button>
      </div>
    </div>
  );
}
