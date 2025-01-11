import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type ICarCategoriesResponse = {
  [key: string]: string[];
};

const useCars = (brand: string, model: string, pageNumber: number) => {
  const fetchCategories = () =>
    axios
      .get<ICarCategoriesResponse>("http://localhost:8080/api/cars", {
        params: { brand, model, pageNumber },
      })
      .then((res) => res.data);

  return useQuery<ICarCategoriesResponse, Error>({
    queryKey: ["cars"],
    queryFn: fetchCategories,
    staleTime: 1 * 60 * 1000,
  });
};

export default useCars;
