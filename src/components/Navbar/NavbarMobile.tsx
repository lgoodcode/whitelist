import { AppBar, Box, Container, Toolbar, Grid } from '@mui/material'

import NavButton from 'components/Navbar/NavButton/Desktop'
import type { NavbarProps } from './index'

// TODO: finish this
// eslint-disable-next-line
function NavbarMobile({ logo, routes, scrolled }: NavbarProps) {
   return (
      <AppBar position="absolute" color="transparent" sx={{ boxShadow: 'none' }}>
         <Container>
            <Toolbar disableGutters>
               <Grid container flexDirection="row" alignItems="center">
                  <a href="/">
                     <span className="sr-only">Whitelist Brand</span>
                     <img src={logo} alt="Whitelist" />
                  </a>
                  <Box ml="auto">
                     {routes.map((route, i) => (
                        <NavButton key={i} name={route.name} href={route.href} />
                     ))}
                  </Box>
               </Grid>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default NavbarMobile
