import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type ICarData } from "../context/GlobalContext";
import { type ICarResponse } from "../types/carResponseType";

const useCars = (carData: ICarData) => {
  const fetchCars = () =>
    axios
      .get<ICarResponse>(`${process.env.REACT_APP_BASE_URL}cars-search`, {
        params: { ...carData },
      })
      .then((res) => res.data);
  return useQuery<ICarResponse, Error>({
    queryKey: ["cars", carData],
    queryFn: fetchCars,
  });
};
export default useCars;
