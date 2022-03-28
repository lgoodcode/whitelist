import {
   Home as HomeIcon,
   School as SchoolIcon,
   ShoppingBag as ShoppingBagIcon,
   LocalPhone as LocalPhoneIcon,
   ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material'
import type { SvgIconProps } from '@mui/material'

import Home from 'pages/Home'
// import Courses from 'pages/Courses'
import Products from 'pages/Products'
import Contact from 'pages/Contact'
import PageNotFound from 'pages/PageNotFound'
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
      Icon: SchoolIcon,
      name: 'Courses',
      path: '/courses',
      nav: 'both',
      // Component: Courses
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
      Component: Contact
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
