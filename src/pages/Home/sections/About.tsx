import { AccountCircle as AccountCircleIcon } from '@mui/icons-material'
import {
   Box,
   Card,
   CardContent,
   Container,
   Divider,
   Grid,
   Typography
} from '@mui/material'

import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum({
   wordsPerSentence: {
      max: 8,
      min: 6
   }
})

function About() {
   return (
      <Box component="section" py={3} bgcolor="background.paper">
         <Container>
            <Grid container item xs={12} lg={9} mx="auto">
               <Grid item xs={12} md={4}>
                  <Card>
                     <AccountCircleIcon />
                     <Divider />
                     <CardContent>
                        <Typography variant="body1" color="gray">
                           {lorem.generateSentences(4)}
                        </Typography>
                     </CardContent>
                  </Card>
               </Grid>
            </Grid>
         </Container>
      </Box>
   )
}

export default About
