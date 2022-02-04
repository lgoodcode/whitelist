import { LocalPhone as LocalPhoneIcon } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'

function Footer() {
   return (
      <Box component="footer" py={2} bgcolor="background.paper">
         <Container>
            <Box
               py={2}
               width="100%"
               display="flex"
               flexDirection={{ xs: 'column', lg: 'row' }}
               justifyContent="space-between"
            >
               <Box>
                  <Typography variant="h4">Contact Us</Typography>
                  <Box mt={2} display="flex">
                     <LocalPhoneIcon fontSize="small" sx={{ mr: 1 }} />
                     <Typography variant="body2">(360) 329-2025</Typography>
                  </Box>
               </Box>
            </Box>
            <Box textAlign="center" py={2}>
               <Typography variant="subtitle1">
                  Copyright &copy; Whitelist LLC 2022
               </Typography>
            </Box>
         </Container>
      </Box>
   )
}

export default Footer
