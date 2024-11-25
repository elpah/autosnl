import React from "react";
import styles from "./home-section.module.scss";
import CarCard from "../car-card/CarCard";

type SectionHome ={
  title:string;
}
export const HomeSection = ({title}:SectionHome) => {
  return (
    <section className={styles.section_container}>
      <div className={styles.section_header}>{title}</div>
      <div className={styles.section_sub_container}>
        <div className={styles.section_items_container}>
          <div className={styles.section_items}>Passengers cars</div>
          <div className={styles.section_items}>Commercial vehicle </div>
          <div className={styles.section_items}> Campers </div>
          <div className={styles.section_items}>Caravans</div>
          <div className={styles.section_items}>Trucks</div>
          <div className={styles.section_items}>Trailers </div>
          <div className={styles.section_items}>Scooters</div>
          <div className={styles.section_items}>Cab </div>
          <div className={styles.section_items}>Bus </div>
        </div>
        <div className={styles.car_container}>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
         <CarCard/>
            <CarCard/>
            <CarCard/>
         
        </div>
      </div>
    </section>
  );
};
