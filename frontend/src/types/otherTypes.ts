type CarOptions = {
  airbags?: string[];
  coolingAndHeating?: string[];
  security?: string[];
  entertainment?: string[];
  comfortInterior?: string[];
  comfortExterior?: string[];
  emission?: string[];
  other?: string[];
  exterior?: string[];
  interior?: string[];
  sales?: string[];
  safety?: string[];
  lighting?: string[];
};

type IDealer = {
  dealerId: string;
  dealerName: string;
  dealerAddress: string;
  dealerPhone: string;
  dealerEmail: string;
};

type ICarPageProps = {
  coverImages: string[];
  carNameModel: string;
  inc_btw_price: string;
  excl_btw_price: string;
  excl_bpm_btw_price: string;
  carMileage: string;
  carTransmission: string;
  carFuel: string;
  carPower: string;
  carEngineCapacity: string;
  carERD: string;
  carVat: string;
  carColor: string;
  carVanish: string;
  carBody: string;
  carNumberOfDoors: string;
  carWeight: string;
  damages: { title: string; text: string }[];
  options: CarOptions;
  dealerInfo?: IDealer;
  handleButtonClick: () => void;
};

type IDealerPageProps = {
  dealerNameAndTotal: string;
  dealer: IDealer;
  carList: React.ReactNode;
  totalCars: number;
  loadingContainer: React.ReactNode;
  isLoading: boolean;
};

type IAdvancedProps = {
  carList: React.ReactNode;
  loadingContainer: React.ReactNode;
  isLoading: boolean;
  totalCars: number;
};

type NavProps = {
  showLanguageSelector: boolean;
  setShowLanguageSelector: React.Dispatch<React.SetStateAction<boolean>>;
  showCars: boolean;
  setShowCars: React.Dispatch<React.SetStateAction<boolean>>;
  filteredSuggestions: string[];
  languageSelectorRef: React.RefObject<HTMLDivElement>;
  suggestionsRef?: React.RefObject<HTMLDivElement>;
  queryWord?: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectSuggestion: (suggestion: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  selectedIndex?: number;
  setSelectedIndex?: React.Dispatch<React.SetStateAction<number>>;
  refTracker: boolean;
  setRefTracker: React.Dispatch<React.SetStateAction<boolean>>;
  someBrands: string[];
  handleBrandClick: (brand: string) => void;
  changeLanguage: (lang: string) => void;
  flags: {
    en: string;
    nl: string;
    ru: string;
    ua: string;
  };
  selected_flag:string
};

export {
  type CarOptions,
  type IDealer,
  type ICarPageProps,
  type IDealerPageProps,
  type IAdvancedProps,
  type NavProps,
};


















// {
//   brands: {
//     bmw: {
//       name: {
//         en: "BMW",
//         ru: "БМВ",
//         nl: "BMW",
//         ua: "БМВ"
//       }:
//       models: {
//         model3: {
//           en: "Model X5",
//           ru: "Модель x5",
//           nl: "Model X5",
//           ua: "Модель X5"
//         },
//         x5: {
//           en: "X5",
//           ru: "X5",
//           nl: "X5",
//           ua: "X5"
//         }
//       }
//     },
//     audi: {
//       name: {
//         en: "Audi",
//         ru: "Ауди",
//         nl: "Audi",
//         ua: "Ауді"
//       }:
//       models: {
//         a3: {
//           en: "A3",
//           ru: "A3",
//           nl: "A3",
//           ua: "А3"
//         },
//         q7: {
//           en: "Q7",
//           ru: "Q7",
//           nl: "Q7",
//           ua: "Q7"
//         }
//       }
//     }
//   },
//   countries: {
//     germany: {
//       en: "Germany",
//       ru: "Германия",
//       nl: "Duitsland",
//       ua: "Німеччина"
//     },
//     france: {
//       en: "France",
//       ru: "Франция",
//       nl: "Frankrijk",
//       ua: "Франція"
//     }
//   },
//   fuel: {
//     diesel: {
//       en: "Diesel",
//       ru: "Дизель",
//       nl: "Diesel",
//       ua: "Дизель"
//     },
//     petrol: {
//       en: "Petrol",
//       ru: "Бензин",
//       nl: "Benzine",
//       ua: "Бензин"
//     }
//   },
//   body: {
//     suv: {
//       en: "SUV",
//       ru: "Внедорожник",
//       nl: "SUV",
//       ua: "Позашляховик"
//     },
//     sedan: {
//       en: "Sedan",
//       ru: "Седан",
//       nl: "Sedan",
//       ua: "Седан"
//     }
//   }
// }












// #ToDO

// Consider my mongodb data structure

//   {
//     "carId": "1",
//     "default_language": "en",
//     "lang": {
//       "en": {
//         "carBrand": "Toyota",
//         "carModel": "Highlander",
//         "carDetails": "Well-maintained vehicle",
//         "carBody": "Truck",
//         "carColor": "Green",
//         "carVanish": "No",
//         "carTransmission": "Automatic",
//         "carCountry": "Germany",
//         "carFuel": "Diesel",

//         "carDamageDetails": [
//           {
//             "title": "Minor scratch on the rear bumper",
//             "text": "Scratch is approximately 5 cm long."
//           },
//           {
//             "title": "Small dent on the driver side door",
//             "text": "Dent is visible but does not affect functionality."
//           }
//         ],
//         "carOptions": {
//           "airbag": ["Driver airbag", "Passenger airbag", "Side airbags"],
//           "coolingAndHeating": [
//             "Air conditioning",
//             "Dual-zone climate control"
//           ],
//           "security": ["Alarm system", "Immobilizer"],
//           "entertainment": ["Bluetooth audio", "Premium sound system"],
//           "comfortInterior": ["Leather seats", "Heated front seats"],
//           "comfortExterior": ["Electric windows", "Electric mirrors"],
//           "safety": ["ABS", "Traction control"],
//           "lighting": ["LED headlights", "Fog lights"]
//         }
//       },
//       "nl": {
//         "carBrand": "Toyota",
//         "carModel": "Highlander",
//         "carDetails": "Goed onderhouden voertuig",
//         "carBody": "Vrachtwagen",
//         "carColor": "Groen",
//         "carTransmission": "Automatisch",
//         "carCountry": "Duitsland",
//         "carFuel": "Diesel",

//         "carVanish": "Nee",
//         "carDamageDetails": [
//           {
//             "title": "Kleine kras op de achterbumper",
//             "text": "Kras is ongeveer 5 cm lang."
//           },
//           {
//             "title": "Kleine deuk in de bestuurdersdeur",
//             "text": "Deuk is zichtbaar maar beïnvloedt de functionaliteit niet."
//           }
//         ],
//         "carOptions": {
//           "airbag": ["Bestuurdersairbag", "Passagiersairbag", "Zijairbags"],
//           "coolingAndHeating": ["Airconditioning", "Dubbele klimaatregeling"],
//           "security": ["Alarm systeem", "Immo-systeem"],
//           "entertainment": ["Bluetooth audio", "Premium geluidssysteem"],
//           "comfortInterior": ["Lederen stoelen", "Verwarmde voorstoelen"],
//           "comfortExterior": ["Elektrische ramen", "Elektrische spiegels"],
//           "safety": ["ABS", "Tractiecontrole"],
//           "lighting": ["LED koplampen", "Mistlampen"]
//         }
//       },
//       "ru": {
//         "carBrand": "Тойота",
//         "carModel": "Хайлендер",
//         "carDetails": "Хорошо обслуживаемый автомобиль",
//         "carBody": "Грузовик",
//         "carColor": "Зеленый",
//         "carTransmission": "Автоматический",
//         "carCountry": "Германия",
//         "carFuel": "Дизель",

//         "carVanish": "Нет",
//         "carDamageDetails": [
//           {
//             "title": "Незначительная царапина на заднем бампере",
//             "text": "Царапина длиной около 5 см."
//           },
//           {
//             "title": "Небольшая вмятина на дверце со стороны водителя",
//             "text": "Вмятина видна, но не влияет на функциональность."
//           }
//         ],
//         "carOptions": {
//           "airbag": [
//             "Подушка безопасности водителя",
//             "Подушка безопасности пассажира",
//             "Боковые подушки безопасности"
//           ],
//           "coolingAndHeating": ["Кондиционер", "Двухзонный климат-контроль"],
//           "security": ["Сигнализация", "Иммобилайзер"],
//           "entertainment": [
//             "Аудио через Bluetooth",
//             "Премиум звуковая система"
//           ],
//           "comfortInterior": [
//             "Кожаные сиденья",
//             "Отапливаемые передние сиденья"
//           ],
//           "comfortExterior": ["Электрические окна", "Электрические зеркала"],
//           "safety": ["ABS", "Контроль тяги"],
//           "lighting": ["Светодиодные фары", "Противотуманные фары"]
//         }
//       },
//       "ua": {
//         "carBrand": "Тойота",
//         "carModel": "Хайлендер",
//         "carDetails": "Добре обслуговуваний автомобіль",
//         "carBody": "Вантажівка",
//         "carColor": "Зелений",
//         "carTransmission": "Автоматичний",
//         "carCountry": "Німеччина",
//         "carFuel": "Дизель",
//         "carVanish": "Ні",
//         "carDamageDetails": [
//           {
//             "title": "Неістотна подряпина на задньому бампері",
//             "text": "Подряпина довжиною приблизно 5 см."
//           },
//           {
//             "title": "Невелика вм'ятина на дверцятах водія",
//             "text": "Вм'ятина видна, але не впливає на функціональність."
//           }
//         ],
//         "carOptions": {
//           "airbag": [
//             "Подушка безпеки водія",
//             "Подушка безпеки пасажира",
//             "Бічні подушки безпеки"
//           ],
//           "coolingAndHeating": ["Кондиціонер", "Двозонний клімат-контроль"],
//           "security": ["Сигналізація", "Іммобілайзер"],
//           "entertainment": ["Bluetooth аудіо", "Преміум звукова система"],
//           "comfortInterior": ["Шкіряні сидіння", "Обігріті передні сидіння"],
//           "comfortExterior": ["Електричні вікна", "Електричні дзеркала"],
//           "safety": ["ABS", "Контроль тяги"],
//           "lighting": ["СВІТЛОДІОДНІ фари", "Протитуманні фари"]
//         }
//       }
//     },
//     "carType": "used",
//     "carImages": [
//       "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fHww",
//       "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww",
//       "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
//       "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
//     ],
//     "carMileage": 18789,
//     "carPower": "350 hp",
//     "carEngineCapacity": "4.0L",
//     "carERD": 2017,
//     "carMODTill": "2025-12-31",
//     "dealer": "dealerId1",
//     "price_incl_btw": 58670,
//     "price_excl_btw": 12811,
//     "price_excl_bpm": 27738,
//     "carVat": 3089,
//     "carNumberOfDoors": "4"
//   }

// 1 want to fetch the following data from my database at the start of my application:

// Brands and Models:

// For each brand, i want to fetch the brand name in multiple languages.
// For each brand, i also want to fetch all models associated with that brand, with their names in multiple languages.
// Countries:

// A list of all countries in multiple languages.
// Fuel Types:

// A list of all fuel types (e.g., diesel, petrol) in multiple languages.
// Body Types:

// A list of all body types (e.g., SUV, Sedan) in multiple languages.
// You want this data to be fetched without repetition for any brand, model, fuel type, country, or body type.

// And the final output structure should look like this:



// {
//   brands: {
//     bmw: {
//       name: {
//         en: "BMW",
//         ru: "БМВ",
//         nl: "BMW",
//         ua: "БМВ"
//       }:
//       models: {
//         model3: {
//           en: "Model X5",
//           ru: "Модель x5",
//           nl: "Model X5",
//           ua: "Модель X5"
//         },
//         x5: {
//           en: "X5",
//           ru: "X5",
//           nl: "X5",
//           ua: "X5"
//         }
//       }
//     },
//     audi: {
//       name: {
//         en: "Audi",
//         ru: "Ауди",
//         nl: "Audi",
//         ua: "Ауді"
//       }:
//       models: {
//         a3: {
//           en: "A3",
//           ru: "A3",
//           nl: "A3",
//           ua: "А3"
//         },
//         q7: {
//           en: "Q7",
//           ru: "Q7",
//           nl: "Q7",
//           ua: "Q7"
//         }
//       }
//     }
//   },
//   countries: {
//     germany: {
//       en: "Germany",
//       ru: "Германия",
//       nl: "Duitsland",
//       ua: "Німеччина"
//     },
//     france: {
//       en: "France",
//       ru: "Франция",
//       nl: "Frankrijk",
//       ua: "Франція"
//     }
//   },
//   fuel: {
//     diesel: {
//       en: "Diesel",
//       ru: "Дизель",
//       nl: "Diesel",
//       ua: "Дизель"
//     },
//     petrol: {
//       en: "Petrol",
//       ru: "Бензин",
//       nl: "Benzine",
//       ua: "Бензин"
//     }
//   },
//   body: {
//     suv: {
//       en: "SUV",
//       ru: "Внедорожник",
//       nl: "SUV",
//       ua: "Позашляховик"
//     },
//     sedan: {
//       en: "Sedan",
//       ru: "Седан",
//       nl: "Sedan",
//       ua: "Седан"
//     }
//   }
// }




// i want to achieve this using mongodb aggregate.


// define my function like this 



// const getBrandModelsCountries = async () => {
//   try {
//     const db = await connectToDatabase();
//     const col = db.collection("cars");
// ....

//     return result;
//   } catch (error) {
//     console.error("Error retrieving data:", error);
//     return {};
//   }
// };







// working example 








// const getBrandModelsCountries = async () => {
//   try {
//     const db = await connectToDatabase();
//     const col = db.collection("cars");

//     const pipeline = [
//       {
//         $unwind: { path: "$lang" },
//       },
//       {
//         $group: {
//           _id: null, // No need to group by anything specific here
//           countries: { $addToSet: "$lang.en.carCountry" }, // Collect unique countries
//           fuels: { $addToSet: "$lang.carFuel" }, // Collect unique fuel types
//           bodies: { $addToSet: "$lang.carBody" }, // Collect unique body types
//         },
//       },
//       {
//         // Project the result in the desired structure, ensuring multi-language support
//         $project: {
//           _id: 0,
//           countries: {
//             $arrayToObject: {
//               $map: {
//                 input: "$countries",
//                 as: "country",
//                 in: [
//                   { $toLower: "$$country" }, // Lowercase key for country
//                   {
//                     en: "$$country", // English translation
//                     ru: "$$country", // Russian translation
//                     nl: "$$country", // Dutch translation
//                     ua: "$$country", // Ukrainian translation
//                   },
//                 ],
//               },
//             },
//           },
//           fuel: {
//             $arrayToObject: {
//               $map: {
//                 input: "$fuels",
//                 as: "fuel",
//                 in: [
//                   { $toLower: "$$fuel" }, // Lowercase key for fuel type
//                   {
//                     en: "$$fuel", // English translation
//                     ru: "$$fuel", // Russian translation
//                     nl: "$$fuel", // Dutch translation
//                     ua: "$$fuel", // Ukrainian translation
//                   },
//                 ],
//               },
//             },
//           },
//           body: {
//             $arrayToObject: {
//               $map: {
//                 input: "$bodies",
//                 as: "body",
//                 in: [
//                   { $toLower: "$$body" }, // Lowercase key for body type
//                   {
//                     en: "$$body", // English translation
//                     ru: "$$body", // Russian translation
//                     nl: "$$body", // Dutch translation
//                     ua: "$$body", // Ukrainian translation
//                   },
//                 ],
//               },
//             },
//           },
//         },
//       },
//     ];

//     // Execute the aggregation query
//     const result = await col.aggregate(pipeline).toArray();

//     // Return the formatted result
//     return result[0]; // The result should contain the fields countries, fuel, and body
//   } catch (error) {
//     console.error("Error retrieving countries, fuel, and body data:", error);
//     return {};
//   }
// };






// const getBrandModelsCountries = async () => {
//   try {
//     const db = await connectToDatabase();
//     const col = db.collection("cars");

//     const pipeline = [
//       {
//         // Group by language fields for countries, fuels, and body types
//         $group: {
//           _id: null,
//           countries_en: { $addToSet: "$lang.en.carCountry" }, // English countries
//           countries_ru: { $addToSet: "$lang.ru.carCountry" }, // Russian countries
//           countries_nl: { $addToSet: "$lang.nl.carCountry" }, // Dutch countries
//           countries_ua: { $addToSet: "$lang.ua.carCountry" }, // Ukrainian countries

//           fuels_en: { $addToSet: "$lang.en.carFuel" }, // English fuel types
//           fuels_ru: { $addToSet: "$lang.ru.carFuel" }, // Russian fuel types
//           fuels_nl: { $addToSet: "$lang.nl.carFuel" }, // Dutch fuel types
//           fuels_ua: { $addToSet: "$lang.ua.carFuel" }, // Ukrainian fuel types

//           bodies_en: { $addToSet: "$lang.en.carBody" }, // English body types
//           bodies_ru: { $addToSet: "$lang.ru.carBody" }, // Russian body types
//           bodies_nl: { $addToSet: "$lang.nl.carBody" }, // Dutch body types
//           bodies_ua: { $addToSet: "$lang.ua.carBody" }, // Ukrainian body types
//         },
//       },
//       {
//         // Format the output into an easily accessible structure
//         $project: {
//           _id: 0,
//           countries: {
//             germany: {
//               en: { $arrayElemAt: ["$countries_en", 0] },
//               ru: { $arrayElemAt: ["$countries_ru", 0] },
//               nl: { $arrayElemAt: ["$countries_nl", 0] },
//               ua: { $arrayElemAt: ["$countries_ua", 0] },
//             },
//           },
//           fuel: {
//             diesel: {
//               en: { $arrayElemAt: ["$fuels_en", 0] },
//               ru: { $arrayElemAt: ["$fuels_ru", 0] },
//               nl: { $arrayElemAt: ["$fuels_nl", 0] },
//               ua: { $arrayElemAt: ["$fuels_ua", 0] },
//             },
//           },
//           body: {
//             suv: {
//               en: { $arrayElemAt: ["$bodies_en", 0] },
//               ru: { $arrayElemAt: ["$bodies_ru", 0] },
//               nl: { $arrayElemAt: ["$bodies_nl", 0] },
//               ua: { $arrayElemAt: ["$bodies_ua", 0] },
//             },
//           },
//         },
//       },
//     ];

//     // Execute the aggregation query
//     const result = await col.aggregate(pipeline).toArray();

//     // Return the formatted result
//     return result[0]; // The result should contain the fields countries, fuel, and body
//   } catch (error) {
//     console.error("Error retrieving countries, fuel, and body data:", error);
//     return {};
//   }
// };





// const getBrandModelsCountries = async () => {
//   try {
//     const db = await connectToDatabase();
//     const col = db.collection("cars");

//     const pipeline = [
//       {
//         $group: {
//           _id: {
//             brand_en: "$lang.en.carBrand",
//             brand_ru: "$lang.ru.carBrand",
//             brand_nl: "$lang.nl.carBrand",
//             brand_ua: "$lang.ua.carBrand",
//           },
//           models_en: { $addToSet: "$lang.en.carModel" },
//           models_ru: { $addToSet: "$lang.ru.carModel" },
//           models_nl: { $addToSet: "$lang.nl.carModel" },
//           models_ua: { $addToSet: "$lang.ua.carModel" },
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           brand: {
//             en: "$_id.brand_en",
//             ru: "$_id.brand_ru",
//             nl: "$_id.brand_nl",
//             ua: "$_id.brand_ua",
//           },
//           models: {
//             en: "$models_en",
//             ru: "$models_ru",
//             nl: "$models_nl",
//             ua: "$models_ua",
//           },
//         },
//       },
//     ];

//     const result = await col.aggregate(pipeline).toArray();

//     // Convert result into desired format
//     let formattedResult = { brands: {} };

//     result.forEach(({ brand, models }) => {
//       let brandKey = brand.en.toLowerCase(); // Use English name as key

//       formattedResult.brands[brandKey] = {
//         name: brand,
//         models: {},
//       };

//       models.en.forEach((modelEn, index) => {
//         let modelKey = modelEn.toLowerCase(); // Use English model name as key

//         formattedResult.brands[brandKey].models[modelKey] = {
//           en: modelEn,
//           ru: models.ru[index] || modelEn,
//           nl: models.nl[index] || modelEn,
//           ua: models.ua[index] || modelEn,
//         };
//       });
//     });

//     console.log(formattedResult);
//     return formattedResult;
//   } catch (error) {
//     console.error("Error retrieving brands and models:", error);
//     return {};
//   }
// };

