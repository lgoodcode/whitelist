import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { LoremIpsum } from 'lorem-ipsum'

import { Section } from 'components/Section'
import ScrollAnimation from 'components/ScrollAnimation/animate.css'
import MyDivider from 'components/MyDivider'
import Image from 'components/Image'
import lineBar from 'assets/img/landing/landing-bar.jpg'
import laptopImg from 'assets/img/landing/about-laptop.png'
import hotspotsImg from 'assets/img/landing/about-hotspots.svg'
import phoneImg from 'assets/img/landing/about-phone.svg'

const lorem = new LoremIpsum({
   wordsPerSentence: {
      max: 8,
      min: 6
   }
})

function About() {
   return (
      <Section
         sx={{
            pb: {
               lg: 36
            },
            backgroundImage: {
               xs: 'none',
               lg: `url(${lineBar})`
            },
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'top center'
         }}
      >
         <Container maxWidth="lg">
            <Box>
               <Grid
                  container
                  justifyContent={{
                     xs: 'space-between',
                     md: 'center'
                  }}
                  textAlign={{
                     xs: 'center',
                     lg: 'start'
                  }}
               >
                  <Grid item xs={12} md={8} lg={6}>
                     <ScrollAnimation animation="fadeInLeft" duration={800}>
                        <Box
                           display="flex"
                           justifyContent="center"
                           sx={{
                              backgroundImage:
                                 'radial-gradient(circle, rgb(60, 60, 200, 60%) 0%, transparent 50%)'
                           }}
                        >
                           <Image
                              src={laptopImg}
                              alt="Laptop visual"
                              width={{
                                 xs: '75%',
                                 md: '50%'
                              }}
                           />
                        </Box>
                     </ScrollAnimation>
                  </Grid>

                  <Grid
                     item
                     xs={12}
                     md={8}
                     lg={6}
                     mt={{ xs: 4, lg: 0 }}
                     display="flex"
                     justifyContent="center"
                     alignItems="center"
                  >
                     <ScrollAnimation animation="fadeInRight" duration={800}>
                        <Box
                           maxWidth={{
                              xs: '100%',
                              lg: 480
                           }}
                        >
                           <Typography
                              variant="h3"
                              fontWeight="medium"
                              fontFamily="Titillium Web"
                           >
                              Blockchain Education
                           </Typography>

                           <MyDivider />

                           <Typography paragraph sx={{ mt: 4 }}>
                              {lorem.generateParagraphs(1)}
                           </Typography>

                           <Button
                              variant="contained"
                              size="large"
                              sx={{
                                 px: 4,
                                 py: 1.5,
                                 mt: {
                                    xs: 2,
                                    md: 0
                                 },
                                 letterSpacing: '0.1em',
                                 fontFamily: 'Titillium Web',
                                 fontWeight: 'medium',
                                 boxShadow: 5
                              }}
                           >
                              View Courses
                           </Button>
                        </Box>
                     </ScrollAnimation>
                  </Grid>
               </Grid>
            </Box>

            <Box
               mt={{
                  xs: 12,
                  lg: 18
               }}
            >
               <Grid
                  container
                  justifyContent={{
                     xs: 'space-between',
                     md: 'center'
                  }}
                  textAlign={{
                     xs: 'center',
                     lg: 'start'
                  }}
               >
                  <Grid
                     item
                     xs={12}
                     md={8}
                     lg={6}
                     order={{
                        xs: 1,
                        lg: 2
                     }}
                     display="flex"
                     justifyContent="center"
                     alignItems="center"
                  >
                     <ScrollAnimation animation="fadeInRight" duration={800}>
                        <Box
                           sx={{
                              backgroundImage:
                                 'radial-gradient(circle, rgb(60, 60, 200, 60%) 0%, transparent 50%)'
                           }}
                        >
                           <Image src={hotspotsImg} alt="Hotspot devices visual" />
                           <Box display="none">
                              <a href="https://www.freepik.com/vectors/banner">
                                 Banner vector created by fullvector - www.freepik.com
                              </a>
                           </Box>
                        </Box>
                     </ScrollAnimation>
                  </Grid>

                  <Grid
                     item
                     xs={12}
                     md={8}
                     lg={6}
                     mt={{ xs: 4, lg: 0 }}
                     display="flex"
                     justifyContent="center"
                     alignItems="center"
                     order={{
                        xs: 2,
                        lg: 1
                     }}
                  >
                     <ScrollAnimation animation="fadeInLeft" duration={800}>
                        <Box
                           maxWidth={{
                              xs: '100%',
                              lg: 480
                           }}
                        >
                           <Typography
                              variant="h3"
                              fontWeight="medium"
                              fontFamily="Titillium Web"
                           >
                              Helium Hotspots
                           </Typography>

                           <MyDivider />

                           <Typography paragraph sx={{ mt: 4 }}>
                              {lorem.generateParagraphs(1)}
                           </Typography>

                           <Typography paragraph sx={{ mt: 4 }}>
                              {lorem.generateParagraphs(1)}
                           </Typography>
                        </Box>
                     </ScrollAnimation>
                  </Grid>
               </Grid>
            </Box>

            <Box
               mt={{
                  xs: 12,
                  lg: 18
               }}
            >
               <Grid
                  container
                  justifyContent={{
                     xs: 'space-between',
                     md: 'center'
                  }}
                  textAlign={{
                     xs: 'center',
                     lg: 'start'
                  }}
               >
                  <Grid item xs={12} md={8} lg={6} display="flex" alignItems="center">
                     <ScrollAnimation animation="fadeInLeft" duration={800}>
                        <Box
                           sx={{
                              backgroundImage:
                                 'radial-gradient(circle, rgb(60, 60, 200, 60%) 0%, transparent 50%)'
                           }}
                        >
                           <Image src={phoneImg} alt="Phone visual" />
                           <Box display="none">
                              <a href="https://www.freepik.com/vectors/infographic">
                                 Infographic vector created by fullvector -
                                 www.freepik.com
                              </a>
                           </Box>
                        </Box>
                     </ScrollAnimation>
                  </Grid>

                  <Grid
                     item
                     xs={12}
                     md={8}
                     lg={6}
                     mt={{ xs: 4, lg: 0 }}
                     display="flex"
                     justifyContent="center"
                     alignItems="center"
                  >
                     <ScrollAnimation animation="fadeInRight" duration={800}>
                        <Box
                           maxWidth={{
                              xs: '100%',
                              lg: 480
                           }}
                        >
                           <Typography
                              variant="h3"
                              fontWeight="medium"
                              fontFamily="Titillium Web"
                           >
                              Earn Passive Income
                           </Typography>

                           <MyDivider />

                           <Typography paragraph sx={{ mt: 4 }}>
                              {lorem.generateParagraphs(1)}
                           </Typography>

                           <Typography paragraph sx={{ mt: 4 }}>
                              {lorem.generateParagraphs(1)}
                           </Typography>
                        </Box>
                     </ScrollAnimation>
                  </Grid>
               </Grid>
            </Box>
         </Container>
      </Section>
   )
}

export default About
