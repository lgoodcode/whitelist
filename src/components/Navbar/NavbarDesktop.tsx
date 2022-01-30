import {
   AppBar,
   Box,
   Container,
   Toolbar,
   Grid,
   Typography,
   IconButton,
   Badge
} from '@mui/material'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

import NavButton from './NavButton/Desktop'
import type { NavbarProps } from './index'
import { useAppSelector } from 'app/hooks'
import { selectNumItems } from 'app/cart/cartSlice'

function NavbarDesktop({
   logo,
   routes,
   cartOpen,
   handleOpen,
   handleClose,
   ...rest
}: NavbarProps) {
   const navigate = useNavigate()
   const numItems = useAppSelector(selectNumItems)

   return (
      <AppBar
         position="absolute"
         sx={{
            boxShadow: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(3px)'
         }}
         {...rest}
      >
         <Container>
            <Toolbar disableGutters>
               <Grid container flexDirection="row" alignItems="center">
                  <Typography
                     aria-label="Whitelist"
                     onClick={() => navigate('/')}
                     sx={{
                        '&:hover': {
                           cursor: 'pointer'
                        }
                     }}
                  >
                     <img
                        style={{
                           height: 80,
                           width: 'auto'
                        }}
                        src={logo}
                        alt="Whitelist Brand"
                     />
                  </Typography>
                  <Box ml="auto">
                     {routes.map((route, i) => (
                        <NavButton key={i} name={route.name} href={route.href} />
                     ))}
                     <IconButton
                        aria-label="cart"
                        onClick={handleOpen}
                        sx={{
                           '&:hover': {
                              bgcolor: 'rgb(156 163 175 / 0.4)'
                           }
                        }}
                     >
                        <Badge badgeContent={numItems} color="error">
                           <ShoppingCartIcon sx={{ color: 'text.primary' }} />
                        </Badge>
                     </IconButton>
                  </Box>
               </Grid>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default NavbarDesktop
