import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { MailOutlineRounded as MailOutlineRoundedIcon } from '@mui/icons-material'

function Quote() {
   return (
      <Box component="section" py={12} bgcolor="background.paper">
         <Box display="flex" justifyContent="center">
            <Box
               p={3}
               maxWidth={600}
               borderRadius={2}
               bgcolor="background.default"
               display={{
                  xs: 'none',
                  md: 'flex'
               }}
               flexDirection="column"
               alignItems="center"
               boxShadow={10}
            >
               <Box position="relative" top={-50} bgcolor="goldenrod" borderRadius={2}>
                  <Box display="flex" alignItems="center" m={2}>
                     <MailOutlineRoundedIcon fontSize="large" />
                  </Box>
               </Box>
               <Box mt={-4}>
                  <Typography variant="h5" textAlign="center">
                     Get a Quote
                  </Typography>
                  <Box mt={2}>
                     <Typography variant="body2" textAlign="start">
                        Send us your contact info and a short message on what you're
                        inquiring about and we'll get back to you as soon as possible.
                     </Typography>
                  </Box>
                  <Box mt={4} component="form" noValidate>
                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              fullWidth
                              required
                              id="fName"
                              label="First Name"
                              variant="filled"
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              fullWidth
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
                        <Grid item xs={12}>
                           <TextField
                              fullWidth
                              required
                              multiline={true}
                              rows={5}
                              placeholder="Describe what you're interested in..."
                           />
                        </Grid>
                     </Grid>
                  </Box>
               </Box>
               <Box width="100%" mt={4}>
                  <Button fullWidth color="secondary" variant="contained">
                     Get a Quote
                  </Button>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default Quote
