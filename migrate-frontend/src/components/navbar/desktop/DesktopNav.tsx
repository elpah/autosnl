import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/images/nav_images/arrow.png";
import { type NavProps } from "../../../types/otherTypes";
import { GlobalContext } from "../../../context/GlobalContext";
import { useTranslation } from "react-i18next";
import styles from "./desktop-nav.module.scss";

export const DesktopNav = ({
  showLanguageSelector,
  setShowLanguageSelector,
  languageSelectorRef,
  suggestionsRef,
  filteredSuggestions,
  queryWord,
  handleInputChange,
  handleSelectSuggestion,
  handleSubmit,
  handleKeyDown,
  selectedIndex,
  refTracker,
  setRefTracker,
  changeLanguage,
  flags,
  selected_flag,
}: NavProps) => {
  const globalContext = useContext(GlobalContext);
  const { t } = useTranslation<string>("nav");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageSelectorRef.current &&
        !languageSelectorRef.current.contains(event.target as Node)
      ) {
        setShowLanguageSelector(false);
      }
      if (
        suggestionsRef?.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setRefTracker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className={styles.desktop_nav}>
      <nav>
        <Link to={`/${globalContext.lang}/`}>
          <div className={styles.logo_container}>
            <h2 className={styles.logo_text}>ZaurAutos</h2>
          </div>
        </Link>
        <div className={styles.menu}>
          <ul className={styles.menu_ul}>
            <Link to={`/${globalContext.lang}/search-result`}>
              <li className={styles.list_item}>{t("all")}</li>
            </Link>

            <Link to={`/${globalContext.lang}/about`}>
              <li className={styles.list_item}>{t("about")}</li>
            </Link>
            <Link to={`/${globalContext.lang}/contact`}>
              <li className={styles.list_item}>{t("contact")}</li>
            </Link>
            <Link to={`/${globalContext.lang}/faq`}>
              <li className={styles.list_item}>{t("faq")}</li>
            </Link>
          </ul>
        </div>
        <div className={styles.searchbar_container}>
          <form onSubmit={handleSubmit} className={styles.search_form}>
            <input
              className={styles.search_input}
              type="search"
              value={queryWord}
              onFocus={() => setRefTracker(true)}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={t("searchExample")}
            />
            <button
              disabled={
                !filteredSuggestions.some(
                  (suggestion) =>
                    suggestion.toLowerCase() === queryWord?.toLowerCase()
                )
              }
              className={styles.submit_button}
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M8.5 8.5L10.5 10.5M1.5 5.5C1.5 6.56087 1.92143 7.57828 2.67157 8.32843C3.42172 9.07857 4.43913 9.5 5.5 9.5C6.56087 9.5 7.57828 9.07857 8.32843 8.32843C9.07857 7.57828 9.5 6.56087 9.5 5.5C9.5 4.43913 9.07857 3.42172 8.32843 2.67157C7.57828 1.92143 6.56087 1.5 5.5 1.5C4.43913 1.5 3.42172 1.92143 2.67157 2.67157C1.92143 3.42172 1.5 4.43913 1.5 5.5Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
          {queryWord && refTracker && (
            <div className={styles.suggestions_container} ref={suggestionsRef}>
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    id={`suggestion-${index}`}
                    className={`${styles.suggestion_item} ${
                      index === selectedIndex ? styles.selected : ""
                    }`}
                    onClick={() => handleSelectSuggestion(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))
              ) : (
                <div className={styles.suggestion_item}>Not found</div>
              )}
            </div>
          )}
        </div>
        <div
          className={styles.language_selector_container}
          ref={languageSelectorRef}
        >
          <div
            className={styles.language_select_image}
            onClick={() => {
              setShowLanguageSelector(!showLanguageSelector);
            }}
          >
            <div className={styles.language_image_container}>
              <img
                className={styles.language_image}
                src={selected_flag}
                alt="selected Language"
              />
            </div>
            <div className={styles.language_arrow_container}>
              <img
                className={`${styles.arrow} ${
                  showLanguageSelector ? styles.rotated : ""
                }`}
                src={arrow}
                alt="dropdown_arrow"
              />
            </div>
          </div>
          <div
            className={`${styles.languages_container} ${
              showLanguageSelector ? styles.open : ""
            }`}
          >
            <div
              className={styles.language_image_container}
              onClick={() => {
                changeLanguage("en");
              }}
            >
              <img
                className={styles.language_image}
                src={flags.en}
                alt="language flag"
              />
            </div>
            <div
              className={styles.language_image_container}
              onClick={() => {
                changeLanguage("nl");
              }}
            >
              <img
                className={styles.language_image}
                src={flags.nl}
                alt="language flag"
              />
            </div>
            <div
              className={styles.language_image_container}
              onClick={() => {
                changeLanguage("ua");
              }}
            >
              <img
                className={styles.language_image}
                src={flags.ua}
                alt="language flag"
              />
            </div>
            <div
              className={styles.language_image_container}
              onClick={() => {
                changeLanguage("ru");
              }}
            >
              <img
                className={styles.language_image}
                src={flags.ru}
                alt="language flag"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
