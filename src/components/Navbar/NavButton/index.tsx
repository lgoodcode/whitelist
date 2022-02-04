import { Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import type { SxProps, Theme } from '@mui/material/styles'

const styles = (active: boolean): SxProps<Theme> => ({
   m: 1,
   px: 2,
   color: 'text.primary',
   fontSize: 'typography.body1.fontSize',
   textTransform: 'capitalize',
   bgcolor: active ? 'rgb(156 163 175 / 0.4)' : 'transparent',

   '&:hover': {
      bgcolor: active ? 'rgb(156 163 175 / 0.5)' : 'rgb(156 163 175 / 0.4)'
   }
})

function NavButton({ name, path, ...rest }: { name: string; path: string }) {
   const navigate = useNavigate()
   const { pathname } = useLocation()
   const active = pathname === path

   return (
      <Button variant="text" sx={styles(active)} onClick={() => navigate(path)} {...rest}>
         {name}
      </Button>
   )
}

export default NavButton
