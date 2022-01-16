import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography
} from '@mui/material'

import { MailOutlineRounded as MailOutlineRoundedIcon } from '@mui/icons-material'

import bgImage from 'assets/img/landing.jpg'

function Landing() {
  return (
    <Box
      display="flex"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'revert'
      }}
    >
      <Container sx={{ mt: 8 }}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box
            p={3}
            my="auto"
            borderRadius={2}
            maxWidth="sm"
            height="fit-content"
            bgcolor="background.paper"
          >
            <Typography
              variant="h2"
              color="white"
              fontWeight="bold"
              className="tracking-tighter md:tracking-normal"
            >
              Whitelist
            </Typography>
            <Typography
              variant="h2"
              fontWeight="bold"
              letterSpacing="-0.05em"
              color="goldenrod"
            >
              We Train Whales
            </Typography>
            <Typography variant="body1" color="white" mt={2}>
              We provide quality cryptocurrency consultation and mining
              equipment installation services. If you're interested in investing
              the ever growing blockhain industry whether it is through
              long-term holding, similar to stocks, or mining equipment to
              generate passive income, we are your go-to solution!
            </Typography>
            <Stack mt={2} flexDirection={{ xs: 'column', md: 'row' }}>
              <Button variant="contained">Get Started</Button>
              <Button
                variant="outlined"
                color="info"
                sx={{
                  ml: { md: 2 },
                  mt: {
                    xs: 2,
                    md: 0
                  }
                }}
              >
                Live Demo
              </Button>
            </Stack>
          </Box>
          <Box
            p={3}
            maxWidth={400}
            borderRadius={2}
            bgcolor="background.paper"
            display={{
              xs: 'none',
              md: 'flex'
            }}
            flexDirection="column"
            alignItems="center"
          >
            <Avatar variant="rounded" sx={{ m: 1, bgcolor: 'goldenrod' }}>
              <MailOutlineRoundedIcon />
            </Avatar>
            <Typography variant="h5">Get a Quote</Typography>
            <Box mt={2}>
              <Typography variant="body2" textAlign="start">
                Send us your contact info and an optional short message on what
                you're inquiring about and we'll get back to you as soon as
                possible!
              </Typography>
            </Box>
            <Box mt={4} component="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="fName"
                    label="First Name"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lName"
                    label="Last Name"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    id="email"
                    label="Email Address"
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    variant="filled"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box width="100%" mt={4}>
              <Button fullWidth color="secondary" variant="contained">
                Get a Quote
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Landing
