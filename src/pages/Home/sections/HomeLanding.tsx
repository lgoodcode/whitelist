import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { SectionHeader } from 'components/Section'
import Image from 'components/Image'
import ScrollAnimation from 'components/ScrollAnimation'
import bgImage from 'assets/img/landing/particles.jpg'
import landingBlockImage from 'assets/img/landing/blocks-server.svg'
import linesImg from 'assets/img/landing/landing-lines.png'

const landingStyles = {
   backgroundImage: `url(${bgImage})`,
   backgroundSize: 'cover, contain',
   backgroundRepeat: 'repeat-y',
   backgroundAttachment: 'fixed',
   '@keyframes animate': {
      from: {
         backgroundPositionY: '0px'
      },
      to: {
         backgroundPositionY: '10000px'
      }
   },
   animation: 'animate 500s linear infinite alternate'
}

function HomeLanding() {
   const navigate = useNavigate()
   const handleNavigate = () => navigate('/courses')

   return (
      <SectionHeader sx={landingStyles} pb={0}>
         <Box
            sx={{
               position: 'absolute',
               top: {
                  xs: 56,
                  md: 64,
                  lg: 0
               },
               bottom: 0,
               left: 0,
               right: 0,
               zIndex: -1,
               backgroundImage:
                  'linear-gradient(180deg, #253380 0%, rgba(61,63,199,0) 100%)'
            }}
         ></Box>
         <Container>
            <Grid
               container
               display="flex"
               flexDirection="row"
               justifyContent={{ xs: 'center', lg: 'space-between' }}
            >
               <Grid item xs={12} md={10} lg={6}>
                  <ScrollAnimation animation="fadeInRight">
                     <Typography
                        variant="h2"
                        letterSpacing="-0.05em"
                        fontFamily="Titillium Web"
                        textAlign={{ xs: 'center', lg: 'start' }}
                     >
                        Your go-to Helium Center
                     </Typography>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fadeInUp" delay={200}>
                     <Box mt={4}>
                        <Typography lineHeight="1.75" fontWeight="regular">
                           We provide quality cryptocurrency consultation and mining
                           equipment installation services. If you're interested in
                           investing the ever growing blockhain industry whether it is
                           through long-term holding, similar to stocks, or mining
                           equipment to generate passive income, we are your go-to
                           solution.
                        </Typography>

                        <Box
                           display="flex"
                           mt={4}
                           justifyContent={{ xs: 'center', lg: 'start' }}
                        >
                           <Button
                              variant="contained"
                              size="large"
                              onClick={handleNavigate}
                              sx={{
                                 px: 4,
                                 py: 1.5,
                                 letterSpacing: '0.1em',
                                 fontFamily: 'Titillium Web',
                                 fontWeight: 'medium',
                                 boxShadow: 5
                              }}
                           >
                              Get Started
                           </Button>
                        </Box>
                     </Box>
                  </ScrollAnimation>
               </Grid>

               <Grid item xs={12} md={8} lg={6} mx="auto" mt={{ xs: 8, lg: 0 }}>
                  <ScrollAnimation animation="fadeInUp" delay={400}>
                     <Box>
                        <Image
                           maxWidth={600}
                           src={landingBlockImage}
                           alt="servers illustration"
                        />
                        <Box display="none">
                           <a href="https://www.freepik.com/vectors/technology">
                              Technology vector created by fullvector - www.freepik.com
                           </a>
                        </Box>
                     </Box>
                  </ScrollAnimation>
               </Grid>
            </Grid>
         </Container>

         <Box
            sx={{
               height: {
                  xs: 300,
                  lg: 400
               },
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'bottom center',
               backgroundImage: `url(${linesImg})`
            }}
         ></Box>
      </SectionHeader>
   )
}

export default HomeLanding
