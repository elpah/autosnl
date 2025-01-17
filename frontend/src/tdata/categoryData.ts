const categoryData = [
  {
    title: "Search By Brand",
    values: [
      { title: "Abarth", number_of_cars: 5 },
      { title: "Acura", number_of_cars: 8 },
      { title: "Aixam", number_of_cars: 3 },
      { title: "Alfa Romeo", number_of_cars: 7 },
      { title: "Alpina", number_of_cars: 2 },
      { title: "Alpine", number_of_cars: 6 },
      { title: "Apollo", number_of_cars: 4 },
      { title: "Arash", number_of_cars: 1 },
      { title: "Ariel", number_of_cars: 2 },
      { title: "Arrinera", number_of_cars: 1 },
      { title: "Aston Martin", number_of_cars: 5 },
      { title: "Audi", number_of_cars: 22 },
      { title: "BAIC", number_of_cars: 9 },
      { title: "Bentley", number_of_cars: 5 },
      { title: "Berkeleys", number_of_cars: 1 },
      { title: "Bollinger Motors", number_of_cars: 3 },
      { title: "Borgward", number_of_cars: 2 },
      { title: "Brabus", number_of_cars: 4 },
      { title: "Bugatti", number_of_cars: 3 },
      { title: "Buick", number_of_cars: 10 },
      { title: "BYD", number_of_cars: 12 },
      { title: "Cadillac", number_of_cars: 11 },
      { title: "Caterham", number_of_cars: 3 },
      { title: "Changan", number_of_cars: 8 },
      { title: "Chery", number_of_cars: 9 },
      { title: "Chevrolet", number_of_cars: 18 },
      { title: "Chrysler", number_of_cars: 8 },
      { title: "Citroën", number_of_cars: 13 },
      { title: "CUPRA", number_of_cars: 6 },
      { title: "Dacia", number_of_cars: 7 },
      { title: "Daewoo", number_of_cars: 4 },
      { title: "Daihatsu", number_of_cars: 6 },
      { title: "Datsun", number_of_cars: 5 },
      { title: "De Tomaso", number_of_cars: 2 },
      { title: "Dodge", number_of_cars: 15 },
      { title: "Dongfeng", number_of_cars: 8 },
      { title: "Eagle (discontinued)", number_of_cars: 1 },
      { title: "Exagon Motors", number_of_cars: 2 },
      { title: "FAW", number_of_cars: 7 },
      { title: "Ferrari", number_of_cars: 5 },
      { title: "Fiat", number_of_cars: 12 },
      { title: "Fisker", number_of_cars: 4 },
      { title: "Ford", number_of_cars: 20 },
      { title: "Geely", number_of_cars: 9 },
      { title: "Genesis", number_of_cars: 8 },
      { title: "GMC", number_of_cars: 14 },
      { title: "Great Wall Motors", number_of_cars: 6 },
      { title: "Haval", number_of_cars: 7 },
      { title: "Honda", number_of_cars: 19 },
      { title: "Hyundai", number_of_cars: 21 },
      { title: "Infiniti", number_of_cars: 10 },
      { title: "Isuzu", number_of_cars: 8 },
      { title: "Jaguar", number_of_cars: 7 },
      { title: "Jeep", number_of_cars: 16 },
      { title: "Karma", number_of_cars: 2 },
      { title: "Kia", number_of_cars: 18 },
      { title: "Koenigsegg", number_of_cars: 1 },
      { title: "Lamborghini", number_of_cars: 4 },
      { title: "Lancia", number_of_cars: 3 },
      { title: "Land Rover", number_of_cars: 9 },
      { title: "Lexus", number_of_cars: 17 },
      { title: "Lincoln", number_of_cars: 6 },
      { title: "Lotus", number_of_cars: 5 },
      { title: "Maserati", number_of_cars: 4 },
      { title: "Maybach", number_of_cars: 2 },
      { title: "Mazda", number_of_cars: 13 },
      { title: "McLaren", number_of_cars: 3 },
      { title: "Mercedes-Benz", number_of_cars: 15 },
      { title: "MG", number_of_cars: 9 },
      { title: "Mini", number_of_cars: 8 },
      { title: "Mitsubishi", number_of_cars: 11 },
      { title: "NIO", number_of_cars: 5 },
      { title: "Nissan", number_of_cars: 20 },
      { title: "Opel", number_of_cars: 9 },
      { title: "Pagani", number_of_cars: 2 },
      { title: "Peugeot", number_of_cars: 14 },
      { title: "Polestar", number_of_cars: 4 },
      { title: "Pontiac (discontinued)", number_of_cars: 2 },
      { title: "Porsche", number_of_cars: 10 },
      { title: "RAM", number_of_cars: 6 },
      { title: "Renault", number_of_cars: 12 },
      { title: "Rimac", number_of_cars: 1 },
      { title: "Rivian", number_of_cars: 2 },
      { title: "Rolls-Royce", number_of_cars: 3 },
      { title: "Saab (discontinued)", number_of_cars: 2 },
      { title: "Saleen", number_of_cars: 1 },
      { title: "Saturn (discontinued)", number_of_cars: 1 },
      { title: "Scion (discontinued)", number_of_cars: 1 },
      { title: "SEAT", number_of_cars: 7 },
      { title: "Škoda", number_of_cars: 8 },
      { title: "Smart", number_of_cars: 6 },
      { title: "SsangYong", number_of_cars: 5 },
      { title: "Subaru", number_of_cars: 14 },
      { title: "Suzuki", number_of_cars: 11 },
      { title: "Tata Motors", number_of_cars: 7 },
      { title: "Tesla", number_of_cars: 9 },
      { title: "Toyota", number_of_cars: 25 },
      { title: "Ultima Sports", number_of_cars: 2 },
      { title: "Vauxhall", number_of_cars: 8 },
      { title: "Venturi", number_of_cars: 3 },
      { title: "Volkswagen", number_of_cars: 23 },
      { title: "Volvo", number_of_cars: 13 },
      { title: "W Motors", number_of_cars: 2 },
      { title: "Wey", number_of_cars: 4 },
      { title: "Zenvo", number_of_cars: 1 },
    ],
  },
  {
    title: "Search By Model",
    values: [
      { title: "Model S", number_of_cars: 9 },
      { title: "Model 3", number_of_cars: 15 },
      { title: "Model X", number_of_cars: 8 },
      { title: "Model Y", number_of_cars: 12 },
      { title: "Corolla", number_of_cars: 25 },
      { title: "Camry", number_of_cars: 18 },
      { title: "RAV4", number_of_cars: 22 },
      { title: "Highlander", number_of_cars: 10 },
      { title: "GTR 720", number_of_cars: 2 },
      { title: "Ultima RS", number_of_cars: 5 },
      { title: "Astra", number_of_cars: 8 },
      { title: "Insignia", number_of_cars: 6 },
      { title: "Fetish", number_of_cars: 3 },
      { title: "Venturi America", number_of_cars: 4 },
      { title: "Golf", number_of_cars: 23 },
      { title: "Passat", number_of_cars: 19 },
      { title: "Tiguan", number_of_cars: 17 },
      { title: "Touareg", number_of_cars: 7 },
      { title: "XC90", number_of_cars: 13 },
      { title: "XC60", number_of_cars: 12 },
      { title: "S60", number_of_cars: 10 },
      { title: "Lykan Hypersport", number_of_cars: 2 },
      { title: "Fenyr SuperSport", number_of_cars: 1 },
    ],
  },
  {
    title: "Price (€)",
    Min: [10, 20, 30, 50, 50],
    Max: [100, 200, 300, 500, 600],
    label: { min: "Min Price", max: "Max Price" },
    field: { min: "priceMin", max: "priceMax" },
  },
  {
    title: "Vehicle Type",
    values: [
      { title: "Sedan", number_of_cars: 20 },
      { title: "SUV", number_of_cars: 10 },
      { title: "Luxury", number_of_cars: 24 },
      { title: "Pickup", number_of_cars: 90 },
      { title: "Minivan", number_of_cars: 54 },
      { title: "Hatchback", number_of_cars: 51 },
      { title: "Convertible", number_of_cars: 18 },
    ],
  },
  {
    title: "Fuel",
    values: [
      { title: "Petrol", number_of_cars: 20 },
      { title: "Diesel", number_of_cars: 10 },
      { title: "CNG", number_of_cars: 24 },
      { title: "Electric", number_of_cars: 90 },
    ],
  },
  {
    title: "Milleage",
    Min: [10, 20, 30, 50, 50],
    Max: [100, 200, 300, 500, 600],
    label: { min: "Min Milleage", max: "Max Milleage" },
    field: { min: "milleageMin", max: "milleageMax" },
  },
  {
    title: "Transmission",
    values: [
      { title: "Manual", number_of_cars: 35 },
      { title: "Automatic", number_of_cars: 27 },
    ],
  },
  {
    title: "ERD",
    Min: [1997, 1998, 1999, 2022, 50],
    Max: [100, 200, 300, 500, 600],
    label: { min: "Min Erd", max: "Max Erd" },
    field: { min: "erdMin", max: "erdMax" },
  },
  {
    title: "Country",
    values: [
      { title: "Germany", number_of_cars: 0 },
      { title: "France", number_of_cars: 0 },
      { title: "Italy", number_of_cars: 0 },
      { title: "Spain", number_of_cars: 0 },
      { title: "Portugal", number_of_cars: 0 },
      { title: "Netherlands", number_of_cars: 0 },
      { title: "Belgium", number_of_cars: 0 },
      { title: "Austria", number_of_cars: 0 },
      { title: "Switzerland", number_of_cars: 0 },
      { title: "Sweden", number_of_cars: 0 },
      { title: "Norway", number_of_cars: 0 },
      { title: "Denmark", number_of_cars: 0 },
      { title: "Finland", number_of_cars: 0 },
      { title: "Ireland", number_of_cars: 0 },
      { title: "United Kingdom", number_of_cars: 0 },
      { title: "Poland", number_of_cars: 0 },
      { title: "Czech Republic", number_of_cars: 0 },
      { title: "Slovakia", number_of_cars: 0 },
      { title: "Hungary", number_of_cars: 0 },
      { title: "Croatia", number_of_cars: 0 },
      { title: "Greece", number_of_cars: 0 },
      { title: "Bulgaria", number_of_cars: 0 },
      { title: "Romania", number_of_cars: 0 },
      { title: "Serbia", number_of_cars: 0 },
      { title: "Slovenia", number_of_cars: 0 },
      { title: "Estonia", number_of_cars: 0 },
      { title: "Latvia", number_of_cars: 0 },
      { title: "Lithuania", number_of_cars: 0 },
      { title: "Ukraine", number_of_cars: 0 },
      { title: "Belarus", number_of_cars: 0 },
      { title: "Russia", number_of_cars: 0 },
      { title: "Turkey", number_of_cars: 0 },
      { title: "Cyprus", number_of_cars: 0 },
      { title: "Luxembourg", number_of_cars: 0 },
      { title: "Iceland", number_of_cars: 0 },
      { title: "Malta", number_of_cars: 0 },
      { title: "Liechtenstein", number_of_cars: 0 },
      { title: "Monaco", number_of_cars: 0 },
      { title: "Andorra", number_of_cars: 0 },
      { title: "San Marino", number_of_cars: 0 },
      { title: "Vatican City", number_of_cars: 0 },
      { title: "Moldova", number_of_cars: 0 },
      { title: "Bosnia and Herzegovina", number_of_cars: 0 },
      { title: "Montenegro", number_of_cars: 0 },
      { title: "Kosovo", number_of_cars: 0 },
      { title: "Albania", number_of_cars: 0 },
      { title: "Macedonia (North Macedonia)", number_of_cars: 0 },
    ],
  },
];

export { categoryData };
