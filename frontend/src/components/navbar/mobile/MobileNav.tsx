import { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import hamburger from "../../../assets/images/nav_images/hamburger.png";
import close from "../../../assets/images/nav_images/close.png";
import arrow from "../../../assets/images/nav_images/arrow.png";
import search_icon from "../../../assets/images/nav_images/search_icon.png";
import { NavProps } from "../../../types/otherTypes";
import { GlobalContext } from "../../../context/GlobalContext";
import { useTranslation } from "react-i18next";
import styles from "./mobile-nav.module.scss";

export const MobileNav = ({
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
  const [searchVisible, setSearchVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const globalContext = useContext(GlobalContext);
  const { t } = useTranslation("nav");

  const navigate = useNavigate();

  const handleSearchClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSearchVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        hamburgerRef.current &&
        hamburgerRef.current.contains(event.target as Node)
      ) {
        return;
      }
      if (
        languageSelectorRef.current &&
        !languageSelectorRef.current.contains(event.target as Node)
      ) {
        setShowLanguageSelector(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
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
    <header className={styles.mobile_nav_container}>
      <nav className={styles.mobile_nav}>
        <Link to={`/${globalContext.lang}/`}>
          <div className={styles.logo_container}>
            <h2 className={styles.logo_header}>ZaurAutos</h2>
          </div>
        </Link>
        <div className={styles.others_item_container}>
          {searchVisible ? (
            <div
              className={`${styles.search_bar} ${
                isClosing ? styles["slide-out"] : ""
              }`}
            >
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  value={queryWord}
                  onFocus={() => setRefTracker(true)}
                  onChange={handleInputChange}
                  className={styles.search_input}
                  onKeyDown={handleKeyDown}
                  placeholder="Search..."
                />
              </form>
              <button
                className={styles.close_button}
                onClick={handleSearchClose}
              >
                <img
                  className={styles.hide_search}
                  src={close}
                  alt="close icon"
                />
              </button>
              {queryWord && refTracker && (
                <div
                  className={styles.suggestions_container}
                  ref={suggestionsRef}
                >
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
                    <div className={styles.suggestion_item}>
                      {t("notFound")}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
              <div
                className={styles.search_container}
                onClick={() => {
                  setShowLanguageSelector(false);
                  setShowMenu(false);
                  setSearchVisible(true);
                }}
              >
                <img
                  className={styles.search_icon}
                  src={search_icon}
                  alt="search icon"
                />
              </div>
              <div className={styles.language_selector}>
                <div
                  ref={languageSelectorRef}
                  className={styles.image_and_icon_wrapper}
                  onClick={() => {
                    setShowLanguageSelector(!showLanguageSelector);
                  }}
                >
                  <div className={styles.language_image_container}>
                    <img
                      className={styles.current_language}
                      src={selected_flag}
                      alt="language icon"
                    />
                  </div>
                  <div className={styles.language_arrow_container}>
                    <img
                      className={`${styles.arrow} ${
                        showLanguageSelector ? styles.rotated : ""
                      }`}
                      src={arrow}
                      alt="language selector arrow"
                    />
                  </div>
                </div>
                {
                  <div
                    className={`${styles.language_dropdown_menu} ${
                      showLanguageSelector ? styles.open : ""
                    }`}
                  >
                    <img
                      className={styles.language_dropdown_image}
                      src={flags.en}
                      alt="language flag"
                      onClick={() => {
                        changeLanguage("en");
                      }}
                    />
                    <img
                      className={styles.language_dropdown_image}
                      src={flags.nl}
                      alt="language flag"
                      onClick={() => changeLanguage("nl")}
                    />
                    <img
                      className={styles.language_dropdown_image}
                      src={flags.ua}
                      alt="language flag"
                      onClick={() => changeLanguage("ua")}
                    />
                    <img
                      className={styles.language_dropdown_image}
                      src={flags.ru}
                      alt="language flag"
                      onClick={() => changeLanguage("ru")}
                    />
                  </div>
                }
              </div>

              <div
                className={styles.menu_icon}
                onClick={() => {
                  setShowLanguageSelector(false);
                  setShowMenu(!showMenu);
                }}
                ref={hamburgerRef}
              >
                <img
                  className={styles.icon}
                  src={showMenu ? close : hamburger}
                  alt="menu icon"
                />
              </div>
            </>
          )}
        </div>
      </nav>
      <div
        className={`${styles.nav_open_container} ${
          showMenu ? styles.open : ""
        }`}
        ref={menuRef}
      >
        <div className={styles.nav_open}>
          <ul className={styles.menu_list_container}>
            <li className={styles.menu_list_item}>{t("all")}</li>
            <li
              onClick={() => {
                setShowMenu(false);
                navigate(`/${globalContext.lang}/about`);
              }}
              className={styles.menu_list_item}
            >
              {t("about")}
            </li>
            <li
              onClick={() => {
                setShowMenu(false);
                navigate(`/${globalContext.lang}/contact`);
              }}
              className={styles.menu_list_item}
            >
              {t("contact")}
            </li>
            <li
              onClick={() => {
                setShowMenu(false);
                navigate(`/${globalContext.lang}/faq`);
              }}
              className={styles.menu_list_item}
            >
              {t("faq")}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
