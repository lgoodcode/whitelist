import { LocalPhone as LocalPhoneIcon } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'

function Footer() {
   return (
      <Box component="footer" bgcolor="background.paper">
         <Container>
            <Box
               py={6}
               width="100%"
               display="flex"
               flexDirection={{ xs: 'column', lg: 'row' }}
               justifyContent="space-between"
               alignItems="center"
            >
               <Box>
                  <Typography variant="h4" color="text.primary">
                     Contact Us
                  </Typography>
                  <Box mt={2}>
                     <Typography variant="body2" color="text.primary">
                        <LocalPhoneIcon fontSize="small" /> (206)-432-5920
                     </Typography>
                  </Box>
               </Box>
            </Box>
            <Box textAlign="center" pb={2}>
               <Typography variant="subtitle1" color="GrayText">
                  Copyright &copy; Whitelist LLC 2022
               </Typography>
            </Box>
         </Container>
      </Box>
   )
}

export default Footer
