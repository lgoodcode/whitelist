import {
   AppBar,
   Box,
   Container,
   Toolbar,
   useScrollTrigger,
   Slide,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Divider,
   Fade
} from '@mui/material'

import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from 'assets/img/logo/logo-fill.svg'
import type { NavbarProps } from './index'

function NavbarMobile({ routes }: NavbarProps) {
   const [open, setOpen] = useState<boolean>(false)
   const navigate = useNavigate()
   const handleNavigate = (route: string) => () => {
      setOpen(false)
      navigate(route)
   }
   const handleClick = () => setOpen(!open)
   const trigger = useScrollTrigger({
      threshold: 0,
      disableHysteresis: true
   })

   return (
      <AppBar
         position="sticky"
         color="transparent"
         sx={{
            display: {
               xs: 'flex',
               lg: 'none'
            },
            bgcolor: '#253380',
            transition: 'all 0.3s ease-in-out',
            boxShadow: !trigger ? 'none' : undefined
         }}
      >
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <Box display="flex" width="100%" py={0.5}>
                  <Box display="flex" onClick={handleNavigate('/')}>
                     <img src={logo} alt="Whitelist" width={42} />
                  </Box>
                  <Box
                     display="flex"
                     ml="auto"
                     sx={{
                        '& .hamburger-react': {
                           WebkitTapHighlightColor: 'transparent'
                        }
                     }}
                  >
                     <Hamburger
                        label="menu"
                        toggled={open}
                        toggle={handleClick}
                        size={20}
                        duration={0.6}
                     />
                  </Box>
               </Box>
            </Toolbar>
         </Container>

         <Slide in={open} direction="down" timeout={400}>
            <Box
               top={55}
               position="absolute"
               bgcolor="#253380"
               zIndex={-1}
               height="calc(100vh - 55px)"
               width="100%"
            >
               <Box component="nav" mt={2}>
                  <List>
                     {routes.map(
                        (route, i) =>
                           route.nav.match(/mobile|both/) && (
                              <Fade
                                 key={route.path}
                                 in={open}
                                 timeout={800 + i * 100}
                                 unmountOnExit
                              >
                                 <Box>
                                    <Slide
                                       in={open}
                                       direction="right"
                                       timeout={800 + i * 100}
                                       unmountOnExit
                                    >
                                       <Box>
                                          <ListItem>
                                             <ListItemButton
                                                onClick={handleNavigate(route.path)}
                                             >
                                                <ListItemIcon>
                                                   {route.Icon && <route.Icon />}
                                                </ListItemIcon>
                                                <ListItemText primary={route.name} />
                                             </ListItemButton>
                                          </ListItem>
                                          <Divider variant="middle" component="li" />
                                       </Box>
                                    </Slide>
                                 </Box>
                              </Fade>
                           )
                     )}
                  </List>
               </Box>
            </Box>
         </Slide>
      </AppBar>
   )
}

export default NavbarMobile
