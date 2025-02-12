import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {type ICarData } from "../context/GlobalContext";
import { type ICarResponse } from "../types/carResponseType";

const useCars = (carData: ICarData) => {
  const fetchCategories = () =>
    axios
      .get<ICarResponse>("http://localhost:8080/api/cars-search", {
        params: { ...carData },
      })
      .then((res) => res.data);

  return useQuery<ICarResponse, Error>({
    queryKey: ["cars", carData],
    queryFn: fetchCategories,
    // staleTime: 1 * 60 * 1000,
  });
};

export default useCars;
