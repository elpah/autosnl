import React from "react";

import custumersatisfaction from "../../assets/images/about_images/custumersatisfaction.png";
import integrity from "../../assets/images/about_images/integrity.png";
import innovation from "../../assets/images/about_images/innovation.png";
import quality from "../../assets/images/about_images/quality.png";

import { Value } from "../../components/about-values/Value";
import { Delivery } from "../../components/delivery-section/Delivery";

import styles from "./about.module.scss";
const About: React.FC = () => {
  const values = [
    {
      image: `${quality}`,
      title: "Quality",
      text: "Every vehicle in our inventory is thoroughly inspected and maintained to meet the highest standards of safety and performance.",
    },
    {
      image: `${custumersatisfaction}`,
      title: "Customer Satisfaction",
      text: "Your satisfaction is our top priority. We go above and beyond to ensure you have a positive and stress-free experience.",
    },
    {
      image: `${integrity}`,
      title: "Integrity",
      text: "We believe in transparent and honest dealings. Our pricing is straightforward with no hidden fees, ensuring you get the best value.",
    },
    {
      image: `${innovation}`,
      title: "Innovation",
      text: "We are dedicated to staying at the forefront of the automotive industry, embracing the latest technologies and trends to bring you the best vehicles and services available.",
    },
  ];

  return (
    <div className={styles.about_container}>
      <div className={styles.cover}>
        <h1 className={styles.header}>About Us</h1>
        <p className={styles.header_subtext}>ZaurAutos Profile</p>
      </div>
      <div className={styles.body_container}>
        <div className={styles.body_part}>
          <h2 className={styles.body_part_header}>What We Are</h2>
          <p className={styles.body_part_text}>
            Welcome to ZaurAutos, where your journey to find the perfect car
            begins. With years of experience in the automotive industry, we are
            committed to providing exceptional service and a wide selection of
            high-quality vehicles to meet all your driving needs.We offer you to
            choose from a wide variety of car classes new high-quality vehicles
            meeting your needs and budget best. Buying a car for your business
            enterprise or vacation, we have a wide range of luxury, sports, and
            hybrid vehicles available to meet your every car rental need. Take
            your pick of a BMW, Ferrari, Lamborghini, Aston Martin, Tesla and
            more.
          </p>
        </div>
        <div className={styles.body_part}>
          <h2 className={styles.body_part_header}>Our Mission</h2>
          <p className={styles.body_part_text}>
            Our mission is simple: to make car buying a seamless and enjoyable
            experience. We strive to offer the best deals, unmatched quality,
            and outstanding customer service. Whether you're looking for a new
            or pre-owned vehicle, we aim to help you find the car of your dreams
            at a price you can afford.
          </p>
        </div>
      </div>
      <div className={styles.values}>
        <h2 className={styles.values_header}>Our Values</h2>
        <div className={styles.values_wrapper}>
        <div className={styles.values_sub_container}>
          {values.map((item, index) => (
            <Value
              key={index}
              title={item.title}
              image={item.image}
              text={item.text}
            />
          ))}
        </div>
        </div>
      </div>
      <Delivery/>
    </div>
  );
};

export default About;
