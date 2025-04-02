import { connectToDatabase } from "../utilsFunctions.js";

// THIS WORKS BUT THAT MEANS I NEED TO LOOP THROUGH ENTIRE DB USING FOR EACH.
// SLOW WHEN DATA INCREASES. BETTER TO USE AGGREGATE

// const getBrandModelsCountries = async () => {
//   try {
//     const db = await connectToDatabase();
//     const col = db.collection("cars");
//     const cars = await col.find({}).toArray();

//     const result = {
//       brands: {},
//       models: {},
//       fuel: {},
//       body: {},
//       countries: {},
//     };

//     cars.forEach((car) => {
//       const brand = car.lang[car.default_language].carBrand.toLowerCase();
//       const model = car.lang[car.default_language].carModel.toLowerCase();
//       const fuel = car.lang[car.default_language].carFuel.toLowerCase();
//       const body = car.lang[car.default_language].carBody.toLowerCase();
//       const country = car.lang[car.default_language].carCountry.toLowerCase();
//       if (!result.brands[brand]) {
//         result.brands[brand] = {
//           name: {
//             en: car.lang.en.carBrand,
//             ru: car.lang.ru.carBrand,
//             nl: car.lang.nl.carBrand,
//             ua: car.lang.ua.carBrand,
//           },
//           models: {},
//         };
//       }
//       if (!result.brands[brand].models[model]) {
//         result.brands[brand].models[model] = {
//           en: car.lang.en.carModel,
//           ru: car.lang.ru.carModel,
//           nl: car.lang.nl.carModel,
//           ua: car.lang.ua.carModel,
//         };
//       }
//       if (!result.fuel[fuel]) {
//         result.fuel[fuel] = {
//           en: car.lang.en.carFuel,
//           ru: car.lang.ru.carFuel,
//           nl: car.lang.nl.carFuel,
//           ua: car.lang.ua.carFuel,
//         };
//       }

//       if (!result.body[body]) {
//         result.body[body] = {
//           en: car.lang.en.carBody,
//           ru: car.lang.ru.carBody,
//           nl: car.lang.nl.carBody,
//           ua: car.lang.ua.carBody,
//         };
//       }
//       if (!result.countries[country]) {
//         result.countries[country] = {
//           en: car.lang.en.carCountry,
//           ru: car.lang.ru.carCountry,
//           nl: car.lang.nl.carCountry,
//           ua: car.lang.ua.carCountry,
//         };
//       }
//     });

//     return result;
//   } catch (error) {
//     console.error("Error retrieving data:", error);
//     return {};
//   }
// };

//THIS SEEMS TO WORK WELL AND USING AGREGATE SO A BETTER OPTION!! FINALLY GOT SOMETHING!!!!!

const getBrandModelsCountries = async () => {
  try {
    const db = await connectToDatabase();
    const col = db.collection("cars");

    const pipelineBrandsModels = [
      {
        $group: {
          _id: {
            brand_en: "$lang.en.carBrand",
            brand_ru: "$lang.ru.carBrand",
            brand_nl: "$lang.nl.carBrand",
            brand_ua: "$lang.ua.carBrand",
            model_en: "$lang.en.carModel",
            model_ru: "$lang.ru.carModel",
            model_nl: "$lang.nl.carModel",
            model_ua: "$lang.ua.carModel",
          },
        },
      },
      {
        $group: {
          _id: {
            brand_en: "$_id.brand_en",
            brand_ru: "$_id.brand_ru",
            brand_nl: "$_id.brand_nl",
            brand_ua: "$_id.brand_ua",
          },
          models: {
            $push: {
              en: "$_id.model_en",
              ru: "$_id.model_ru",
              nl: "$_id.model_nl",
              ua: "$_id.model_ua",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          brand: {
            en: "$_id.brand_en",
            ru: "$_id.brand_ru",
            nl: "$_id.brand_nl",
            ua: "$_id.brand_ua",
          },
          models: 1,
        },
      },
    ];

    const pipelineMetadata = [
      {
        $group: {
          _id: null,
          countries: {
            $addToSet: {
              en: "$lang.en.carCountry",
              ru: "$lang.ru.carCountry",
              nl: "$lang.nl.carCountry",
              ua: "$lang.ua.carCountry",
            },
          },
          fuels: {
            $addToSet: {
              en: "$lang.en.carFuel",
              ru: "$lang.ru.carFuel",
              nl: "$lang.nl.carFuel",
              ua: "$lang.ua.carFuel",
            },
          },
          bodies: {
            $addToSet: {
              en: "$lang.en.carBody",
              ru: "$lang.ru.carBody",
              nl: "$lang.nl.carBody",
              ua: "$lang.ua.carBody",
            },
          },
        },
      },
      {
        $project: { _id: 0, countries: 1, fuels: 1, bodies: 1 },
      },
    ];

    const brandsModelsResult = await col
      .aggregate(pipelineBrandsModels)
      .toArray();
    const metadataResult = await col.aggregate(pipelineMetadata).toArray();

    let formattedResult = { brands: {}, countries: {}, fuel: {}, body: {} };

    brandsModelsResult
      .sort((a, b) => a.brand.en.localeCompare(b.brand.en))
      .forEach(({ brand, models }) => {
        let brandKey = brand.en.toLowerCase();
        if (!formattedResult.brands[brandKey]) {
          formattedResult.brands[brandKey] = {
            name: brand,
            models: {},
          };
        }

        models.forEach((model) => {
          let modelKey = model.en.toLowerCase();
          if (!formattedResult.brands[brandKey].models[modelKey]) {
            formattedResult.brands[brandKey].models[modelKey] = {
              en: model.en,
              ru: model.ru || model.en,
              nl: model.nl || model.en,
              ua: model.ua || model.en,
            };
          }
        });
      });
    metadataResult[0].countries
      .sort((a, b) => a.en.localeCompare(b.en))
      .forEach((country) => {
        let key = country.en.toLowerCase();
        formattedResult.countries[key] = country;
      });
    metadataResult[0].fuels
      .sort((a, b) => a.en.localeCompare(b.en))
      .forEach((fuel) => {
        let key = fuel.en.toLowerCase();
        formattedResult.fuel[key] = fuel;
      });
    metadataResult[0].bodies
      .sort((a, b) => a.en.localeCompare(b.en))
      .forEach((body) => {
        let key = body.en.toLowerCase();
        formattedResult.body[key] = body;
      });
    console.log(formattedResult);
    return formattedResult;
  } catch (error) {
    console.error("Error retrieving car metadata:", error);
    return {};
  }
};

// Expected output

// brands = {
//   bmw: {
//     name: { en: "BMW", ru: "BMW", nl: "BMW", ua: "BMW" },
//     models: {
//       m5: { en: "M5", ru: "М5", nl: "M5", ua: "М5" },
//     },
//   },
//   tesla: {
//     name: { en: "Tesla", ru: "TeslaRu", nl: "TeslaNL", ua: "TeslaUa" },
//     models: {
//       cybertruck: {
//         en: "CyberTruck",
//         ru: "CybertruckRU",
//         nl: "CyberTruckNL",
//         ua: "CybertruckUa",
//       },
//       model_3: {
//         en: "Model 3 in English...",
//         ru: "Model 3 in RU...",
//         nl: "Model 3 in NL...",
//         ua: "Model 3 in UA...",
//       },
//     },
//   },
// };

export { getBrandModelsCountries };
