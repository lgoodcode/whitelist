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
      <Box component="section" py={8} mt={8} bgcolor="background.default">
         <Container>
            <Grid container>
               <Grid item xs={12} lg={6}>
                  <Graphic theme={mode} />
               </Grid>
               <Grid item xs={12} lg={6} display="flex" alignItems="center">
                  <Box>
                     <Typography variant="h1">404</Typography>
                     <Typography variant="h4">UH OH! You're lost.</Typography>
                     <Typography paragraph sx={{ mt: 1 }}>
                        The page you are looking for does not exist. How you got here is a
                        mystery. But you can click the button below to go back to the
                        homepage.
                     </Typography>
                     <Button
                        variant="outlined"
                        color="inherit"
                        size="large"
                        sx={{ px: 8 }}
                        onClick={handleClick}
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
