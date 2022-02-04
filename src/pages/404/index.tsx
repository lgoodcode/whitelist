import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import Graphic from './Graphic'

function PageNotFound() {
   const {
      palette: { mode }
   } = useTheme()
   const navigate = useNavigate()
   const handleClick = () => navigate('/')

   return (
      <Box
         component="section"
         height="75vh"
         mt={{
            xs: 8,
            sm: 12,
            md: 24
         }}
         bgcolor="background.default"
      >
         <Container>
            <Grid container>
               <Grid item xs={12} lg={6}>
                  <Graphic theme={mode} />
               </Grid>
               <Grid
                  item
                  xs={12}
                  lg={6}
                  display="flex"
                  mt={{ xs: 8, md: 0 }}
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
      </Box>
   )
}

export default PageNotFound
