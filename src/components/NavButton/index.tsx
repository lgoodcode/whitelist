import { Button } from '@mui/material'

import type { Theme } from '@mui/material/styles'
// import type { SxProps, Theme } from '@mui/material/styles'

interface NavButtonProps {
  name: string
  href: string
  active?: boolean
}

// const styles: SxProps<Theme> = (theme: Theme) => ({
//   px: 2,
//   color: 'white',
//   fontSize: theme.typography.h6.fontSize,
//   textTransform: 'capitalize',
//   '&:hover': {
//     background: 'rgb(156 163 175 / 0.4)'
//   }
// })

function NavButton({ name, href, active = false, ...rest }: NavButtonProps) {
  return (
    <Button
      href={href}
      variant="text"
      sx={(theme: Theme) => ({
        px: 2,
        m: 1,
        color: 'white',
        fontSize: theme.typography.body1.fontSize,
        textTransform: 'capitalize',
        bgcolor: active ? 'rgb(156 163 175 / 0.4)' : 'transparent',
        '&:hover': {
          bgcolor: active ? 'rgb(156 163 175 / 0.5)' : 'rgb(156 163 175 / 0.4)'
        }
      })}
      {...rest}
    >
      {name}
    </Button>
  )
}

export default NavButton
