import { useEffect, useRef, useState, useContext } from "react";
import { DesktopNav } from "./desktop/DesktopNav";
import { MobileNav } from "./mobile/MobileNav";
import useBrandModel from "../../hooks/useBrandModel";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import { GlobalContext } from "../../context/GlobalContext";
import { en_flag, nl_flag, ru_flag, ua_flag } from "../../assets/images/images";
import styles from "./navbar.module.scss";
import LoadingNav from "./loading-nav/LoadingNav";

const Navbar = () => {
  const [showLanguageSelector, setShowLanguageSelector] =
    useState<boolean>(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [_showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [refTracker, setRefTracker] = useState<boolean>(true);
  const [queryWord, setQueryWord] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const languageSelectorRef = useRef<HTMLDivElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const globalContext = useContext(GlobalContext);
  const navigate = useNavigate();
  const { data, isLoading } = useBrandModel();
  const carData = data;
  const flags = { en: en_flag, nl: nl_flag, ru: ru_flag, ua: ua_flag };

  useEffect(() => {
    if (selectedIndex !== -1) {
      setQueryWord(filteredSuggestions[selectedIndex]);
    }
  }, [selectedIndex, filteredSuggestions]);

  if (isLoading)
    return (
      <div>
        <LoadingNav />
      </div>
    );

  let suggestionsArray: string[];

  if (carData && carData.brands) {
    suggestionsArray = Object.values(carData.brands).flatMap(
      ({ name, models }) => [
        name[globalContext.lang],
        ...Object.values(models).map(
          (model) => `${name[globalContext.lang]} ${model[globalContext.lang]}`
        ),
      ]
    );
  }

  const changeLanguage = (newLang: "en" | "ru" | "nl" | "ua") => {
    globalContext.setLang(newLang);
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
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

    let query;
    let brandEntry;
    const words = queryWord.split(" ");
    const possibleBrand = words[0];

    if (carData && carData.brands) {
      brandEntry = Object.entries(carData.brands).find(
        ([, brandData]) =>
          brandData.name[globalContext.lang].toLowerCase() ===
          possibleBrand.toLowerCase()
      );
    }

    if (brandEntry) {
      const [_brandKey, brandData] = brandEntry;
      if (words.length === 1) {
        query = queryString.stringify(
          { brand: brandData.name.en.toLowerCase() || words[0] },
          { skipEmptyString: true }
        );
      } else {
        const possibleModel = words.slice(1).join(" ");

        const modelEntry = Object.entries(brandData.models).find(
          ([, modelData]) =>
            modelData[globalContext.lang].toLowerCase() ===
            possibleModel.toLocaleLowerCase()
        );

        if (modelEntry) {
          query = queryString.stringify(
            {
              brand: brandData.name.en.toLowerCase(),
              model: modelEntry[1].en.toLowerCase(),
            },
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
  return (
    <div className={styles.container}>
      <MobileNav
        showLanguageSelector={showLanguageSelector}
        setShowLanguageSelector={setShowLanguageSelector}
        languageSelectorRef={languageSelectorRef}
        suggestionsRef={suggestionsRef}
        filteredSuggestions={filteredSuggestions}
        queryWord={queryWord}
        handleInputChange={handleInputChange}
        handleSelectSuggestion={handleSelectSuggestion}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        selectedIndex={selectedIndex}
        refTracker={refTracker}
        setRefTracker={setRefTracker}
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
        queryWord={queryWord}
        handleInputChange={handleInputChange}
        handleSelectSuggestion={handleSelectSuggestion}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        selectedIndex={selectedIndex}
        refTracker={refTracker}
        setRefTracker={setRefTracker}
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
