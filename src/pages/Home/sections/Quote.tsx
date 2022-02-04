import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'

function Quote() {
   return (
      <Box component="section" py={12} bgcolor="background.default">
         <Container maxWidth="md">
            <Box maxWidth="sm" mx="auto">
               <Typography variant="h4" fontFamily="Titillium Web" textAlign="center">
                  Feel free to contact us
               </Typography>
               <Typography sx={{ mt: 2 }}>
                  Send us your contact info and a short message on what you're inquiring
                  about and we'll get back to you as soon as possible.
               </Typography>
            </Box>
            <Box
               mt={4}
               mx="auto"
               p={3}
               maxWidth={600}
               borderRadius={2}
               bgcolor="background.paper"
               flexDirection="column"
               alignItems="center"
               boxShadow={10}
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
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           fullWidth
                           id="phone"
                           color="info"
                           label="Phone Number"
                           variant="outlined"
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
                        />
                     </Grid>
                  </Grid>
               </Box>
               <Box width="100%" mt={4}>
                  <Button fullWidth color="secondary" variant="contained" sx={{ py: 1 }}>
                     Get a Quote
                  </Button>
               </Box>
            </Box>
         </Container>
      </Box>
   )
}

export default Quote
