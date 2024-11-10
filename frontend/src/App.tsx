import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

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
const SearchResult = React.lazy(() => import("./pages/search-result-page/SearchResult"));

function App() {
  return (
    <>
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

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
