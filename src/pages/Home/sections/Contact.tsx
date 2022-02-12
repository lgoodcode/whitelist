import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { Section } from 'components/Section'
import MyDivider from 'components/MyDivider'
import ScrollAnimation from 'components/ScrollAnimation/animate.css'
import arrowLines from 'assets/img/landing/contact-lines.svg'
import floatingBlock from 'assets/img/landing/blocks.png'

function Contact() {
   return (
      <Section
         sx={{
            pt: '0 !important',
            backgroundImage: `linear-gradient(180deg, #253380 0%, rgba(61,63,199,0) 100%), url(${floatingBlock})`,
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'center',
            backgroundSize: 'contain'
         }}
      >
         <Box
            height={{
               xs: 200,
               md: 300
            }}
            mb={12}
            sx={{
               backgroundImage: `url(${arrowLines})`
            }}
         />
         {/* Need a lower threshold because of no top padding for the divider */}
         <ScrollAnimation animation="fadeIn" threshold={30}>
            <Container maxWidth="md">
               <Box maxWidth="sm" mx="auto">
                  <Typography variant="h4" fontFamily="Titillium Web" textAlign="center">
                     Feel free to contact us
                  </Typography>

                  <MyDivider variant="middle" />

                  <Typography sx={{ mt: 2 }}>
                     Send us your contact info and a short message on what you're
                     inquiring about and we'll get back to you as soon as possible.
                  </Typography>
               </Box>
               <Box
                  mt={4}
                  mx="auto"
                  p={3}
                  maxWidth={600}
                  borderRadius={2}
                  flexDirection="column"
                  alignItems="center"
                  boxShadow={10}
                  sx={{
                     backgroundImage: 'linear-gradient(0deg, #2b2996 0%, #1b1f50 55%)'
                  }}
               >
                  {/* TODO: change font of label to titllium */}
                  <Box component="form" noValidate>
                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              fullWidth
                              required
                              color="info"
                              id="fName"
                              label="First Name"
                              variant="outlined"
                              InputProps={{
                                 style: { fontSize: 14 }
                              }}
                              InputLabelProps={{
                                 style: { fontSize: 14 }
                              }}
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              fullWidth
                              required
                              color="info"
                              id="lName"
                              label="Last Name"
                              variant="outlined"
                              InputProps={{
                                 style: { fontSize: 14 }
                              }}
                              InputLabelProps={{
                                 style: { fontSize: 14 }
                              }}
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                              fullWidth
                              required
                              color="info"
                              id="email"
                              label="Email Address"
                              variant="outlined"
                              InputProps={{
                                 style: { fontSize: 14 }
                              }}
                              InputLabelProps={{
                                 style: { fontSize: 14 }
                              }}
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                              fullWidth
                              id="phone"
                              color="info"
                              label="Phone Number"
                              variant="outlined"
                              InputProps={{
                                 style: { fontSize: 14 }
                              }}
                              InputLabelProps={{
                                 style: { fontSize: 14 }
                              }}
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                              fullWidth
                              required
                              color="info"
                              label="Message"
                              multiline={true}
                              rows={5}
                              placeholder="Describe what you're interested in..."
                              InputProps={{
                                 style: { fontSize: 14 }
                              }}
                              InputLabelProps={{
                                 style: { fontSize: 14 }
                              }}
                           />
                        </Grid>
                     </Grid>
                  </Box>
                  <Box width="100%" mt={4}>
                     <Button
                        fullWidth
                        color="secondary"
                        variant="contained"
                        sx={{ py: 1 }}
                     >
                        Submit
                     </Button>
                  </Box>
               </Box>
            </Container>
         </ScrollAnimation>
      </Section>
   )
}

export default Contact
