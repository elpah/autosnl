import { mile, fuel, year } from "../../assets/images/images";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import styles from "./car-card.module.scss";

type ICarCard = {
  carId: string;
  carBrand: string;
  carModel: string;
  carMileage: string;
  carFuel: string;
  carYear: string;
  carImage: string;
  carPrice:string;
};

export default function CarCard({
  carId,
  carImage,
  carBrand,
  carModel,
  carMileage,
  carFuel,
  carYear,
  carPrice
}: ICarCard) {
  const navigate = useNavigate();
  const globalContext = useContext(GlobalContext);

  const handleViewDetails = () => {
    navigate(`/${globalContext.lang}/car-page/${carId}`);
  };
  return (
    <div className={styles.car_card_container}>
      <div className={styles.car_image_container}>
        <img className={styles.car_img} src={carImage} alt="car" />
      </div>
      <div className={styles.car_body_container}>
        <h2 className={styles.card_header}>{`${carBrand} ${
          carModel
        }`}</h2>
        <h2 className={styles.price}>{carPrice}</h2>
        <div className={styles.car_details_container}>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src={mile} alt="mileage icon" />
            </div>
            <div className={styles.text}>{carMileage}</div>
          </div>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img className={styles.icon} src={fuel} alt="fuel type icon" />
            </div>
            <div className={styles.text}>{carFuel}</div>
          </div>
          <div className={styles.car_details}>
            <div className={styles.icon_container}>
              <img
                className={styles.icon}
                src={year}
                alt="calender year icon"
              />
            </div>
            <div className={styles.text}>{carYear}</div>
          </div>
        </div>
        <button className={styles.button} onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
}
