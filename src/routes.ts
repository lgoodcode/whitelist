import {
   Home as HomeIcon,
   MiscellaneousServices as MiscellaneousServicesIcon,
   ShoppingBag as ShoppingBagIcon,
   LocalPhone as LocalPhoneIcon
} from '@mui/icons-material'
import type { SvgIconProps } from '@mui/material'

import Home from 'pages/Home'
// import Services from 'pages/Services'
import Products from 'pages/Products'
// import Contact from 'pages/Contact'
import PageNotFound from 'pages/404'

export interface Route {
   name: string
   path: string
   Component: () => JSX.Element
   Icon: (props: SvgIconProps) => JSX.Element
}

const routes: Route[] = [
   {
      Icon: HomeIcon,
      name: 'Home',
      path: '/',
      Component: Home
   },
   {
      Icon: MiscellaneousServicesIcon,
      name: 'Services',
      path: '/services',
      // Component: Services
      Component: PageNotFound
   },
   {
      Icon: ShoppingBagIcon,
      name: 'Products',
      path: '/products',
      Component: Products
   },
   {
      Icon: LocalPhoneIcon,
      name: 'Contact Us',
      path: '/contact',
      // Component: Contact
      Component: PageNotFound
   }
]

export default routes
