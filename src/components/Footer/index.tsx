import { Box, Container, Typography } from '@mui/material'
import {
   YouTube as YouTubeIcon,
   Facebook as FacebookIcon,
   Twitter as TwitterIcon
} from '@mui/icons-material'

function Footer() {
   return (
      <Box component="footer" bgcolor="black">
         <Container>
            <Box display="flex" justifyContent="space-between" color="GrayText">
               <Box textAlign="center" py={2}>
                  <Typography variant="subtitle2">
                     Copyright &copy; Whitelist LLC 2022
                  </Typography>
               </Box>

               <Box display="flex" alignItems="center">
                  <YouTubeIcon
                     fontSize="large"
                     sx={{
                        mr: 2,
                        ':hover': {
                           cursor: 'pointer',
                           color: '#FF0000'
                        }
                     }}
                  />
                  <FacebookIcon
                     fontSize="large"
                     sx={{
                        mr: 2,
                        ':hover': {
                           cursor: 'pointer',
                           color: '#4267B2'
                        }
                     }}
                  />
                  <TwitterIcon
                     fontSize="large"
                     sx={{
                        ':hover': {
                           cursor: 'pointer',
                           color: '#1DA1F2'
                        }
                     }}
                  />
               </Box>
            </Box>
         </Container>
      </Box>
   )
}

export default Footer
