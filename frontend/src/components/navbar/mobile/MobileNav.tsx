import React, { useState } from "react";
import hamburger from "../../../assets/images/nav_images/hamburger.png";
import close from "../../../assets/images/nav_images/close.png";
import arrow from "../../../assets/images/nav_images/arrow.png";
import language_image from "../../../assets/images/nav_images/language_image.png";
import search_icon from "../../../assets/images/nav_images/search_icon.png";
import styles from "./mobile-nav.module.scss";

export const MobileNav = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [showCars, setShowCars] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleSearch = () => setSearchVisible(!searchVisible);

  return (
    <header>
      <nav>
        <div className={styles.logo_container}>
          <h2 className={styles.logo_header}>ZaurAutos</h2>
        </div>
        <div className={styles.others_item_container}>
          {searchVisible ? (
            <div className={styles.search_bar}>
              <input
                type="text"
                className={styles.search_input}
                placeholder="Search..."
              />
              <button className={styles.close_button} onClick={toggleSearch}>
                <img
                  className={styles.hide_search}
                  src={close}
                  alt="close icon"
                />
              </button>
            </div>
          ) : (
            <>
              <div className={styles.search_container} onClick={toggleSearch}>
                <img
                  className={styles.search_icon}
                  src={search_icon}
                  alt="search icon"
                />
              </div>
              <div
                className={styles.language_selector}
                onClick={() => setShowLanguageSelector(!showLanguageSelector)}
              >
                <div className={styles.language_image_container}>
                  <img
                    className={styles.current_language}
                    src={language_image}
                    alt="language image"
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
              <div
                className={styles.menu_icon}
                onClick={() => {
                  setShowCars(false);
                  setShowMenu(!showMenu);
                }}
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
      >
        <div className={styles.nav_open}>
          <ul className={styles.menu_list_container}>
            <li className={styles.menu_list_car}>
              <div className={styles.all_cars_container}>
                <div className={styles.all_cars_txt}>All Cars</div>
                <img
                  className={`${styles.all_cars_arrow} ${
                    showCars ? styles.rotated : ""
                  }`}
                  src={arrow}
                  alt="arrow down"
                  onClick={() => setShowCars(!showCars)}
                />
              </div>

              <div
                className={`${styles.car_list} ${
                  showCars ? styles.show_cars_open : ""
                }`}
              >
                <ul>
                  <li>Toyota</li>
                  <li>Toyota</li>
                  <li>Toyota</li>
                  <li>Toyota</li>
                  <li>Toyota</li>
                  <li>Toyota</li>
                  <li>Toyota</li>
                  <li>Toyota</li>
                </ul>
              </div>
            </li>
            <li className={styles.menu_list_item}>About Us</li>
            <li className={styles.menu_list_item}>Contact Us</li>
            <li className={styles.menu_list_item}>FAQs</li>
          </ul>
        </div>
      </div>
    </header>
  );
};