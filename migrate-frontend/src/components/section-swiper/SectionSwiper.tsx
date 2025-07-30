import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { Car } from "../../types/homeSectionResponseType";
import CarCard from "../car-card/CarCard";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "./section-swiper.module.scss";

interface carCards {
  selectedVehicleType: string;
  carsArray: Car[];
}

const SectionSwiper = ({ carsArray, selectedVehicleType }: carCards) => {
  const globalContext = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={carsArray.length > 1 ? 1.2 : 1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: carsArray.length > 1 ? 2.2 : 2,
          },
          1024: {
            slidesPerView: carsArray.length > 1 ? 3.2 : 3,
          },
        }}
      >
        {carsArray
          ?.filter(
            (car) =>
              selectedVehicleType === "" ||
              car.lang.en.carBody.toLowerCase() ===
                selectedVehicleType.toLowerCase()
          )
          .map((car, idx) => (
            <SwiperSlide key={idx}>
              <CarCard
                key={car.carId}
                carBrand={car.lang[globalContext.lang].carBrand}
                carModel={car.lang[globalContext.lang].carModel}
                carFuel={car.lang[globalContext.lang].carFuel}
                carImage={car.carImages[0]}
                carYear={car.carERD.toString()}
                carId={car.carId}
                carMileage={car.carMileage.toString()}
                carPrice={car.price_incl_btw ? `€ ${car.price_incl_btw}` : ""}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={styles.bullet_container}>
        <div className="custom-pagination"></div>
      </div>
    </div>
  );
};

export default SectionSwiper;
