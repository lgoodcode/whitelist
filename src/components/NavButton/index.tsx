import { useLocation, useNavigate } from 'react-router-dom'

import { Button } from '@mui/material'

import type { SxProps, Theme } from '@mui/material/styles'

const styles = (active: boolean): SxProps<Theme> => ({
  px: 2,
  m: 1,
  color: 'white',
  fontSize: 'typography.body1.fontSize',
  textTransform: 'capitalize',
  bgcolor: active ? 'rgb(156 163 175 / 0.4)' : 'transparent',

  '&:hover': {
    bgcolor: active ? 'rgb(156 163 175 / 0.5)' : 'rgb(156 163 175 / 0.4)'
  }
})

function NavButton({ name, href, ...rest }: { name: string; href: string }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const active = pathname === href

  return (
    <Button
      variant="text"
      sx={styles(active)}
      onClick={() => navigate(href)}
      {...rest}
    >
      {name}
    </Button>
  )
}

export default NavButton
