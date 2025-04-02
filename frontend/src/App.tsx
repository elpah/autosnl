import React, { Suspense, useContext, useEffect, useState } from "react";
import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  GlobalContext,
  type ICarData,
  type IAdvancedSeachFieldData,
} from "./context/GlobalContext";

import "./i18n";

import { Home } from "./pages/homepage/Home";
import { Footer } from "./components/footer/Footer";
import { CLoader } from "./components/clip-loader/CLoader";
import { isValidLang } from "./utils/utilsFunctions";

import "./App.css";
import RedirectToLang from "./pages/RedirectToLang";

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

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation<"en" | "nl" | "ua" | "ru">();
  const { lang: globalLang, setLang } = useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (lang && isValidLang(lang)) {
      setLang(lang);
      i18n.changeLanguage(lang);
    } else {
      const pathSegments = location.pathname.split("/").filter(Boolean);
      if (
        pathSegments.length > 0 &&
        !["en", "nl", "ru", "ua"].includes(pathSegments[0])
      ) {
        const newPath = `/${globalLang || "en"}${location.pathname}${
          location.search
        }`;
        navigate(newPath, { replace: true });
      }
      i18n.changeLanguage(globalLang);
    }
  }, [lang, globalLang, setLang, i18n, navigate, location]);

  return <>{children}</>;
};

const RootRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const { lang: globalLang } = useContext(GlobalContext);

  useEffect(() => {
    if (pathname === "/") {
      navigate(`/${globalLang || "en"}`, { replace: true });
    }
  }, [pathname, navigate]);

  return null;
};

function App() {
  const [carData, setCarData] = useState<ICarData>({
    carType: "used",
    brand: "",
    model: "",
    vehicleType: "",
    fuel: "",
    transmission: "",
    country: "",
    pageNumber: 1,
  });

  const [advancedSearchFieldData, setAdvancedSearchFieldData] =
    useState<IAdvancedSeachFieldData>({
      brand: [],
      model: [],
      vehicleType: [],
      fuel: [],
      priceMin: 0,
      priceMax: 0,
      mileageMin: 0,
      mileageMax: 0,
      transmission: [],
      erdMin: 0,
      erdMax: 0,
      country: [],
      pageNumber: 1,
      dealerId: "",
    });
  const [categoryToFieldKeyMap, setCategoryToFieldKeyMap] = useState<
    Record<string, keyof IAdvancedSeachFieldData | null>
  >({
    "Search By Brand": "brand",
    "Search By Model": "model",
    "Vehicle Type": "vehicleType",
    Fuel: "fuel",
    "Min Price": "priceMin",
    "Max Price": "priceMax",
    Transmission: "transmission",
    "Min Mileage": "mileageMin",
    "Max Mileage": "mileageMax",
    "Min Erd": "erdMin",
    "Max Erd": "erdMax",
    Country: "country",
  });
  const [lang, setLang] = useState<"en" | "ru" | "nl" | "ua">("en");

  return (
    <>
      <GlobalContext.Provider
        value={{
          lang,
          setLang,
          carData,
          setCarData,
          advancedSearchFieldData,
          setAdvancedSearchFieldData,
          categoryToFieldKeyMap,
          setCategoryToFieldKeyMap,
        }}
      >
        <Suspense fallback={<CLoader />}>
          <LanguageWrapper>
            <Navbar />
            <div className="App">
              <Routes>
                <Route path="/" element={<RootRedirect />} />
                <Route path="/:lang" element={<Home />} />
                <Route path="/:lang/about" element={<About />} />
                <Route path="/:lang/faq" element={<Faq />} />
                <Route path="/:lang/contact" element={<Contact />} />
                <Route path="/:lang/car-page/:carId" element={<CarPage />} />
                <Route
                  path="/:lang/dealer-page/:dealerId"
                  element={<DealerPage />}
                />
                <Route path="/:lang/search-result" element={<SearchResult />} />
                <Route
                  path="/:lang/advanced-search"
                  element={<AdvancedSearch />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </LanguageWrapper>
        </Suspense>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
