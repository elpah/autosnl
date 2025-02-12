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
import queryString from "query-string";
import { goToAdvancedSearch, goToSearchResult } from "../../utils/goToResults";

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
    if (name == "brand") {
      globalContext.setCarData((prevData: ICarData) => ({
        ...prevData,
        model: "",
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

  // const goToSearchResult = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   const query = queryString.stringify(
  //     {
  //       carType: globalContext.carData.carType,
  //       brand: globalContext.carData.brand,
  //       model: globalContext.carData.model,
  //       vehicleType: globalContext.carData.vehicleType,
  //       fuel: globalContext.carData.fuel,
  //       transmission: globalContext.carData.transmission,
  //       country: globalContext.carData.country,
  //       pageNumber: 1,
  //     },
  //     {
  //       skipEmptyString: true,
  //     }
  //   );
  //   navigate(`/search-result?${query}`);
  // };

  useEffect(() => {
    if (!globalContext.carData.carType) {
      globalContext.setCarData((prevData: ICarData) => ({
        ...prevData,
        carType: "used",
      }));
    }
  }, []);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

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
                  globalContext.carData.carType === "used"
                    ? styles.selected_button
                    : ""
                }`}
                onClick={() => {
                  globalContext.setCarData((prevData) => ({
                    ...prevData,
                    carType: "used",
                  }));
                }}
              >
                Used Cars
              </button>
              <button
                type="button"
                className={`${styles.button} ${
                  globalContext.carData.carType === "damaged"
                    ? styles.selected_button
                    : ""
                }`}
                onClick={() => {
                  globalContext.setCarData((prevData) => ({
                    ...prevData,
                    carType: "damaged",
                  }));
                }}
              >
                Damaged Cars
              </button>
            </h1>
            <div className={styles.select_container}>
              <select
                className={styles.select}
                name="brand"
                value={globalContext.carData.brand}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Car Brand
                </option>
                <option value="All Brands">All Brands</option>
                {data &&
                  Object.keys(data).map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
              </select>

              <select
                className={styles.select}
                value={globalContext.carData.model}
                name="model"
                onChange={handleChange}
              >
                <option value="" disabled>
                  Car Model
                </option>
                {globalContext.carData.brand && data ? (
                  globalContext.carData.brand === "All Brands" ? (
                    Object.values(data)
                      .flat()
                      .map((model, index) => (
                        <option key={index} value={model}>
                          {model}
                        </option>
                      ))
                  ) : (
                    data[globalContext.carData.brand]?.map((model, index) => (
                      <option key={index} value={model}>
                        {model}
                      </option>
                    ))
                  )
                ) : (
                  <option value="" disabled>
                    Select a brand first
                  </option>
                )}
              </select>
              <select
                className={styles.select}
                value={globalContext.carData.fuel}
                name="fuel"
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
                value={globalContext.carData.transmission}
                onChange={handleChange}
                name="transmission"
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
                value={globalContext.carData.country}
                onChange={handleChange}
                name="country"
              >
                <option value="" disabled>
                  Country
                </option>
                {categoryData[8].values?.map((country, index) => (
                  <option key={index} value={country.title}>
                    {country.title}
                  </option>
                ))}
              </select>
            </div>
            <button
              className={styles.submit_button}
              onClick={(e) => {
                  e.preventDefault();
                goToSearchResult(globalContext, navigate);
              }}
            >
              Search
            </button>
            <div
              onClick={() => goToAdvancedSearch(globalContext, navigate)}
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
