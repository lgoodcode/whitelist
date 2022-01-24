import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Grid,
  Typography,
  Link
} from '@mui/material'

import NavButton from 'components/NavButton'
import type { NavbarProps } from './index'

function NavbarDesktop({ logo, navigation, ...rest }: NavbarProps) {
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
            <Typography component={Link} href="/" aria-label="Whitelist Brand">
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
            </Box>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavbarDesktop
