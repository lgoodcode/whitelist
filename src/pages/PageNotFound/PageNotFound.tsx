import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { Section } from 'components/Section'
import Graphic from './Graphic'

function PageNotFound() {
   const navigate = useNavigate()
   const handleClick = () => navigate('/')

   return (
      <Section height="100vh">
         <Container>
            <Grid container>
               <Grid item xs={12} sm={6} lg={6}>
                  <Graphic />
               </Grid>

               <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={6}
                  display="flex"
                  mt={{ xs: 4, md: 0 }}
                  alignItems="center"
               >
                  <Box>
                     <Typography variant="h3">UH OH! You're lost.</Typography>
                     <Typography paragraph sx={{ mt: 1 }}>
                        The page you are looking for does not exist. How you got here is a
                        mystery. But you can click the button below to go back to the
                        homepage.
                     </Typography>

                     <Button
                        variant="outlined"
                        color="inherit"
                        size="large"
                        onClick={handleClick}
                        sx={{
                           mt: 1,
                           px: 8,
                           ':hover': {
                              color: 'background.default',
                              bgcolor: 'text.primary'
                           }
                        }}
                     >
                        HOME
                     </Button>
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </Section>
   )
}

export default PageNotFound
