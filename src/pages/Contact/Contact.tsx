import { Box, Container, Typography } from '@mui/material'
import { Section } from 'components/Section'
import MyDivider from 'components/MyDivider'
import ContactForm from 'components/ContactForm'

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
                  <ContactForm />
               </Box>
            </Container>
         </Container>
      </Section>
   )
}

export default ContactPage
