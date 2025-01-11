import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type ICarCategoriesResponse = {
  [key: string]: string[];
};

const useBrandModel = () => {
  const fetchCategories = () =>
    axios
      .get<ICarCategoriesResponse>("http://localhost:8080/api/brandmodels")
      .then((res) => res.data);

  return useQuery<ICarCategoriesResponse, Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
	staleTime:10*1000,
  });
};

export default useBrandModel;
