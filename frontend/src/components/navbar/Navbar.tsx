import React from 'react'
import { DesktopNav } from './desktop/DesktopNav'
import { MobileNav } from './mobile/MobileNav'

export const Navbar = () => {
  return (
    <>
    <MobileNav/>
    <DesktopNav/>
    </>
  )
}
