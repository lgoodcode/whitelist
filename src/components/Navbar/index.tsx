import { useEffect, useState } from 'react'

import { Box } from '@mui/material'

import NavbarDesktop from './NavbarDesktop'
// import NavbarMobile from './NavbarMobile'

import routes from 'routes'

import desktopLogo from '../../assets/brand.jpg'
// import mobileLogo from '../../assets/logo.png'

import type { NavItem } from 'routes'

export interface NavbarProps {
  logo: string
  navigation: NavItem[]
  scrolled: boolean
}

function Navbar() {
  // eslint-disable-next-line
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /**
   * Changes navbar background when scrolled
   */
  const navbarScrolled = (): void => setScrolled(window.scrollY >= 90)

  /**
   * Check if the page is already scrolled on load
   */
  useEffect(() => navbarScrolled, [])

  window.addEventListener('scroll', navbarScrolled)

  /**
   * Sets the overflow property on the body to "hidden" to prevent the screen from
   * scrolling while the mobile menu is open. The cleanup will ensure that if the
   * mobile menu isn't there, that the user can still scroll and use the page.
   */
  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]

    if (open) {
      html.classList.add('lock-scroll')
    } else {
      html.classList.remove('lock-scroll')
    }
    // Cleanup - makes sure the lock scroll is removed
    return () => html.classList.remove('lock-scroll')
  }, [open])

  return (
    <Box>
      <NavbarDesktop
        logo={desktopLogo}
        navigation={routes}
        scrolled={scrolled}
      />
    </Box>
  )
}

export default Navbar
