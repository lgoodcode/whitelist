import { AppBar, Box, Container, Toolbar, IconButton, Badge } from '@mui/material'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
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
   const theme = useTheme()
   const navigate = useNavigate()
   const numItems = useAppSelector(selectNumItems)

   return (
      <AppBar
         position="absolute"
         sx={{
            boxShadow: 'none',
            background: 'transparent'
            // bgcolor: 'rgba(0, 0, 0, 0.15)',
            // backdropFilter: 'blur(3px)'
         }}
         {...rest}
      >
         <Container>
            <Toolbar disableGutters sx={{ height: 80 }}>
               <Box display="flex" width="100%" flexDirection="row" alignItems="center">
                  <Box
                     display="flex"
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
                           height: 50,
                           width: 'auto',
                           filter: `brightness(${
                              theme.palette.mode === 'dark' ? 100 : 0
                           })`
                        }}
                        src={logo}
                        alt="Whitelist"
                     />
                  </Box>

                  <Box ml="auto">
                     {routes.map((route, i) => (
                        <NavButton
                           key={i}
                           name={route.name}
                           href={route.href}
                           aria-label={route.name}
                        />
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
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default NavbarDesktop
