import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { ShortFade, SlideFade } from 'components/SlideFade'

import bgImage from 'assets/img/landing-particles.jpg'
import landingBlockImage from 'assets/img/blocks-server.svg'

const landingStyles = {
   backgroundImage: `url(${bgImage})`,
   backgroundSize: 'cover',
   backgroundRepeat: 'repeat-y',
   backgroundAttachment: 'fixed',
   '@keyframes animate': {
      from: {
         backgroundPositionY: '0'
      },
      to: {
         backgroundPositionY: '-10000px'
      }
   },
   animation: 'animate 500s linear infinite alternate'
}

function HomeLanding() {
   return (
      <Box
         component="section"
         sx={{
            backgroundImage: 'linear-gradient(180deg, #253380 0%, rgba(61,63,199,0) 100%)'
         }}
      >
         <Box display="flex" height="100vh" sx={landingStyles}>
            <Container sx={{ mt: 24 }}>
               <Grid
                  container
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
               >
                  <Grid item xs={12} lg={6}>
                     <SlideFade in direction="right">
                        <Typography
                           variant="h2"
                           letterSpacing="-0.05em"
                           fontFamily="Titillium Web"
                        >
                           Your go-to Helium Center
                        </Typography>
                     </SlideFade>

                     <SlideFade mt={4} delay={300}>
                        <Typography
                           color="text.primary"
                           lineHeight="1.75"
                           fontWeight="regular"
                        >
                           We provide quality cryptocurrency consultation and mining
                           equipment installation services. If you're interested in
                           investing the ever growing blockhain industry whether it is
                           through long-term holding, similar to stocks, or mining
                           equipment to generate passive income, we are your go-to
                           solution.
                        </Typography>
                     </SlideFade>

                     <SlideFade mt={4} delay={500}>
                        <Box>
                           <Button
                              variant="contained"
                              color="secondary"
                              size="large"
                              sx={{
                                 px: 4,
                                 py: 1.5,
                                 letterSpacing: '0.075em',
                                 fontFamily: 'Titillium Web',
                                 fontWeight: 'bold'
                              }}
                           >
                              Get Started
                           </Button>
                        </Box>
                     </SlideFade>
                  </Grid>

                  <Grid item lg={5}>
                     <ShortFade direction="up" duration={1200}>
                        <Box>
                           <img width="100%" src={landingBlockImage} />
                           <Box display="none">
                              <a href="https://www.freepik.com/vectors/technology">
                                 Technology vector created by fullvector - www.freepik.com
                              </a>
                           </Box>
                        </Box>
                     </ShortFade>
                  </Grid>
               </Grid>
            </Container>
         </Box>
      </Box>
   )
}

export default HomeLanding
