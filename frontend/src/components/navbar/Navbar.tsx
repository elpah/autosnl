import React from 'react'
import { DesktopNav } from './desktop/DesktopNav'
import { MobileNav } from './mobile/MobileNav'

import styles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styles.container}>
    <MobileNav/>
    <DesktopNav/>
    </div>
  )
}

export default Navbar