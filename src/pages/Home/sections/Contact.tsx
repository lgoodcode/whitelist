import { Box, Container, Typography } from '@mui/material'
import { Section } from 'components/Section'
import MyDivider from 'components/MyDivider'
import ScrollAnimation from 'components/ScrollAnimation'
import ContactForm from 'components/ContactForm'
import arrowLines from 'assets/img/landing/contact-lines.svg'
import floatingBlock from 'assets/img/landing/blocks.png'

function Contact() {
   return (
      <Section
         sx={{
            pt: '0 !important',
            backgroundImage: `linear-gradient(180deg, #253380 0%, rgba(61,63,199,0) 100%), url(${floatingBlock})`,
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'center',
            backgroundSize: 'contain'
         }}
      >
         <Box
            height={{
               xs: 200,
               md: 300
            }}
            mb={12}
            sx={{
               backgroundImage: `url(${arrowLines})`
            }}
         />
         <ScrollAnimation animation="fadeInUp" threshold={10}>
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
         </ScrollAnimation>
      </Section>
   )
}

export default Contact
