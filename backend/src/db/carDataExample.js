const carDataExample = {
  carId: "12344343242",
  carType: "used",
  carBrand: "Toyota",
  carModel: "Camry",
  carImages: [
    "https://tse4.mm.bing.net/th?id=OIP.F3MsgJzAhUreDOHyr4uO6wHaEK&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.F3MsgJzAhUreDOHyr4uO6wHaEK&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.F3MsgJzAhUreDOHyr4uO6wHaEK&pid=Api&P=0&h=180",
  ],
  carMilleage: "50000 miles",
  carFuel: "Gasoline",
  carTransmission: "Automatic",
  carPower: "180 hp",
  carEngineCapacity: "2.5L",
  carERD: "2023",
  carMODTill: "2025-05-20",
  carSalesPrice: "$15,000",
  carNetPrice: "$14,000",
  carVat: "$1,000",
  carColor: "Silver",
  carVanish: "No",
  carGrossExportPrice: "$12,500",
  carBody: "Sedan",
  carNumberOfDoors: "4",
  carDamages: [
    "Minor scratch on the rear bumper",
    "Small dent on the driver side door",
    "Scuff marks on the alloy wheels",
  ],
  carDamageDetails: [
    {
      title: "Minor scratch on the rear bumper",
      text: "Scratch is approximately 5 cm long.",
    },
    {
      title: "Small dent on the driver side door",
      text: "Dent is visible but does not affect functionality.",
    },
    {
      title: "Scuff marks on the alloy wheels",
      text: "Scuffs are superficial and can be buffed out.",
    },
  ],
  carDetails: "One owner, well-maintained vehicle",
  carOptions: {
    airbag: "Dual front airbags",
    coolingAndHeating: "Air conditioning",
    security: "Alarm system",
    other: "Keyless entry",
    exterior: "Alloy wheels",
    entertainment: "Bluetooth audio system",
    comfortInterior: "Leather seats",
    interior: "Wood grain trim",
    comfortExterior: "Automatic headlights",
    safety: "ABS, traction control",
    emmission: "Euro 6 compliant",
    Lightening: "LED headlights",
    salesInformation: "Available for immediate sale",
  },
  dealer:dealerId,
};

const dealerDataExample = {
  dealerId: "dealerId12345",
  dealerName: "John's Car Dealership",
  dealerAddress: "123 Main St, Cityville",
  dealerPhone: "+1-800-123-4567",
  dealerEmail: "contact@johnscars.com",
  cars: [
    "12344343242", // carId of the first car
    "9876543210", // carId of the second car
    "1122334455", // carId of the third car
  ],
};


//  delearDetails: {
//     dealerName: "Example Motors",
//     dealerAddress: "123 Main Street, Cityville, State, Country",
//     dealerPhoneNumbers: ["123-456-7890", "987-654-3210"],
//     dealerEmail: "sales@examplemotors.com",
//   },