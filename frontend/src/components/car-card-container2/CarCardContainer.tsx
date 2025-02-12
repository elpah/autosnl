import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./car-card-container2.module.scss";
import {
  GlobalContext,
  type IGlobalContext,
} from "../../context/GlobalContext";
import {
  updatePageNumber,
  handlePrevClick,
  handleNextClick,
  handlePageNumberClick,
} from "../../utils/utilsFunctions";

import PageNumber from "../page-number/PageNumber";

interface CarCardContainer2Props {
  children: React.ReactNode;
  totalCars: number;
  currentPage: number;
}

export const CarCardContainer2 = ({
  children,
  totalCars,
  currentPage,
}: CarCardContainer2Props) => {
  const globalContext = useContext<IGlobalContext>(GlobalContext);
  const navigate = useNavigate();

  const carsPerPage = 30;
  const totalPages = Math.ceil(totalCars / carsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <div className={styles.car_card_container}>{children}</div>
      <PageNumber
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        totalPages={totalPages}
        handlePrevClick={() =>
          handlePrevClick(
            globalContext.carData.pageNumber,
            globalContext.setCarData,
            navigate
          )
        }
        handleNextClick={() =>
          handleNextClick(
            globalContext.carData.pageNumber,
            totalPages,
            globalContext.setCarData,
            navigate
          )
        }
        handlePageNumberClick={(pageNumber) =>
          handlePageNumberClick(pageNumber, globalContext.setCarData, navigate)
        }
      />
    </>
  );
};
