import { AppBar, Box, Container, Toolbar, IconButton, Badge } from '@mui/material'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { open, selectNumItems } from 'app/cart/cartSlice'
import Image from 'components/Image'
import NavButton from './NavButton'
import logo from 'assets/img/logo/desktop-logo-fill.svg'
import type { NavbarProps } from './Navbar'

function NavbarDesktop({
   routes,
   scrolled,
   visible,
   scrollHeight = 80,
   ...rest
}: NavbarProps) {
   const navigate = useNavigate()
   const numItems = useAppSelector(selectNumItems)
   const dispatch = useAppDispatch()
   const handleCartOpen = () => dispatch(open())

   return (
      <AppBar
         position="relative"
         color="transparent"
         sx={(theme) => ({
            display: {
               xs: 'none',
               lg: 'block'
            },
            top: visible ? 0 : -scrollHeight,
            boxShadow: scrolled ? 3 : 0,
            // background: scrolled
            //    ? 'linear-gradient(90deg, #131313 25%, #2e2e2e)'
            //    : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : undefined,
            transition: 'all 0.3s ' + theme.transitions.easing.easeInOut
         })}
         {...rest}
      >
         <Container>
            <Toolbar disableGutters sx={{ height: 80 }}>
               <Box display="flex" width="100%" flexDirection="row" alignItems="center">
                  <Box
                     display="flex"
                     aria-label="Whitelist"
                     onClick={() => navigate('')}
                     sx={{
                        '&:hover': {
                           cursor: 'pointer'
                        }
                     }}
                  >
                     <Image
                        skeleton
                        src={logo}
                        alt="Whitelist"
                        height={50}
                        sx={(theme) => ({
                           filter: `brightness(${
                              theme.palette.mode === 'dark' ? 100 : 0
                           })`
                        })}
                     />
                  </Box>

                  <Box component="nav" ml="auto">
                     {routes.map(
                        (route, i) =>
                           route.nav.match(/desktop|both/) && (
                              <NavButton
                                 key={i}
                                 name={route.name}
                                 path={route.path}
                                 aria-label={route.name}
                              />
                           )
                     )}
                     <IconButton
                        aria-label="cart"
                        onClick={handleCartOpen}
                        sx={{
                           '::before': {
                              position: 'absolute',
                              content: '""',
                              top: 0,
                              right: 0,
                              left: 0,
                              bottom: 0,
                              zIndex: -1,
                              background:
                                 'linear-gradient(0deg, rgba(67, 40, 183, 0.08), rgb(0 180 230 / 45%))',
                              transition: 'opacity 0.5s',
                              borderRadius: 4,
                              opacity: 0
                           },
                           ':hover::before': {
                              opacity: 1
                           }
                        }}
                     >
                        <Badge badgeContent={numItems} color="error">
                           <ShoppingCartIcon
                           // sx={{
                           //    fill: '#5cfff3'
                           // }}
                           />
                        </Badge>
                     </IconButton>
                  </Box>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default NavbarDesktop
