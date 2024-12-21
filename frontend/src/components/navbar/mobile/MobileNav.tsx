import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import hamburger from "../../../assets/images/nav_images/hamburger.png";
import close from "../../../assets/images/nav_images/close.png";
import arrow from "../../../assets/images/nav_images/arrow.png";
import language_image from "../../../assets/images/nav_images/language_image.png";
import search_icon from "../../../assets/images/nav_images/search_icon.png";
import styles from "./mobile-nav.module.scss";

export const MobileNav = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showCars, setShowCars] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearchClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSearchVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const languageSelectorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (hamburgerRef.current && hamburgerRef.current.contains(target)) {
        return;
      }

      if (
        languageSelectorRef.current &&
        !languageSelectorRef.current.contains(target)
      ) {
        setShowLanguageSelector(false);
      }

      if (menuRef.current && !menuRef.current.contains(target)) {
        setShowMenu(false);
        setShowCars(false);
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
        <Link to="/">
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
              <input
                type="text"
                className={styles.search_input}
                placeholder="Search..."
              />
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
              <div
                className={styles.language_selector}
                onClick={() => {
                  setShowMenu(false);
                  setShowLanguageSelector(!showLanguageSelector);
                }}
                ref={languageSelectorRef}
              >
                <div className={styles.language_image_container}>
                  <img
                    className={styles.current_language}
                    src={language_image}
                    alt="language icon"
                  />
                </div>
                <div
                  className={styles.language_arrow_container}
                  onClick={() => {
                    setShowLanguageSelector(!showLanguageSelector);
                  }}
                >
                  <img
                    className={`${styles.arrow} ${
                      showLanguageSelector ? styles.rotated : ""
                    }`}
                    src={arrow}
                    alt="language selector arrow"
                  />
                </div>

                <div
                  className={`${styles.language_dropdown_menu} ${
                    showLanguageSelector ? styles.open : ""
                  }`}
                >
                  <img
                    className={styles.language_dropdown_image}
                    src={language_image}
                    alt="language flag"
                  />
                  <img
                    className={styles.language_dropdown_image}
                    src={language_image}
                    alt="language flag"
                  />
                  <img
                    className={styles.language_dropdown_image}
                    src={language_image}
                    alt="language flag"
                  />
                  <img
                    className={styles.language_dropdown_image}
                    src={language_image}
                    alt="language flag"
                  />
                </div>
              </div>

              <div
                className={styles.menu_icon}
                onClick={() => {
                  setShowLanguageSelector(false);
                  setShowCars(false);
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
            <li className={styles.menu_list_car}>
              <div
                className={styles.all_cars_container}
                onClick={() => setShowCars(!showCars)}
              >
                <div className={styles.all_cars_txt}>All Cars</div>
                <img
                  className={`${styles.all_cars_arrow} ${
                    showCars ? styles.rotated : ""
                  }`}
                  src={arrow}
                  alt="arrow down"
                />
              </div>

              <div
                className={`${styles.car_list} ${
                  showCars ? styles.show_cars_open : ""
                }`}
              >
                <ul>
                  <li>Toyota</li>
                  <li>Kia</li>
                  <li>Hyundai</li>
                  <li>Volkswagen</li>
                  <li>Rolls Royce</li>
                  <li>Mercedes Benz</li>
                  <li>Volvo</li>
                  <li>Maserati</li>
                </ul>
              </div>
            </li>
            <li
              onClick={() => {
                setShowMenu(false);
                navigate("/about");
              }}
              className={styles.menu_list_item}
            >
              About Us
            </li>
            <li
              onClick={() => {
                setShowMenu(false);
                navigate("/contact");
              }}
              className={styles.menu_list_item}
            >
              Contact Us
            </li>
            <li
              onClick={() => {
                setShowMenu(false);
                navigate("/faq");
              }}
              className={styles.menu_list_item}
            >
              FAQs
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
