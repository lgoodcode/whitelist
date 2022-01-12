import { BiHome, BiShoppingBag } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'

// Navigation info to map to elements
const navigation = [
  { icon: BiHome, name: 'Home', href: '/', current: true },
  { icon: BiShoppingBag, name: 'Shop', href: '#about', current: false },
  { icon: BsTelephone, name: 'Contact', href: '#contact', current: false }
]

export default navigation
