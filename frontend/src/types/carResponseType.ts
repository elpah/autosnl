type ICarDataResponse = {
  carId: string;
  carType: string;
  carBrand: string;
  carModel: string;
  carImages: string[];
  carMilleage: string;
  carFuel: string;
  carTransmission: string;
  carPower: string;
  carEngineCapacity: string;
  carERD: string;
  carMODTill: string;
  carSalesPrice: string;
  carNetPrice: string;
  carVat: string;
  carColor: string;
  carVanish: string;
  carGrossExportPrice: string;
  carBody: string;
  carNumberOfDoors: string;
  carDamages: string[];
  carDamageDetails: {
    title: string;
    text: string;
  }[];
  carDetails: string;
  carOptions: {
    airbag: string;
    coolingAndHeating: string;
    security: string;
    other: string;
    exterior: string;
    entertainment: string;
    comfortInterior: string;
    interior: string;
    comfortExterior: string;
    safety: string;
    emmission: string;
    Lightening: string;
    salesInformation: string;
  };
  dealer: {
    dealerId: string;
    dealerName: string;
    dealerAddress: string;
    dealerPhone: string;
    dealerEmail: string;
  };
};

type ICarResponse = {
  totalCars: number;
  cars: ICarDataResponse[];
};

export { type ICarDataResponse, type ICarResponse };
