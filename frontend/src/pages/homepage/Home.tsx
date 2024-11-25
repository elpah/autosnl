import React from "react";
import styles from "./home.module.scss";
import { HomeSection } from "../../components/home-section/HomeSection";
import { WhyCard } from "../../components/why-card/WhyCard";

import homeCover from "../../assets/images/cover_images/home_cover.png";
import coverSelected from "../../assets/images/home_images/current_selection_placeholder.png";
import iconNext from "../../assets/images/home_images/icon_next.png";
import iconPrevious from "../../assets/images/home_images/icon_previous.png";
import advert from "../../assets/images/home_images/advert.png";

import popularNissan from "../../assets/images/popular_brands/popular_nissan.png";
import qualityAssurance from "../../assets/images/why_card_images/quality_assurance.png";
import matchRequirement from "../../assets/images/why_card_images/match_requirement.png";
import varietyOptions from "../../assets/images/why_card_images/variety_options.png";
import usefulSuggest from "../../assets/images/why_card_images/useful_suggest.png";
import bestRate from "../../assets/images/why_card_images/best_rate.png";
import greatOffers from "../../assets/images/why_card_images/great_offers.png";
import { Delivery } from "../../components/delivery-section/Delivery";

export const Home = () => {
  const whys = [
    {
      title: "Quality Assurance",
      paragraph:
        "Our cars undergo rigorous inspections and come with detailed history reports. Drive with confidence knowing your vehicle meets the highest safety and performance standards.",
      image: `${qualityAssurance}`,
    },
    {
      title: "Match Requirement",
      paragraph:
        "Our diverse inventory includes something for everyone. Easily find the perfect vehicle by filtering by make, model, year, price, and more.",
      image: `${matchRequirement}`,
    },
    {
      title: "A variety of Options",
      paragraph:
        "Our extensive inventory includes a wide range of vehicles—from compact cars and sedans to SUVs and trucks. Find the perfect match for your needs and preferences with ease.",
      image: `${varietyOptions}`,
    },

    {
      title: "Useful Suggestions",
      paragraph:
        "Our diverse inventory includes something for everyone. Easily find the perfect vehicle by filtering by make, model, year, price, and more.",
      image: `${usefulSuggest}`,
    },
    {
      title: "Best rate in the Market",
      paragraph:
        "We offer competitive pricing with no hidden fees. Enjoy the best deals and flexible financing options to make your dream car affordable.",
      image: `${bestRate}`,
    },
    {
      title: "Great Offers",
      paragraph:
        "Benefit from our exclusive deals and promotions. Stay updated with our latest offers to maximize your savings on your next car purchase.",
      image: `${greatOffers}`,
    },
  ];
  return (
    <div className={styles.home_container}>
      <div className={styles.cover_container}>
        <div className={styles.form_container}>
          <form className={styles.form}>
            <div className={styles.form_header}>Find your right Car</div>
            <h1 className={styles.button_container}>
              <button className={styles.used_button}>Used Cars</button>
              <button className={styles.damaged_button}>Damaged Cars</button>
            </h1>
            <div className={styles.select_container}>
              <select className={styles.select} >
                <option value="" disabled>
                  Brand
                </option>
                <option value="toyota">Toyota</option>
                <option value="toyota">Toyota</option>
              </select>
              <select className={styles.select}>
                <option value="model" disabled>
                  Model
                </option>
                <option value="Camry">Camry</option>
                <option value="Camry">Camry</option>
              </select>
              <select className={styles.select}>
                <option value="" disabled>
                  ERD
                </option>
                <option value="erd">erd</option>
                <option value="erd">erd</option>
              </select>
              <select className={styles.select}>
                <option value="" disabled>
                  Fuel
                </option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
              </select>
              <select className={styles.select}>
                <option value="" disabled>
                  Transmission
                </option>
                <option value="manual">Manual</option>
                <option value="auto">Automatic</option>
              </select>
              <select className={styles.select}>
                <option value="" disabled>
                  Country
                </option>
                <option value="ghana">Ghana</option>
                <option value="ghana">Ghana</option>
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.207 7.5L9.85403 11.854L9.14603 11.147L12.293 8L1.00003 8V7L12.293 7L9.14603 3.854L9.85403 3.146L14.207 7.5Z"
                  fill="#4C4C4C"
                />
              </svg>
            </div>
          </form>
        </div>
        <div className={styles.header_cover_container}>
          <div className={styles.header_container}>
            <h2 className={styles.header}>
              Experience Excellence on Every Road.
            </h2>
            <p className={styles.subtext}>
              Quality cars, unbeatable prices, and exceptional service. Find the
              perfect vehicle from our extensive collection of new and pre-owned
              cars
            </p>
          </div>
          <div className={styles.cover_image_container}>
            <div className={styles.image_container}>
              <img
                className={styles.current_image}
                src={homeCover}
                alt="current cover image"
              />
            </div>
            <div className={styles.select_image_container}>
              <div className={styles.icon_container}>
                <img
                  className={styles.icon}
                  src={iconPrevious}
                  alt="previous icon"
                />
              </div>
              <img className={styles.opacity} src={coverSelected} alt="current cover image" />
              <img  className={styles.opacity} src={coverSelected} alt="current cover image" />
              <img src={coverSelected} alt="current cover image" />
              <img className={styles.opacity}  src={coverSelected} alt="current cover image" />
              {/* <img className={styles.opacity}  src={coverSelected} alt="current cover image" /> */}
              {/* <img className={styles.opacity}  src={coverSelected} alt="current cover image" /> */}

              <div className={styles.icon_container}>
                <img className={styles.icon} src={iconNext} alt="next icon" />
              </div>
            </div>
            <div className={styles.advertisement_container}>
              <img  className={styles.advert_image} src={advert} alt="advert image placeholder" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sections}>
        <HomeSection title="Recommended cars for you" />
        <HomeSection title="Trusted used cars by budget" />
        <div className={styles.popular_container}>
          <div className={styles.popular_header_container}>
          <h3 className={styles.popular_header}>Popular Brands</h3>

          </div>
          <div className={styles.popular_images_cover_container}>
          <div className={styles.popular_images_container}>
            <img src={popularNissan} alt="Popular brands icon" />
            <img src={popularNissan} alt="Popular brands icon" />
            <img src={popularNissan} alt="Popular brands icon" />
            <img src={popularNissan} alt="Popular brands icon" />
          </div>
          </div>
        </div>
        <HomeSection title="Damaged Cars" />
      </div>
      <section className={styles.why_section}>
        <h3 className={styles.why_header}>Why ZaurAutos</h3>
        <div className={styles.why_card_container}>
          {whys.map((why, index) => (
            <WhyCard key={index} {...why} />
          ))}
        </div>
      </section>
      <Delivery />
    </div>
  );
};
