import { Button, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import type { SxProps, Theme } from '@mui/material/styles'

const styles = (active: boolean): SxProps<Theme> => ({
   m: 1,
   px: 2,
   borderBottom: `3px solid ${active ? '#5cfff3' : 'transparent'}`,

   ':hover': {
      borderBottomColor: '#5cfff3'
   },
   '::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      zIndex: -1,
      background: 'linear-gradient(0deg, rgba(67, 40, 183, 0.08), rgb(0 180 230 / 33%))',
      transition: 'opacity 0.3s',
      borderRadius: 1,
      opacity: 0
   },
   ':hover::before': {
      opacity: 1
   }
})

function NavButton({ name, path, ...rest }: { name: string; path: string }) {
   const navigate = useNavigate()
   const { pathname } = useLocation()
   const active = pathname === path

   return (
      <Button variant="text" sx={styles(active)} onClick={() => navigate(path)} {...rest}>
         <Typography
            color="text.primary"
            fontWeight={500}
            fontSize={18}
            textTransform="capitalize"
            letterSpacing="0.05em"
            fontFamily="Titillium Web"
            // sx={{
            //    background: 'linear-gradient(90deg, #00b4e6, #5cfff3)',
            //    WebkitBackgroundClip: 'text',
            //    WebkitTextFillColor: 'transparent'
            // }}
         >
            {name}
         </Typography>
      </Button>
   )
}

export default NavButton
