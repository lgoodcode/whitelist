import { Box, Container, Grid, Typography } from '@mui/material'
import { LoremIpsum } from 'lorem-ipsum'

import { Section } from 'components/Section'
import ScrollAnimation from 'components/ScrollAnimation'
import scatteredForcefields from 'assets/img/landing/scattered-forcefields.svg'
import MyDivider from 'components/MyDivider'

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 8,
    min: 6,
  },
})

function Courses() {
  return (
    <Section
      pt={{
        xs: 12,
        lg: 0,
      }}
      pb={{
        xs: '128px !important',
        md: '224px !important',
      }}
      sx={{
        backgroundImage: `url(${scatteredForcefields})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'contain',
      }}
    >
      <Container maxWidth="lg">
        <ScrollAnimation animation="fadeInLeft" duration={1200} threshold={30}>
          <Grid
            container
            columnSpacing={{
              xs: 0,
              md: 6,
            }}
            display="flex"
            flexDirection="row"
            py={8}
            px={4}
            sx={{
              backgroundImage:
                'linear-gradient(35deg,rgba(39,37,150,0.95) 0%,rgba(55,37,211,0.95) 100%)',
              boxShadow:
                '0px 6px 6px -3px rgba(39,37,150,0.24), 0px 10px 14px 1px rgba(39,37,150,0.14), 0px 4px 18px 3px rgba(39,37,150,0.12)',
            }}
          >
            <Grid item xs={12} lg={4}>
              <ScrollAnimation animation="fadeIn" delay={200}>
                <>
                  <Typography
                    variant="h3"
                    fontFamily="Titillium Web"
                    textAlign={{
                      xs: 'center',
                      lg: 'start',
                    }}
                  >
                    Courses
                  </Typography>

                  <MyDivider boxProps={{ mt: 2 }} />

                  <Typography paragraph sx={{ mt: 4 }}>
                    {lorem.generateParagraphs(1)}
                  </Typography>
                  <Typography paragraph sx={{ mt: 2 }}>
                    {lorem.generateSentences(3)}
                  </Typography>
                </>
              </ScrollAnimation>
            </Grid>

            <Grid item xs={12} lg={4}>
              <ScrollAnimation animation="fadeIn" delay={150}>
                <>
                  <Typography paragraph>{lorem.generateSentences(4)}</Typography>
                  <Typography paragraph>{lorem.generateSentences(4)}</Typography>
                </>
              </ScrollAnimation>
            </Grid>

            <Grid item xs={12} lg={4}>
              <ScrollAnimation animation="fadeIn" delay={100}>
                <Box
                  height="100%"
                  mt={{
                    xs: 4,
                    lg: 0,
                  }}
                >
                  <iframe
                    width="100%"
                    height={300}
                    loading="lazy"
                    title="Mitsubishi Polar Bear Fail"
                    name="Funny video"
                    src="https://www.youtube.com/embed/vz0PmneUIg4"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  />
                </Box>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Container>
    </Section>
  )
}

export default Courses
