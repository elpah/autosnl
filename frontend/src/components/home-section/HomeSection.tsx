import React, { useState } from "react";
import styles from "./home-section.module.scss";
import CarCard from "../car-card/CarCard";

type SectionHomeProps = {
  title: string;
  selectedVehicleType: string;
  setSelectedVehicleType: (type: string) => void;
};

interface VehicleType {
  value: string;
  label: string;
}

const vehicleTypes: VehicleType[] = [
  { value: "passenger", label: "Passengers cars" },
  { value: "commercial", label: "Commercial vehicle" },
  { value: "campers", label: "Campers" },
  { value: "caravans", label: "Caravans" },
  { value: "trucks", label: "Trucks" },
  { value: "trailers", label: "Trailers" },
  { value: "scooters", label: "Scooters" },
  { value: "cab", label: "Cab" },
  { value: "bus", label: "Bus" },
];

export const HomeSection = ({
  title,
  selectedVehicleType,
  setSelectedVehicleType,
}: SectionHomeProps) => {
  const vehicleTypes = [
    { value: "passenger", label: "Passengers cars" },
    { value: "commercial", label: "Commercial vehicle" },
    { value: "campers", label: "Campers" },
    { value: "caravans", label: "Caravans" },
    { value: "trucks", label: "Trucks" },
    { value: "trailers", label: "Trailers" },
    { value: "scooters", label: "Scooters" },
    { value: "cab", label: "Cab" },
    { value: "bus", label: "Bus" },
  ];
  return (
    <section className={styles.section_container}>
      <div className={styles.section_header}>{title}</div>
      <div className={styles.section_sub_container}>
        <div className={styles.section_items_container}>
          {vehicleTypes.map((vehicle) => (
            <div
              key={vehicle.value}
              onClick={() => setSelectedVehicleType(vehicle.value)}
              className={`${styles.section_item} ${
                selectedVehicleType === vehicle.value ? styles.selected : ""
              }`}
            >
              {vehicle.label}
            </div>
          ))}
        </div>
        <div className={styles.car_container}>
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </section>
  );
};
