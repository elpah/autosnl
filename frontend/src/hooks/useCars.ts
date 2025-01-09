import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type ICarCategoriesResponse = {
  [key: string]: string[];
};

const useCars = (pageNumber:number, brand:string, model:string) => {
  const fetchCategories = () =>
    axios
      .get<ICarCategoriesResponse>("http://localhost:8080/api/cars",{params:{carBrand:"somthing"}})
      .then((res) => res.data);

  return useQuery<ICarCategoriesResponse, Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1 * 60 * 1000,
  });
};

export default useCars;
