import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
// import { useAppDispatch, useAppSelector } from 'app/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { open, close, selectIsOpen } from 'app/cart/cartSlice'

import routes from 'routes'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import type { NavItemProps } from 'routes'

const desktopLogo = '/desktop-logo-fill.svg'
const mobileLogo = '/logo-fill.svg'

export interface NavbarProps {
   logo: string
   routes: NavItemProps[]
   scrolled?: boolean
   cartOpen: boolean
   handleOpen: () => void
   handleClose: () => void
}

function Navbar() {
   const cartOpen = useSelector(selectIsOpen)
   const dispatch = useDispatch()
   const handleOpen = () => dispatch(open())
   const handleClose = () => dispatch(close())
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

      if (cartOpen) {
         html.classList.add('lock-scroll')
      } else {
         html.classList.remove('lock-scroll')
      }
      // Cleanup - makes sure the lock scroll is removed
      return () => html.classList.remove('lock-scroll')
   }, [cartOpen])

   return (
      <>
         <Box display={{ xs: 'none', md: 'block' }}>
            <NavbarDesktop
               logo={desktopLogo}
               routes={routes}
               cartOpen={cartOpen}
               handleOpen={handleOpen}
               handleClose={handleClose}
            />
         </Box>
         <Box display={{ xs: 'block', md: 'none' }}>
            <NavbarMobile
               logo={mobileLogo}
               routes={routes}
               cartOpen={cartOpen}
               scrolled={scrolled}
               handleOpen={handleOpen}
               handleClose={handleClose}
            />
         </Box>
      </>
   )
}

export default Navbar
