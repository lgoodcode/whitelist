import { Box, Grid, Typography } from '@mui/material'
import { LoremIpsum } from 'lorem-ipsum'

import { Section } from 'components/Section'
import scatteredForcefields from 'assets/img/landing/scattered-forcefields.svg'

const lorem = new LoremIpsum({
   wordsPerSentence: {
      max: 8,
      min: 6
   }
})

function Courses() {
   return (
      <Section
         pt={{
            xs: 20,
            lg: 0
         }}
         pb={{
            xs: '224px !important',
            md: '324px !important'
         }}
         pr="25%"
         sx={{
            backgroundImage: `url(${scatteredForcefields})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'contain'
         }}
      >
         <Grid
            container
            columnSpacing={{
               xs: 0,
               md: 6
            }}
            display="flex"
            flexDirection="row"
            py={8}
            px={4}
            sx={{
               backgroundImage:
                  'linear-gradient(35deg,rgba(39,37,150,0.95) 0%,rgba(55,37,211,0.95) 100%)',
               boxShadow:
                  '0px 6px 6px -3px rgba(39,37,150,0.24), 0px 10px 14px 1px rgba(39,37,150,0.14), 0px 4px 18px 3px rgba(39,37,150,0.12)'
            }}
         >
            <Grid item lg={4}>
               <Typography variant="h3" fontFamily="Titillium Web">
                  Courses
               </Typography>
               <Typography paragraph sx={{ mt: 2 }}>
                  {lorem.generateParagraphs(1)}
               </Typography>
               <Typography paragraph sx={{ mt: 2 }}>
                  {lorem.generateSentences(3)}
               </Typography>
            </Grid>

            <Grid item lg={4}>
               <Typography paragraph>{lorem.generateSentences(4)}</Typography>
               <Typography paragraph>{lorem.generateSentences(4)}</Typography>
            </Grid>

            <Grid item lg={4}>
               <Box
                  height="100%"
                  mt={{
                     xs: 4,
                     lg: 0
                  }}
               >
                  <iframe
                     width="150%"
                     height={300}
                     loading="lazy"
                     title="Mitsubishi Polar Bear Fail"
                     name="Funny video"
                     src="https://www.youtube.com/embed/8nHnQQhWQVA?start=67"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
               </Box>
            </Grid>
         </Grid>
      </Section>
   )
}

export default Courses
