import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import styles from "./home.module.scss";
import { HomeSection } from "../../components/home-section/HomeSection";
import { WhyCard } from "../../components/why-card/WhyCard";
import homeCover from "../../assets/images/cover_images/home_cover.png";
import iconNext from "../../assets/images/home_images/icon_next.png";
import iconPrevious from "../../assets/images/home_images/icon_previous.png";
import advert from "../../assets/images/home_images/advert.png";
import { categoryData } from "../../tdata/categoryData";
import popularNissan from "../../assets/images/popular_brands/popular_nissan.png";
import { Delivery } from "../../components/delivery-section/Delivery";
import { FaArrowRight } from "react-icons/fa";
import { whys } from "../../tdata/whys";
import {
  GlobalContext,
  type ICarData,
  type IGlobalContext,
} from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import useBrandModel from "../../hooks/useBrandModel";

export const Home = () => {
  const navigate = useNavigate();
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recommendedVehicleType, setRecommendedVehicleType] =
    useState("passenger");
  const [trustedUsedCars, setTrustedUsedCars] = useState("passenger");
  const [damagedCars, setDamagedCars] = useState("passenger");
  const { data, error, isLoading } = useBrandModel();

  useEffect(
    () => console.table(globalContext.carData),
    [globalContext.carData]
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name == "carBrand") {
      globalContext.setCarData((prevData: ICarData) => ({
        ...prevData,
        carModel: "",
      }));
    }
    globalContext.setCarData((prevData: ICarData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const moveSlide = (direction: number) => {
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = coverImages.length - 1;
    } else if (newIndex >= coverImages.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  const coverImages = [homeCover, homeCover, homeCover, homeCover];
  const popularBrandImages = [
    popularNissan,
    popularNissan,
    popularNissan,
    popularNissan,
    popularNissan,
    popularNissan,
    popularNissan,
    popularNissan,
    popularNissan,
    popularNissan,
    popularNissan,
  ];

  if (error) return <p>{error.message}</p>;
  // if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles.home_container}>
      <div className={styles.cover_container}>
        <div className={styles.form_container}>
          <form className={styles.form}>
            <div className={styles.form_header}>Find your right Car</div>
            <h1 className={styles.button_container}>
              <button
                type="button"
                className={`${styles.button} ${
                  globalContext.carData.cartype === "used"
                    ? styles.selected_button
                    : ""
                }`}
                onClick={() => {
                  globalContext.setCarData((prevData) => ({
                    ...prevData,
                    cartype: "used",
                  }));
                }}
              >
                Used Cars
              </button>
              <button
                type="button"
                className={`${styles.button} ${
                  globalContext.carData.cartype === "damaged"
                    ? styles.selected_button
                    : ""
                }`}
                onClick={() => {
                  globalContext.setCarData((prevData) => ({
                    ...prevData,
                    cartype: "damaged",
                  }));
                }}
              >
                Damaged Cars
              </button>
            </h1>
            <div className={styles.select_container}>
              <select
                className={styles.select}
                name="carBrand"
                value={globalContext.carData.carBrand}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Brand
                </option>
                {data &&
                  Object.keys(data).map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
              </select>

              <select
                className={styles.select}
                value={globalContext.carData.carModel}
                name="carModel"
                onChange={handleChange}
              >
                <option value="" disabled>
                  Model
                </option>

                {globalContext.carData.carBrand && data ? (
                  data[globalContext.carData.carBrand]?.map((model, index) => (
                    <option key={index} value={model}>
                      {model}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    Select a brand first
                  </option>
                )}
              </select>

              <select
                className={styles.select}
                value={globalContext.carData.carFuel}
                name="carFuel"
                onChange={handleChange}
              >
                <option value="" disabled>
                  Fuel
                </option>
                {categoryData[4].values?.map((fuel, index) => (
                  <option key={index} value={fuel.title}>
                    {fuel.title}
                  </option>
                ))}
              </select>
              <select
                className={styles.select}
                value={globalContext.carData.carTransmission}
                onChange={handleChange}
                name="carTransmission"
              >
                <option value="" disabled>
                  Transmission
                </option>
                {categoryData[6].values?.map((transmission, index) => (
                  <option key={index} value={transmission.title}>
                    {transmission.title}
                  </option>
                ))}
              </select>
              <select
                className={styles.select}
                value={globalContext.carData.vehicleType}
                onChange={handleChange}
                name="vehicleType"
              >
                <option value="" disabled>
                  Body Type
                </option>
                {categoryData[3].values?.map((vehicleType, index) => (
                  <option key={index} value={vehicleType.title}>
                    {vehicleType.title}
                  </option>
                ))}
              </select>

              <select
                className={styles.select}
                value={globalContext.carData.carCountry}
                onChange={handleChange}
                name="carCountry"
              >
                <option value="" disabled>
                  Country
                </option>
                {categoryData[8].values?.map((carCountry, index) => (
                  <option key={index} value={carCountry.title}>
                    {carCountry.title}
                  </option>
                ))}
              </select>
            </div>
            <button
              className={styles.submit_button}
              onClick={(e: any) => {
                e.preventDefault();
                navigate("/search-result");
              }}
            >
              Search
            </button>
            <div
              onClick={() => navigate("/advanced-search")}
              className={styles.advanced_search_container}
            >
              <p className={styles.advance_search_text}>Advanced search</p>
              <FaArrowRight className={styles.advance_search_icon} />
            </div>
          </form>
        </div>
        <div className={styles.header_cover_container}>
          <div className={styles.header_container}>
            <h2 className={styles.header}>
              Experience Excellence on Every Road.
            </h2>
            <p className={styles.subtext}>
              Quality cars, unbeatable prices, and exceptional service. Find the
              perfect vehicle from our extensive collection of new and pre-owned
              cars
            </p>
          </div>
          <div className={styles.cover_image_container}>
            <div className={styles.sub_image_container}>
              <div
                className={styles.image_container}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {coverImages.map((image, index) => (
                  <img
                    key={index}
                    className={styles.current_image}
                    src={image}
                    alt={`Cover ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className={styles.select_image_container}>
              <div
                className={styles.icon_container}
                onClick={() => moveSlide(-1)}
              >
                <img
                  className={styles.icon}
                  src={iconPrevious}
                  alt="previous icon"
                />
              </div>

              {coverImages.map((image, index) => (
                <img
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={
                    index === currentIndex
                      ? styles.currentCover
                      : styles.opacity
                  }
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                />
              ))}
              <div
                className={styles.icon_container}
                onClick={() => moveSlide(1)}
              >
                <img className={styles.icon} src={iconNext} alt="next icon" />
              </div>
            </div>
            <div className={styles.advertisement_container}>
              <img
                className={styles.advert_image}
                src={advert}
                alt="advert placeholder"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sections}>
        <HomeSection
          selectedVehicleType={recommendedVehicleType}
          setSelectedVehicleType={setRecommendedVehicleType}
          title="Recommended cars for you"
        />

        <HomeSection
          selectedVehicleType={trustedUsedCars}
          setSelectedVehicleType={setTrustedUsedCars}
          title="Trusted used cars by budget"
        />
        <div className={styles.popular_container}>
          <div className={styles.popular_header_container}>
            <h3 className={styles.popular_header}>Popular Brands</h3>
          </div>
          <div className={styles.popular_images_cover_container}>
            <div className={styles.popular_images_container}>
              <div className={styles.slider}>
                {popularBrandImages.map((image, index) => (
                  <img key={index} src={image} alt="popular brands icons" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <HomeSection
          selectedVehicleType={damagedCars}
          setSelectedVehicleType={setDamagedCars}
          title="Damaged Cars"
        />
      </div>
      <section className={styles.why_section}>
        <h3 className={styles.why_header}>Why ZaurAutos</h3>
        <div className={styles.why_card_container}>
          {whys.map((why, index) => (
            <WhyCard key={index} {...why} />
          ))}
        </div>
      </section>
      <Delivery />
    </div>
  );
};
