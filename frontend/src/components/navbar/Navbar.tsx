import React, { useEffect, useRef, useState, useContext } from "react";
import { DesktopNav } from "./desktop/DesktopNav";
import { MobileNav } from "./mobile/MobileNav";

import useBrandModel from "../../hooks/useBrandModel";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "./navbar.module.scss";
import { en_flag, nl_flag, ru_flag, ua_flag } from "../../assets/images/images";

const Navbar = () => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [_showSuggestions, setShowSuggestions] = useState(false);
  const [refTracker, setRefTracker] = useState(true);
  const [showCars, setShowCars] = useState(false);
  const [queryWord, setQueryWord] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const languageSelectorRef = useRef<HTMLDivElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const globalContext = useContext(GlobalContext);

  const someBrands = [
    "BMW",
    "Ford",
    "Volkswagen",
    "Tesla",
    "Mercedes-Benz",
    "Volvo",
    "Maserati",
    "Toyota",
  ];

  const navigate = useNavigate();
  const { data, isLoading } = useBrandModel();

  const carData = data;
  const flags = { en: en_flag, nl: nl_flag, ru: ru_flag, ua: ua_flag };

  useEffect(() => {
    if (selectedIndex !== -1) {
      setQueryWord(filteredSuggestions[selectedIndex]);
    }
  }, [selectedIndex, filteredSuggestions]);

  if (isLoading) return <p></p>;

  if (!carData || !carData?.brands) return <p>No data available</p>;

  const suggestionsArray = Object.entries(carData.brands).flatMap(
    ([brand, models]) => [brand, ...models.map((model) => `${brand} ${model}`)]
  );

  const changeLanguage = (newLang: string) => {
    globalContext.setLang(newLang);

    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    // const currentHash = window.location.hash;
    const newPath = `/${newLang}${currentPath.slice(3)}${currentSearch}`;
    setShowLanguageSelector(false);

    navigate(newPath, { replace: true });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQueryWord(value);

    if (!value) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const filtered = suggestionsArray.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
    setSelectedIndex(-1);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setQueryWord(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredSuggestions.length === 0) return;

    if (e.key === "Escape") {
      setShowSuggestions(false);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prevIndex) => {
        const newIndex = Math.min(
          filteredSuggestions.length - 1,
          prevIndex + 1
        );
        setTimeout(() => {
          document.getElementById(`suggestion-${newIndex}`)?.scrollIntoView({
            block: "nearest",
            behavior: "smooth",
          });
        }, 0);

        return newIndex;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prevIndex) => {
        const newIndex = Math.max(0, prevIndex - 1);
        setTimeout(() => {
          document.getElementById(`suggestion-${newIndex}`)?.scrollIntoView({
            block: "nearest",
            behavior: "smooth",
          });
        }, 0);

        return newIndex;
      });
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex !== -1) {
        handleSelectSuggestion(filteredSuggestions[selectedIndex]);
      } else if (filteredSuggestions.length > 0) {
        handleSelectSuggestion(filteredSuggestions[0]);
      }
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const checkBeforeHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const words = queryWord.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    const possibleBrand = words[0];

    let query;

    if (carData.brands[possibleBrand]) {
      if (words.length === 1) {
        query = queryString.stringify(
          { brand: possibleBrand },
          { skipEmptyString: true }
        );
      } else {
        const possibleModel = words.slice(1).join(" ");
        if (carData.brands[possibleBrand].includes(possibleModel)) {
          query = queryString.stringify(
            { brand: possibleBrand, model: possibleModel },
            { skipEmptyString: true }
          );
        }
      }
    }
    setQueryWord("");
    navigate(`/${globalContext.lang}/search-result?${query}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidQuery = filteredSuggestions.some(
      (suggestion) => suggestion.toLowerCase() === queryWord.toLowerCase()
    );
    if (isValidQuery) {
      checkBeforeHandleSubmit(e);
    }
  };
  const handleBrandClick = (brand: string) => {
    let query = queryString.stringify(
      { brand: brand },
      { skipEmptyString: true }
    );
    setShowCars(false);
    navigate(`/${globalContext.lang}/search-result?${query}`);
  };
  return (
    <div className={styles.container}>
      <MobileNav
        showLanguageSelector={showLanguageSelector}
        setShowLanguageSelector={setShowLanguageSelector}
        languageSelectorRef={languageSelectorRef}
        suggestionsRef={suggestionsRef}
        filteredSuggestions={filteredSuggestions}
        showCars={showCars}
        setShowCars={setShowCars}
        queryWord={queryWord}
        handleInputChange={handleInputChange}
        handleSelectSuggestion={handleSelectSuggestion}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        selectedIndex={selectedIndex}
        refTracker={refTracker}
        setRefTracker={setRefTracker}
        someBrands={someBrands}
        handleBrandClick={handleBrandClick}
        changeLanguage={changeLanguage}
        flags={flags}
        selected_flag={
          flags[globalContext.lang as keyof typeof flags] || flags.en
        }
      />
      <DesktopNav
        showLanguageSelector={showLanguageSelector}
        setShowLanguageSelector={setShowLanguageSelector}
        languageSelectorRef={languageSelectorRef}
        suggestionsRef={suggestionsRef}
        filteredSuggestions={filteredSuggestions}
        showCars={showCars}
        setShowCars={setShowCars}
        queryWord={queryWord}
        handleInputChange={handleInputChange}
        handleSelectSuggestion={handleSelectSuggestion}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        selectedIndex={selectedIndex}
        refTracker={refTracker}
        setRefTracker={setRefTracker}
        someBrands={someBrands}
        handleBrandClick={handleBrandClick}
        changeLanguage={changeLanguage}
        flags={flags}
        selected_flag={
          flags[globalContext.lang as keyof typeof flags] || flags.en
        }
      />
    </div>
  );
};

export default Navbar;
