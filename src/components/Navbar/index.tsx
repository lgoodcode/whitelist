import { useEffect, useState } from 'react'
import { Box } from '@mui/material'

import routes from 'routes'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import desktopLogo from 'assets/brand.jpg'
import mobileLogo from 'assets/logo.png'

function Navbar() {
   // eslint-disable-next-line
   const [open, setOpen] = useState<boolean>(false)
   const [scrolled, setScrolled] = useState<boolean>(false)

   /**
    * Changes navbar background when scrolled
    */
   const navbarScrolled = () => setScrolled(window.scrollY >= 90)

   /**
    * Check if the page is already scrolled on load
    */
   useEffect(() => {
      navbarScrolled()
      return () => setScrolled(false)
   }, [])

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
      <>
         <Box display={{ xs: 'none', md: 'block' }}>
            <NavbarDesktop logo={desktopLogo} navigation={routes} />
         </Box>
         <Box display={{ xs: 'block', md: 'none' }}>
            <NavbarMobile logo={mobileLogo} navigation={routes} scrolled={scrolled} />
         </Box>
      </>
   )
}

export default Navbar
