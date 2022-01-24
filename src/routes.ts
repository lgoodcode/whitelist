import {
   Home as HomeIcon,
   MiscellaneousServices as MiscellaneousServicesIcon,
   ShoppingBag as ShoppingBagIcon,
   LocalPhone as LocalPhoneIcon
} from '@mui/icons-material'

import type { NavItemProps } from 'assets/types'

const navigation: NavItemProps[] = [
   { icon: HomeIcon, name: 'Home', href: '/' },
   {
      icon: MiscellaneousServicesIcon,
      name: 'Services',
      href: '/services'
   },
   {
      icon: ShoppingBagIcon,
      name: 'Products',
      href: '/products'
   },
   { icon: LocalPhoneIcon, name: 'Contact Us', href: '/contact' }
]

export default navigation
