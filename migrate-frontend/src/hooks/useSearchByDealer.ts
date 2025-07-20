import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type IAdvancedSeachFieldData } from "../context/GlobalContext";
import { type ICarResponse } from "../types/carResponseType";
import { useDebounce } from "use-debounce";

const useSearchByDealer = (advancedCarData: IAdvancedSeachFieldData) => {
  const [debounceDealerSearch] = useDebounce(advancedCarData, 500);
  const searchByDealer = () =>
    axios
      .get<ICarResponse>(`${import.meta.env.VITE_API_URL}carByDealerId`, {
        params: debounceDealerSearch,
      })
      .then((res) => res.data);
  return useQuery<ICarResponse, Error>({
    queryKey: ["carsByDealer", debounceDealerSearch],
    queryFn: searchByDealer,
    staleTime: 1 * 60 * 1000,
    enabled: !!debounceDealerSearch.dealerId,
  });
};
export default useSearchByDealer;
