import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type IAdvancedSeachFieldData } from "../context/GlobalContext";
import { type ICarResponse } from "../types/carResponseType";
import { useDebounce } from "use-debounce";

const useAdvancedSearchCars = (advancedCarData: IAdvancedSeachFieldData) => {
  const [debouncedData] = useDebounce(advancedCarData, 500);
  const advancedSearch = () =>
    axios
      .get<ICarResponse>(`${import.meta.env.VITE_API_URL}advanced-search`, {
        params: { ...debouncedData },
      })
      .then((res) => res.data);

  return useQuery<ICarResponse, Error>({
    queryKey: ["advancedCars", debouncedData],
    queryFn: advancedSearch,
    staleTime: 1 * 60 * 1000,
  });
};
export default useAdvancedSearchCars;
