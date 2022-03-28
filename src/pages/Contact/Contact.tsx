import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { Section } from 'components/Section'
import MyDivider from 'components/MyDivider'

function ContactPage() {
   return (
      <Section>
         <Container>
            <Container maxWidth="md">
               <Box maxWidth="sm" mx="auto">
                  <Typography variant="h4" fontFamily="Titillium Web" textAlign="center">
                     Feel free to contact us
                  </Typography>

                  <MyDivider boxProps={{ mt: 2 }} dividerProps={{ variant: 'middle' }} />

                  <Typography sx={{ mt: 2 }} textAlign="center">
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
                              InputLabelProps={{
                                 style: { fontFamily: 'Titillium Web' }
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
                              InputLabelProps={{
                                 style: { fontFamily: 'Titillium Web' }
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
                              InputLabelProps={{
                                 style: { fontFamily: 'Titillium Web' }
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
                              InputLabelProps={{
                                 style: { fontFamily: 'Titillium Web' }
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
                              InputLabelProps={{
                                 style: { fontFamily: 'Titillium Web' }
                              }}
                           />
                        </Grid>
                     </Grid>
                  </Box>
                  <Box
                     width="100%"
                     mt={4}
                     display="flex"
                     justifyContent={{
                        xs: 'center',
                        lg: 'flex-end'
                     }}
                  >
                     <Button
                        color="tertiary"
                        variant="contained"
                        sx={{ py: 1, px: 4, boxShadow: 5 }}
                     >
                        Submit
                     </Button>
                  </Box>
               </Box>
            </Container>
         </Container>
      </Section>
   )
}

export default ContactPage
