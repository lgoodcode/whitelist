import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import routes from 'routes'
import type { Route } from 'routes'

const desktopLogo = 'logo/desktop-logo-fill.svg'
const mobileLogo = 'logo/logo-fill.svg'

export interface NavbarProps {
   logo: string
   routes: Route[]
}

function Navbar() {
   return (
      <>
         <NavbarDesktop logo={desktopLogo} routes={routes} />
         <NavbarMobile logo={mobileLogo} routes={routes} />
      </>
   )
}

export default Navbar
