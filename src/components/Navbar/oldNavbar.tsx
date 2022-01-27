import { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import MobileMenu from './MobileMenu'
import Brand from '../../assets/brand.jpg'
import Logo from '../../assets/logo.png'
import routes from 'routes'
import IconButton from '@mui/material/IconButton'

const classNames = (...strings: string[]) => strings.join(' ')

export default function Navbar() {
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
      <>
         <nav
            className={classNames(
               'navbar',
               scrolled
                  ? 'bg-raisinBlack/70 shadow-[0_2px_10px] shadow-gray-900 lg:py-[0]'
                  : '',
               'fixed min-w-full z-30 px-4 py-4 lg:py-8 sm:px-8 md:px-16 lg:px-24 transition-all duration-500'
            )}
         >
            <div className="relative flex items-center justify-between md:justify-end">
               <a href="/" className="pl-4 lg:pl-0">
                  <span className="sr-only">Whitelist Brand</span>
                  {/* Brand image */}
                  <img
                     className="h-20 w-auto hidden md:block"
                     src={Brand}
                     alt="Whitelist"
                  />
                  {/* Mobile logo */}
                  <img src={Logo} className="h-12 w-auto md:hidden" alt="Whitelist" />
               </a>
               <div className="flex items-center flex-grow flex-shrink-0 lg:mr-auto lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full lg:w-auto">
                     <div className="md:hidden ml-auto">
                        <IconButton
                           onClick={() => setOpen(!open)}
                           sx={{ color: 'text.primary' }}
                        >
                           <Hamburger size={24} toggled={open} />
                        </IconButton>
                     </div>
                  </div>
               </div>
               <div className="navbarItems hidden md:block md:ml-10 md:pr-4 md:space-x-2">
                  {routes.map((item) => (
                     <a
                     // key={item.name}
                     // className={`${item.current ? 'bg-gray-300/40' : ''} ${
                     //   !scrolled ? 'py-4' : ''
                     // } btn text-white px-4 hover:bg-gray-300/40 transition-300`}
                     // href={item.href}
                     // aria-current={item.current ? 'page' : undefined}
                     >
                        {item.name}
                     </a>
                  ))}
               </div>
            </div>
         </nav>

         <MobileMenu
            onOutsideClick={() => setOpen(false)}
            navigation={routes}
            open={open}
         />
      </>
   )
}
