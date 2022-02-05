import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import routes from 'routes'
import type { Route } from 'routes'

export interface NavbarProps {
   routes: Route[]
}

function Navbar() {
   return (
      <>
         <NavbarDesktop routes={routes} />
         <NavbarMobile routes={routes} />
      </>
   )
}

export default Navbar
