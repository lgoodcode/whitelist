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

import { useNavigate } from 'react-router-dom'

import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'

import NavButton from 'components/NavButton'
import type { NavbarProps } from 'types'

function NavbarDesktop({ logo, navigation, ...rest }: NavbarProps) {
   const navigate = useNavigate()

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
                     aria-label="Whitelist Brand"
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
                        alt="Whitelist"
                     />
                  </Typography>
                  <Box ml="auto">
                     {navigation.map((route, i) => (
                        <NavButton key={i} name={route.name} href={route.href} />
                     ))}
                     <IconButton
                        aria-label="cart"
                        sx={{
                           '&:hover': {
                              bgcolor: 'rgb(156 163 175 / 0.4)'
                           }
                        }}
                     >
                        {/* TODO: Add state cart management */}
                        <Badge badgeContent={2} color="error">
                           <ShoppingCartIcon sx={{ color: 'white' }} />
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
