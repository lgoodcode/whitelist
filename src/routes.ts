import {
  Home as HomeIcon,
  MiscellaneousServices as MiscellaneousServicesIcon,
  ShoppingBag as ShoppingBagIcon,
  LocalPhone as LocalPhoneIcon
} from '@mui/icons-material'

import type { SvgIconProps } from '@mui/material/SvgIcon'

export interface NavItem {
  icon: (props: SvgIconProps) => JSX.Element
  name: string
  href: string
  current: boolean
}

const navigation: NavItem[] = [
  { icon: HomeIcon, name: 'Home', href: '/', current: true },
  {
    icon: MiscellaneousServicesIcon,
    name: 'Services',
    href: '#services',
    current: false
  },
  {
    icon: ShoppingBagIcon,
    name: 'Products',
    href: '#products',
    current: false
  },
  { icon: LocalPhoneIcon, name: 'Contact Us', href: '#contact', current: false }
]

export default navigation
