import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/images/nav_images/arrow.png";
import language_image from "../../../assets/images/nav_images/language_image.png";

import styles from "./desktop-nav.module.scss";

export const DesktopNav = () => {
  const [showCars, setShowCars] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  return (
    <header className={styles.desktop_nav}>
      <nav>
        <Link to="/">
        <div className={styles.logo_container}>
          <h2 className={styles.logo_text}>ZaurAutos</h2>
        </div>
        </Link>
        <div className={styles.menu}>
          <ul className={styles.menu_ul}>
            <li className={styles.all_cars_container}>
              <div
                className={styles.all_cars}
                onClick={() => {
                  setShowLanguageSelector(false);
                  setShowCars(!showCars);
                }}
              >
                <div className={styles.all_cars_txt}>ALL CARS</div>
                <div className={styles.arrow_container}>
                  <img
                    className={`${styles.arrow} ${
                      showCars ? styles.rotated : ""
                    }`}
                    src={arrow}
                    alt=""
                  />
                </div>
              </div>
              <div
                className={`${styles.car_list} ${
                  showCars ? styles.show_cars_open : ""
                }`}
              >
                <ul className={styles.car_list_container}>
                  <li className={styles.car_list_item}>Toyota</li>
                  <li className={styles.car_list_item}>Kia</li>
                  <li className={styles.car_list_item}>Hyundai</li>
                  <li className={styles.car_list_item}>Volkswagen</li>
                  <li className={styles.car_list_item}>Rolls Royce</li>
                  <li className={styles.car_list_item}>Mercedes Benz</li>
                  <li className={styles.car_list_item}>Volvo</li>
                  <li className={styles.car_list_item}>Maserati</li>
                </ul>
              </div>
            </li>
            <Link to="/about">
              <li className={styles.list_item}>ABOUT</li>
            </Link>
            <Link to="/contact">
              <li className={styles.list_item}>CONTACT US</li>
            </Link>
            <Link to="/faq">
              <li className={styles.list_item}>FAQS</li>
            </Link>
          </ul>
        </div>
        <div className={styles.searchbar_container}>
          <form action="" className={styles.search_form}>
            <input
              className={styles.search_input}
              type="search"
              name=""
              id=""
              placeholder="search cars e.g Honda Civic"
            />
            <button className={styles.submit_button}>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className={styles.language_selector_container}>
          <div
            className={styles.language_select_image}
            onClick={() => {
              setShowCars(false);
              setShowLanguageSelector(!showLanguageSelector);
            }}
          >
            <div className={styles.language_image_container}>
              <img
                className={styles.language_image}
                src={language_image}
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
            <div className={styles.language_image_container}>
              <img
                className={styles.language_image}
                src={language_image}
                alt=""
              />
            </div>
            <div className={styles.language_image_container}>
              <img
                className={styles.language_image}
                src={language_image}
                alt=""
              />
            </div>{" "}
            <div className={styles.language_image_container}>
              <img
                className={styles.language_image}
                src={language_image}
                alt=""
              />
            </div>{" "}
            <div className={styles.language_image_container}>
              <img
                className={styles.language_image}
                src={language_image}
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
