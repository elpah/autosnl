import { useContext, useEffect } from "react";
import { CarPageMobile } from "./carpage-mobile/CarPageMobile";
import { CarPageDesktop } from "./carpage-desktop/CarPageDesktop";

import { useNavigate, useParams } from "react-router-dom";
import {
  GlobalContext,
  type IGlobalContext,
} from "../../context/GlobalContext";
import { NULL } from "sass";
import useGetCarById from "../../hooks/useGetCarById";
import { scroll_to_top } from "../../utils/utilsFunctions";
import queryString from "query-string";
import { CLoader } from "../../components/clip-loader/CLoader";
import { isValidLang } from "../../utils/utilsFunctions";
import { useTranslation } from "react-i18next";

import styles from "./car_page.module.scss";

const CarPage = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const { t } = useTranslation("carPage");
  const { lang: urlLang } = useParams();

  useEffect(() => {
    if (urlLang && isValidLang(urlLang)) {
      globalContext.setLang(urlLang);
    }
  }, [urlLang]);

  const {
    data: carByIdData,
    error: carByIdError,
    isLoading: carByIdIsLoading,
  } = useGetCarById(carId!);

  useEffect(() => {
    scroll_to_top();
  }, []);

  const navigate_map = (fieldname: string, value: string) => {
    let query;
    query = queryString.stringify(
      { [fieldname]: value },
      { skipEmptyString: true }
    );
    navigate(`/${globalContext.lang}/search-result?${query}`);
  };

  const setDealerInAdvanceSearchData = (newDealerId: string) => {
    globalContext.setAdvancedSearchFieldData(() => ({
      brand: [],
      model: [],
      vehicleType: [],
      fuel: [],
      priceMin: 0,
      priceMax: 0,
      mileageMin: 0,
      mileageMax: 0,
      transmission: [],
      erdMin: 0,
      erdMax: 0,
      country: [],
      pageNumber: 1,
      dealerId: newDealerId,
    }));
  };

  const handleGoToDealerPage = () => {
    setDealerInAdvanceSearchData(carByIdData?.dealer.dealerId || "");
    navigate(
      `/${globalContext.lang}/dealer-page/${carByIdData?.dealer.dealerId}`
    );
  };

  if (carByIdIsLoading) return <CLoader />;

  if (carByIdError || !carByIdData?.car) return <p>Could not load car</p>;

  return (
    <div className={styles.car_page_container}>
      <div className={styles.car_map_container}>
        <div
          className={styles.map_name}
          onClick={() => navigate(`/${globalContext.lang}/`)}
        >
          {t("home")}
        </div>
        <div className={styles.map_vector_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
          >
            <path
              d="M7.0279 4.9485L3.344 1.595C3.30801 1.56245 3.27956 1.52365 3.26035 1.48092C3.24114 1.43819 3.23156 1.39239 3.23218 1.34623C3.23279 1.30007 3.24359 1.2545 3.26393 1.2122C3.28428 1.16991 3.31375 1.13175 3.3506 1.1C3.42599 1.03495 3.52631 0.999178 3.63024 1.0003C3.73418 1.00142 3.83354 1.03934 3.9072 1.106L7.86335 4.7075C7.89914 4.73982 7.92749 4.77829 7.94673 4.82068C7.96597 4.86307 7.97572 4.90852 7.97541 4.95438C7.9751 5.00024 7.96474 5.04558 7.94494 5.08775C7.92513 5.12992 7.89627 5.16808 7.86005 5.2L3.696 8.8975C3.62146 8.96294 3.52188 8.99951 3.41825 8.99951C3.31463 8.99951 3.21505 8.96294 3.1405 8.8975C3.10408 8.86534 3.07512 8.82687 3.05535 8.78436C3.03558 8.74184 3.02539 8.69616 3.02539 8.65C3.02539 8.60384 3.03558 8.55816 3.05535 8.51564C3.07512 8.47313 3.10408 8.43466 3.1405 8.4025L7.0279 4.9485Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          className={styles.map_name}
          onClick={() =>
            navigate_map("brand", carByIdData?.car.lang.en.carBrand.toLowerCase())
          }
        >
          {carByIdData?.car?.lang[globalContext.lang].carBrand}
        </div>
        <div className={styles.map_vector_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
          >
            <path
              d="M7.0279 4.9485L3.344 1.595C3.30801 1.56245 3.27956 1.52365 3.26035 1.48092C3.24114 1.43819 3.23156 1.39239 3.23218 1.34623C3.23279 1.30007 3.24359 1.2545 3.26393 1.2122C3.28428 1.16991 3.31375 1.13175 3.3506 1.1C3.42599 1.03495 3.52631 0.999178 3.63024 1.0003C3.73418 1.00142 3.83354 1.03934 3.9072 1.106L7.86335 4.7075C7.89914 4.73982 7.92749 4.77829 7.94673 4.82068C7.96597 4.86307 7.97572 4.90852 7.97541 4.95438C7.9751 5.00024 7.96474 5.04558 7.94494 5.08775C7.92513 5.12992 7.89627 5.16808 7.86005 5.2L3.696 8.8975C3.62146 8.96294 3.52188 8.99951 3.41825 8.99951C3.31463 8.99951 3.21505 8.96294 3.1405 8.8975C3.10408 8.86534 3.07512 8.82687 3.05535 8.78436C3.03558 8.74184 3.02539 8.69616 3.02539 8.65C3.02539 8.60384 3.03558 8.55816 3.05535 8.51564C3.07512 8.47313 3.10408 8.43466 3.1405 8.4025L7.0279 4.9485Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          className={styles.map_name}
          onClick={() =>
            navigate_map("carType", carByIdData?.car.lang.en.carType.toLowerCase() || "")
          }
        >
          {carByIdData?.car.lang[globalContext.lang].carType
            ? carByIdData?.car.lang[globalContext.lang].carType
                .charAt(0)
                .toUpperCase() +
              carByIdData.car.lang[globalContext.lang].carType.slice(1)
            : ""}
        </div>
        <div className={styles.map_vector_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
          >
            <path
              d="M7.0279 4.9485L3.344 1.595C3.30801 1.56245 3.27956 1.52365 3.26035 1.48092C3.24114 1.43819 3.23156 1.39239 3.23218 1.34623C3.23279 1.30007 3.24359 1.2545 3.26393 1.2122C3.28428 1.16991 3.31375 1.13175 3.3506 1.1C3.42599 1.03495 3.52631 0.999178 3.63024 1.0003C3.73418 1.00142 3.83354 1.03934 3.9072 1.106L7.86335 4.7075C7.89914 4.73982 7.92749 4.77829 7.94673 4.82068C7.96597 4.86307 7.97572 4.90852 7.97541 4.95438C7.9751 5.00024 7.96474 5.04558 7.94494 5.08775C7.92513 5.12992 7.89627 5.16808 7.86005 5.2L3.696 8.8975C3.62146 8.96294 3.52188 8.99951 3.41825 8.99951C3.31463 8.99951 3.21505 8.96294 3.1405 8.8975C3.10408 8.86534 3.07512 8.82687 3.05535 8.78436C3.03558 8.74184 3.02539 8.69616 3.02539 8.65C3.02539 8.60384 3.03558 8.55816 3.05535 8.51564C3.07512 8.47313 3.10408 8.43466 3.1405 8.4025L7.0279 4.9485Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          className={`${styles.map_name} ${styles.current_car}`}
          onClick={() =>
            navigate_map("model", carByIdData?.car.lang.en.carModel.toLowerCase() || "")
          }
        >
          {carByIdData.car.lang[globalContext.lang].carModel}
        </div>
      </div>
      <CarPageMobile
        coverImages={carByIdData.car.carImages}
        carNameModel={`${carByIdData.car.lang[globalContext.lang].carBrand} ${
          carByIdData?.car.lang[globalContext.lang].carModel
        }`}
        inc_btw_price={carByIdData?.car.price_incl_btw?.toString() || ""}
        excl_btw_price={carByIdData?.car.price_excl_btw?.toString() || ""}
        excl_bpm_btw_price={carByIdData?.car.price_excl_bpm?.toString() || ""}
        carMileage={carByIdData?.car.carMileage.toString() || ""}
        carTransmission={
          carByIdData?.car.lang[globalContext.lang].carTransmission || ""
        }
        carFuel={carByIdData?.car.lang[globalContext.lang].carFuel || ""}
        carPower={carByIdData?.car.carPower || ""}
        carEngineCapacity={carByIdData?.car.carEngineCapacity || ""}
        carERD={carByIdData?.car.carERD.toString() || ""}
        carVat={carByIdData?.car.carVat?.toString() || ""}
        carColor={carByIdData?.car.lang[globalContext.lang].carColor || ""}
        carVanish={carByIdData?.car.lang[globalContext.lang].carVanish || ""}
        carBody={carByIdData?.car.lang[globalContext.lang].carBody || ""}
        carNumberOfDoors={carByIdData?.car.carNumberOfDoors || ""}
        carWeight={carByIdData?.car.carWeight || ""}
        damages={
          carByIdData?.car.lang[globalContext.lang].carDamageDetails || []
        }
        options={carByIdData?.car.lang[globalContext.lang].carOptions || NULL}
        dealerInfo={carByIdData?.dealer}
        handleButtonClick={handleGoToDealerPage}
      />
      <CarPageDesktop
        coverImages={carByIdData?.car.carImages || []}
        carNameModel={`${carByIdData?.car.lang[globalContext.lang].carBrand} ${
          carByIdData?.car.lang[globalContext.lang].carModel
        }`}
        inc_btw_price={carByIdData?.car.price_incl_btw?.toString() || ""}
        excl_btw_price={carByIdData?.car.price_excl_btw?.toString() || ""}
        excl_bpm_btw_price={carByIdData?.car.price_excl_bpm?.toString() || ""}
        carMileage={carByIdData?.car.carMileage.toString() || ""}
        carTransmission={
          carByIdData?.car.lang[globalContext.lang].carTransmission || ""
        }
        carFuel={carByIdData?.car.lang[globalContext.lang].carFuel || ""}
        carPower={carByIdData?.car.carPower || ""}
        carEngineCapacity={carByIdData?.car.carEngineCapacity || ""}
        carERD={carByIdData?.car.carERD.toString() || ""}
        carVat={carByIdData?.car.carVat?.toString() || ""}
        carColor={carByIdData?.car.lang[globalContext.lang].carColor || ""}
        carVanish={carByIdData?.car.lang[globalContext.lang].carVanish || ""}
        carBody={carByIdData?.car.lang[globalContext.lang].carBody || ""}
        carNumberOfDoors={carByIdData?.car.carNumberOfDoors || ""}
        carWeight={carByIdData?.car.carWeight || ""}
        damages={
          carByIdData?.car.lang[globalContext.lang].carDamageDetails || []
        }
        options={carByIdData?.car.lang[globalContext.lang].carOptions || NULL}
        dealerInfo={carByIdData?.dealer}
        handleButtonClick={handleGoToDealerPage}
      />
    </div>
  );
};

export default CarPage;
