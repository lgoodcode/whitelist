import type { SvgIconProps } from '@mui/material'

interface NavItemProps {
   icon: (props: SvgIconProps) => JSX.Element
   name: string
   href: string
}

export default NavItemProps
