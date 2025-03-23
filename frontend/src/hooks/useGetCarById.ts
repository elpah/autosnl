import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type ICarDataResponse } from "../types/carResponseType";
import { IDealer } from "../types/otherTypes";

type ICarByIdResponse = {
  car: ICarDataResponse;
  dealer: IDealer;
};
const useGetCarById = (carId: string) => {
  const fetchCarById = () =>
    axios
      .get<ICarByIdResponse>("http://localhost:8080/api/carById", {
        params: { carId },
      })
      .then((res) => res.data);
  return useQuery<ICarByIdResponse, Error>({
    queryKey: ["carById", carId],
    queryFn: fetchCarById,
    enabled: !!carId,
  });
};

export default useGetCarById;
