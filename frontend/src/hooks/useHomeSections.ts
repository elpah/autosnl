import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type HomeSectionResponse } from "../types/homeSectionResponseType";

const useHomeSection = () => {
  const fetchCars = () =>
    axios
      .get<HomeSectionResponse>(`${process.env.REACT_APP_BASE_URL}home-section`)
      .then((res) => res.data);

  return useQuery<HomeSectionResponse, Error>({
    queryKey: ["homeSectionData"],
    queryFn: fetchCars,
    staleTime: Infinity,
  });
};

export default useHomeSection;
