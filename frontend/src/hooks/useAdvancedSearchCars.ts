import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type IAdvancedSeachFieldData} from "../context/GlobalContext";
import { type ICarResponse } from "../types/carResponseType";

const useAdvancedSearchCars = (advancedCarData: IAdvancedSeachFieldData) => {
  const fetchCategories = () =>
    axios
      .get<ICarResponse>("http://localhost:8080/api/advanced-search", {
        params: { ...advancedCarData },
      })
      .then((res) => res.data);

  return useQuery<ICarResponse, Error>({
    queryKey: ["advancedCars", advancedCarData],
    queryFn: fetchCategories,
    staleTime: 1 * 60 * 1000,
  });
};

export default useAdvancedSearchCars;
