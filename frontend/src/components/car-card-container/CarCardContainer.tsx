import React, { useContext } from "react";

import styles from "./car-card-container.module.scss";
import CarCard from "../car-card/CarCard";
import PageNumber from "../page-number/PageNumber";
import { useNavigate } from "react-router-dom";
import { IGlobalContext, GlobalContext } from "../../context/GlobalContext";
import {
  handlePrevClick,
  handleNextClick,
  handlePageNumberClick,
} from "../../utils/utilsFunctions";

interface CarCardContainerProps {
  children: React.ReactNode;
  totalCars: number;
  currentPage: number;
}

export const CarCardContainer = ({
  children,
  totalCars,
  currentPage,
}: CarCardContainerProps) => {
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
            globalContext.advancedSearchFieldData.pageNumber,
            globalContext.setAdvancedSearchFieldData,
            navigate
          )
        }
        handleNextClick={() =>
          handleNextClick(
            globalContext.advancedSearchFieldData.pageNumber,
            totalPages,
            globalContext.setAdvancedSearchFieldData,
            navigate
          )
        }
        handlePageNumberClick={(pageNumber) =>
          handlePageNumberClick(
            pageNumber,
            globalContext.setAdvancedSearchFieldData,
            navigate
          )
        }
      />
    </>
  );
};
