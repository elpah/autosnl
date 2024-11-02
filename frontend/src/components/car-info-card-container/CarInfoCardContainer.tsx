import React from 'react'

import styles from "./car-info-card-container.module.scss"
import { CarInfoCard } from '../car_info-card/CarInfoCard'

const CarInfoCardContainer = () => {
  return (
    <div className={styles.car_info_cards_container}>
          <CarInfoCard bg={true} />
          <CarInfoCard bg={true} />
          <CarInfoCard bg={true} />
          <CarInfoCard bg={true} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
          <CarInfoCard bg={false} />
        </div>
  )
}

export default CarInfoCardContainer