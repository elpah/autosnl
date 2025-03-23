import { ChangeEvent, useContext, useEffect, useState } from "react";
import { HomeSection } from "../../components/home-section/HomeSection";
import { WhyCard } from "../../components/why-card/WhyCard";
import homeCover from "../../assets/images/cover_images/home_cover.png";
import iconNext from "../../assets/images/home_images/icon_next.png";
import iconPrevious from "../../assets/images/home_images/icon_previous.png";
import advert from "../../assets/images/home_images/advert.png";
import { useCategoryData } from "../../tdata/categoryData";
import popularNissan from "../../assets/images/popular_brands/popular_nissan.png";
import { Delivery } from "../../components/delivery-section/Delivery";
import { CLoader } from "../../components/clip-loader/CLoader";
import { FaArrowRight } from "react-icons/fa";
import { useWhys } from "../../tdata/whys";
import {
  GlobalContext,
  type ICarData,
  type IGlobalContext,
} from "../../context/GlobalContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useBrandModel from "../../hooks/useBrandModel";
import { goToAdvancedSearch, goToSearchResult } from "../../utils/goToResults";
import { useTranslation } from "react-i18next";
import { isValidLang } from "../../utils/utilsFunctions";

import styles from "./home.module.scss";

export const Home = () => {
  const { t } = useTranslation<string>("home");
  const whys = useWhys();
  const categoryData = useCategoryData();

  const navigate = useNavigate();
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recommendedVehicleType, setRecommendedVehicleType] =
    useState("passenger");
  const [trustedUsedCars, setTrustedUsedCars] = useState("passenger");
  const [damagedCars, setDamagedCars] = useState("passenger");
  const { data, error, isLoading } = useBrandModel();
  const { lang: urlLang } = useParams();

  useEffect(() => {
    if (!isLoading) {
      console.log(data);
    }
  }, [data, isLoading]);
  

  useEffect(() => {
    if (urlLang && isValidLang(urlLang)) {
      globalContext.setLang(urlLang);
    } else if (globalContext.lang) {
      globalContext.setLang(globalContext.lang);
    } else {
      globalContext.setLang("en");
    }
  }, [urlLang]);

  useEffect(() => {
    if (!globalContext.carData.carType) {
      globalContext.setCarData((prevData: ICarData) => ({
        ...prevData,
        carType: "used",
      }));
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "brand") {
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

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <CLoader />;

  return (
    <div className={styles.home_container}>
      <div className={styles.cover_container}>
        <div className={styles.form_container}>
          <form className={styles.form}>
            <h2 className={styles.form_header}>{t("findYourRightCar")}</h2>
            <div className={styles.button_container}>
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
                {t("usedCars")}
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
                {t("damaged")}
              </button>
            </div>

            <div className={styles.select_container}>
              <select
                className={styles.select}
                name="brand"
                value={globalContext.carData.brand}
                onChange={handleChange}
              >
                <option value="" disabled>
                  {t("carBrand")}
                </option>
                <option value="All Brands">{t("allBrand")}</option>
                {data &&
                  data.brands &&
                  Object.keys(data.brands).map((brand, index) => {
                    const brandData = data.brands[brand];
                    const brandName = brandData.name[globalContext.lang];
                    return (
                      <option key={index} value={brand}>
                        {brandName}
                      </option>
                    );
                  })}
              </select>

              <select
                className={styles.select}
                value={globalContext.carData.model}
                name="model"
                onChange={handleChange}
              >
                <option value="" disabled>
                  {t("carModel")}
                </option>

                {globalContext.carData.brand && data ? (
                  globalContext.carData.brand === "All Brands" ? (
                    Object.keys(data.brands).map((brandName, index) => {
                      const brandModels = data.brands[brandName].models;

                      return Object.keys(brandModels).map(
                        (modelName, modelIndex) => {
                          const model = brandModels[modelName];
                          const modelNameTranslated = model[globalContext.lang];

                          return (
                            <option
                              key={`${index}-${modelIndex}`}
                              value={modelName}
                            >
                              {modelNameTranslated}
                            </option>
                          );
                        }
                      );
                    })
                  ) : (
                    Object.keys(
                      data.brands[globalContext.carData.brand].models
                    ).map((modelName, index) => {
                      const model =
                        data.brands[globalContext.carData.brand].models[
                          modelName
                        ];
                      const modelNameTranslated = model[globalContext.lang];
                      return (
                        <option key={index} value={modelName}>
                          {modelNameTranslated}
                        </option>
                      );
                    })
                  )
                ) : (
                  <option value="" disabled>
                    {t("selectABrandFirst")}
                  </option>
                )}
              </select>

              <select
                className={styles.select}
                value={globalContext.carData.fuel}
                onChange={handleChange}
                name="fuel"
              >
                <option value="" disabled>
                  {t("fuel")}
                </option>

                {data && data.fuel ? (
                  Object.keys(data.fuel).map((fuelKey, index) => {
                    const fuel = data.fuel[fuelKey];
                    const fuelTranslated = fuel[globalContext.lang];

                    return (
                      <option key={index} value={fuelKey}>
                        {fuelTranslated}
                      </option>
                    );
                  })
                ) : (
                  <option value="" disabled>
                    {t("noFuelTypesAvailable")}
                  </option>
                )}
              </select>

              <select
                className={styles.select}
                value={globalContext.carData.transmission}
                onChange={handleChange}
                name="transmission"
              >
                <option value="" disabled>
                  {t("transmission")}
                </option>
                {categoryData[6].values?.map((transmission, index) => (
                  <option
                    key={index}
                    value={index === 0 ? "manual" : "automatic"}
                  >
                    {transmission}
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
                  {t("bodyType")}
                </option>

                {data && data.body ? (
                  Object.keys(data.body).map((bodyKey, index) => {
                    const bodyName = data.body[bodyKey][globalContext.lang];
                    return (
                      <option key={index} value={bodyKey}>
                        {bodyName}
                      </option>
                    );
                  })
                ) : (
                  <option value="" disabled>
                    {t("noCountriesAvailable")}
                  </option>
                )}
              </select>

              <select
                className={styles.select}
                value={globalContext.carData.country}
                onChange={handleChange}
                name="country"
              >
                <option value="" disabled>
                  {t("country")}
                </option>

                {data && data.countries ? (
                  Object.keys(data.countries).map((countryKey, index) => {
                    const countryName =
                      data.countries[countryKey][globalContext.lang];
                    return (
                      <option key={index} value={countryKey}>
                        {countryName}
                      </option>
                    );
                  })
                ) : (
                  <option value="" disabled>
                    {t("noCountriesAvailable")}
                  </option>
                )}
              </select>
            </div>

            <button
              className={styles.submit_button}
              onClick={(e) => {
                e.preventDefault();
                goToSearchResult(globalContext, navigate);
              }}
            >
              {t("search")}
            </button>
            <div
              onClick={() => {
                globalContext.setAdvancedSearchFieldData((prev) => ({
                  ...prev,
                  dealerId: "",
                }));
                goToAdvancedSearch(globalContext, navigate);
              }}
              className={styles.advanced_search_container}
            >
              <p className={styles.advance_search_text}>
                {t("advancedSearch")}
              </p>
              <FaArrowRight className={styles.advance_search_icon} />
            </div>
          </form>
        </div>
        <div className={styles.header_cover_container}>
          <div className={styles.header_container}>
            <h2 className={styles.header}>{t("experienceExcellence")}</h2>
            <p className={styles.subtext}>{t("qualityCarsUnbetablePrice")}</p>
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
          title={t("recommendedForYou")}
        />

        <HomeSection
          selectedVehicleType={trustedUsedCars}
          setSelectedVehicleType={setTrustedUsedCars}
          title={t("trustedBudget")}
        />
        <div className={styles.popular_container}>
          <div className={styles.popular_header_container}>
            <h3 className={styles.popular_header}>{t("popularBrands")}</h3>
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
          title={t("damagedCars")}
        />
      </div>
      <section className={styles.why_section}>
        <h3 className={styles.why_header}>{t("whyZaurAutos")}</h3>
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
