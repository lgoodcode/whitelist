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
import ItemPage from 'pages/Item'

export interface Route {
   name: string
   path: string
   nav: boolean
   Component: () => JSX.Element
   Icon?: (props: SvgIconProps) => JSX.Element
}

const routes: Route[] = [
   {
      Icon: HomeIcon,
      name: 'Home',
      path: '/',
      nav: true,
      Component: Home
   },
   {
      Icon: MiscellaneousServicesIcon,
      name: 'Services',
      path: '/services',
      nav: true,
      // Component: Services
      Component: PageNotFound
   },
   {
      Icon: ShoppingBagIcon,
      name: 'Products',
      path: '/products',
      nav: true,
      Component: Products
   },
   {
      name: 'Item Page',
      path: '/products/:name',
      nav: false,
      Component: ItemPage
   },
   {
      Icon: LocalPhoneIcon,
      name: 'Contact Us',
      path: '/contact',
      nav: true,
      // Component: Contact
      Component: PageNotFound
   },
   {
      name: 'Page Not Found',
      path: '*',
      nav: false,
      Component: PageNotFound
   }
]

export default routes
