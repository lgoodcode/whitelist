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

function NavbarDesktop({ logo, navigation, scrolled, ...rest }: NavbarProps) {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        transition: 'ease-out 0.5s all',
        boxShadow: scrolled ? '' : 'none',
        bgcolor: scrolled ? 'rgb(33 33 33 / 80%)' : ''
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
                <NavButton
                  key={i}
                  name={route.name}
                  href={route.href}
                  active={route.current}
                  aria-selected={route.current}
                />
              ))}
            </Box>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavbarDesktop
