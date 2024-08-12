import React from "react";
import styles from "./home.module.scss";
export const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.cover_container}>
        <div className={styles.form_container}>
          <form className={styles.form}>
            <div className={styles.form_header}>Find your right Car</div>
            <div className={styles.button_container}>
              <button className={styles.used_button}>Used Cars</button>
              <button className={styles.damaged_button}>Damaged Cars</button>
            </div>
            <div className={styles.select_container}>
              <select className={styles.select} id="country-select">
                <option value="" disabled selected>
                  Brand
                </option>
                <option value="toyota">Toyota</option>
                <option value="toyota">Toyota</option>
              </select>
              <select className={styles.select} id="country-select">
                <option value="" disabled selected>
                  Model
                </option>
                <option value="Camry">Camry</option>
                <option value="Camry">Camry</option>
              </select>
              <select className={styles.select} id="country-select">
                <option value="" disabled selected>
                  ERD
                </option>
                <option value="erd">erd</option>
                <option value="erd">erd</option>
              </select>
              <select className={styles.select} id="country-select">
                <option value="" disabled selected>
                  Fuel
                </option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
              </select>
              <select className={styles.select} id="country-select">
                <option value="" disabled selected>
                  Transmission
                </option>
                <option value="manual">Manual</option>
                <option value="auto">Automatic</option>
              </select>
              <select className={styles.select} id="country-select">
                <option value="" disabled selected>
                  Country
                </option>
                <option value="ghana">Ghana</option>
                <option value="ghanay">Ghana</option>
              </select>
            </div>
            <button className={styles.submit_button}>Search</button>
            <div className={styles.advanced_search_container}>
              <div className={styles.advance_search_text}>Advanced search</div>
              <svg
              className={styles.advance_search_icon}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.207 7.5L9.85403 11.854L9.14603 11.147L12.293 8L1.00003 8V7L12.293 7L9.14603 3.854L9.85403 3.146L14.207 7.5Z"
                  fill="#4C4C4C"
                />
              </svg>
            </div>
          </form>
        </div>
        <div className={styles.header_cover_container}>
          <div className={styles.header_container}>
            <div className={styles.header}>
              Experience Excellence on Every Road.
            </div>
            <div className={styles.subtext}>
              Quality cars, unbeatable prices, and exceptional service. Find the
              perfect vehicle from our extensive collection of new and pre-owned
              cars
            </div>
          </div>
          <div className={styles.cover_image_container}>
            <div className={styles.image_container}>
              <img src="" alt="current cover image" />
            </div>
            <div className={styles.select_image_container}>
              <img src="" alt="current cover image" />
              <img src="" alt="current cover image" />
              <img src="" alt="current cover image" />
              <img src="" alt="current cover image" />
              <img src="" alt="current cover image" />
            </div>
            <div className={styles.advertisement}>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
