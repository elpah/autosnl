import { useQuery } from "@tanstack/react-query";
import {type ICarCategoriesResponse} from "../types/carCategoriesResponse"
import axios from "axios";


const useBrandModel = () => {
  const fetchCategories = () =>
    axios
      .get<ICarCategoriesResponse>(
        "http://localhost:8080/api/brandmodelscountries"
      )
      .then((res) => res.data);
      
  return useQuery<ICarCategoriesResponse, Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: Infinity,
  });
};

export default useBrandModel;
