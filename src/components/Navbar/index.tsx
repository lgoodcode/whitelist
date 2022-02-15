import { useEffect, useState, useRef } from 'react'
import { Box } from '@mui/material'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import routes from 'routes'
import type { Route } from 'routes'

export interface NavbarProps {
   routes: Route[]
   scrolled: boolean
   visible?: boolean
   scrollHeight?: number
}

function Navbar() {
   const containerRef = useRef<HTMLDivElement>(null)
   const [visible, setVisible] = useState<boolean>(true)
   const [scrolled, setScrolled] = useState<boolean>(false)
   const [prevScrollPos, setPrevScrollPos] = useState<number>(0)
   const height = containerRef?.current?.clientHeight || 80
   const handleScroll = () => {
      setPrevScrollPos(window.scrollY)
      // Once scrolled the height of the navbar + 100 padding
      setScrolled(window.scrollY > height + 100)
      setVisible(
         window.scrollY <= height ||
            (prevScrollPos > window.scrollY && window.scrollY > 100)
      )
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [prevScrollPos, visible])

   return (
      <Box ref={containerRef} position="fixed" width="100%" zIndex={100}>
         <NavbarDesktop
            routes={routes}
            visible={visible}
            scrolled={scrolled}
            scrollHeight={containerRef?.current?.clientHeight}
         />
         <NavbarMobile
            routes={routes}
            visible={visible}
            scrolled={scrolled}
            scrollHeight={containerRef?.current?.clientHeight}
         />
      </Box>
   )
}

export default Navbar
