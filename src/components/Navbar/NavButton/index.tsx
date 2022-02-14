import { Button, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import type { SxProps, Theme } from '@mui/material/styles'

const styles = (active: boolean): SxProps<Theme> => ({
   m: 1,
   px: 2,
   background: 'transparent',
   borderBottom: `3px solid ${active ? '#5cfff3' : 'transparent'}`,
   transition: 'background 0.3s',

   '&:hover': {
      background: 'linear-gradient(0deg, rgba(67, 40, 183, 0.08), rgb(0 180 230 / 33%))',
      borderBottomColor: '#5cfff3'
   }
})

function NavButton({ name, path, ...rest }: { name: string; path: string }) {
   const navigate = useNavigate()
   const { pathname } = useLocation()
   const active = pathname === path

   return (
      <Button variant="text" sx={styles(active)} onClick={() => navigate(path)} {...rest}>
         <Typography
            fontSize="1.15rem"
            fontWeight={700}
            textTransform="capitalize"
            fontFamily="Titillium Web"
            sx={{
               background: 'linear-gradient(90deg, #00b4e6, #5cfff3)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent'
            }}
         >
            {name}
         </Typography>
      </Button>
   )
}

export default NavButton
