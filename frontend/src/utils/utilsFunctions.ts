import { NavigateFunction } from "react-router-dom";

export const updatePageNumber = <T extends { pageNumber: number }>(
  pageNumber: number,
  setData: React.Dispatch<React.SetStateAction<T>>,
  navigate: NavigateFunction
) => {
  setData((prevData) => ({
    ...prevData,
    pageNumber: pageNumber,
  }));

  //   const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.set("pageNumber", String(pageNumber));
  navigate({
    pathname: window.location.pathname,
    search: queryParams.toString(),
  });
};

export const handlePrevClick = <T extends { pageNumber: number }>(
  currentNumber: number,
  setData: React.Dispatch<React.SetStateAction<T>>,
  navigate: NavigateFunction
) => {
  const newPageNumber = currentNumber - 1;
  if (newPageNumber > 0) {
    updatePageNumber(newPageNumber, setData, navigate);
  }
};

export const handleNextClick = <T extends { pageNumber: number }>(
  currentNumber: number,
  totalPages: number,
  setData: React.Dispatch<React.SetStateAction<T>>,
  navigate: NavigateFunction
) => {
  const newPageNumber = currentNumber + 1;
  if (newPageNumber <= totalPages) {
    updatePageNumber(newPageNumber, setData, navigate);
  }
};

export const handlePageNumberClick = <T extends { pageNumber: number }>(
  pageNumber: number,
  setData: React.Dispatch<React.SetStateAction<T>>,
  navigate: NavigateFunction
) => {
  updatePageNumber(pageNumber, setData, navigate);
};
