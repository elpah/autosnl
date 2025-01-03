import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type CarCategoriesResponse = {
  [key: string]: string[];
};

const useBrandModel = () => {
  const fetchCategories = () =>
    axios
      .get<CarCategoriesResponse>("http://localhost:8080/api/brandmodels")
      .then((res) => res.data);

  return useQuery<CarCategoriesResponse, Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};

export default useBrandModel;
