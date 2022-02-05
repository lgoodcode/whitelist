import {
   Home as HomeIcon,
   MiscellaneousServices as MiscellaneousServicesIcon,
   ShoppingBag as ShoppingBagIcon,
   LocalPhone as LocalPhoneIcon,
   ShoppingCart as ShoppingCartIcon
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
   nav: 'desktop' | 'mobile' | 'both' | 'none'
   Component: () => JSX.Element
   Icon?: (props: SvgIconProps) => JSX.Element
}

const routes: Route[] = [
   {
      Icon: HomeIcon,
      name: 'Home',
      path: '/',
      nav: 'both',
      Component: Home
   },
   {
      Icon: MiscellaneousServicesIcon,
      name: 'Services',
      path: '/services',
      nav: 'both',
      // Component: Services
      Component: PageNotFound
   },
   {
      Icon: ShoppingBagIcon,
      name: 'Products',
      path: '/products',
      nav: 'both',
      Component: Products
   },
   {
      name: 'Item Page',
      path: '/products/:name',
      nav: 'none',
      Component: ItemPage
   },
   {
      Icon: LocalPhoneIcon,
      name: 'Contact Us',
      path: '/contact',
      nav: 'both',
      // Component: Contact
      Component: PageNotFound
   },
   {
      Icon: ShoppingCartIcon,
      name: 'Cart',
      path: '/cart',
      nav: 'mobile',
      Component: PageNotFound
   },
   {
      name: 'Checkout',
      path: '/checkout',
      nav: 'none',
      Component: PageNotFound
   },
   {
      name: 'Page Not Found',
      path: '*',
      nav: 'none',
      Component: PageNotFound
   }
]

export default routes
