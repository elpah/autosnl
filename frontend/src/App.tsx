import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalContext } from "./context/GlobalContext";

import "./App.css";

import { Home } from "./pages/homepage/Home";
import { Footer } from "./components/footer/Footer";

const About = React.lazy(() => import("./pages/about/About"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const Faq = React.lazy(() => import("./pages/faq/Faq"));
const NotFound = React.lazy(() => import("./pages/notfound/NotFound"));
const Navbar = React.lazy(() => import("./components/navbar/Navbar"));
const CarPage = React.lazy(() => import("./pages/carpage/CarPage"));
const DealerPage = React.lazy(() => import("./pages/dealerpage/DealerPage"));

const SearchResult = React.lazy(
  () => import("./pages/search-result-page/SearchResult")
);
const AdvancedSearch = React.lazy(
  () => import("./pages/advanced-search/AdvancedSearch")
);

function App() {
  const [carData, setCarData] = useState({
    cartype: "used",
    carBrand: "",
    carModel: "",
    carErd: "",
    carFuel: "",
    carTransmission: "",
    carCountry: "",
  });
  const [advancedSearchFieldData, setAdvancedSearchFieldData] = useState({
    brand: [] as string[],
    budgetMin: 0,
    budgetMax: 0,
    vehicleType: [] as string[],
    fuel: "petrol",
    milleageMin: 0,
    milleageMax: 0,
    transmission: "automatic",
    erd: "",
    body: "sedan",
  });

  return (
    <>
      <GlobalContext.Provider
        value={{
          carData,
          setCarData,
          advancedSearchFieldData,
          setAdvancedSearchFieldData,
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/car-page" element={<CarPage />} />
              <Route path="/dealer-page" element={<DealerPage />} />
              <Route path="/search-result" element={<SearchResult />} />
              <Route path="/advanced-search" element={<AdvancedSearch />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Suspense>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
