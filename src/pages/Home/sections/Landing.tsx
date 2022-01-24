import { Box, Button, Container, Stack, Typography } from '@mui/material'

import bgImage from 'assets/img/home-landing.jpg'

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
      <Container sx={{ mt: 10 }}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box
            p={3}
            my="auto"
            borderRadius={2}
            maxWidth="sm"
            height="fit-content"
            bgcolor="background.paper"
            boxShadow={10}
          >
            <Typography variant="h2" color="white" fontWeight="bold">
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
            <Typography variant="body1" color="white" mt={3} lineHeight="1.75">
              We provide quality cryptocurrency consultation and mining
              equipment installation services. If you're interested in investing
              the ever growing blockhain industry whether it is through
              long-term holding, similar to stocks, or mining equipment to
              generate passive income, we are your go-to solution.
            </Typography>
            <Stack mt={4} flexDirection={{ xs: 'column', md: 'row' }}>
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
        </Box>
      </Container>
    </Box>
  )
}

export default Landing
