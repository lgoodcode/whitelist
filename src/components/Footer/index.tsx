import { Box, Container, SvgIcon, Typography } from '@mui/material'
import {
   YouTube as YouTubeIcon,
   Facebook as FacebookIcon,
   Twitter as TwitterIcon
} from '@mui/icons-material'
import { ReactComponent as DiscordIcon } from 'assets/img/discord.svg'

function Footer() {
   return (
      <Box component="footer" bgcolor="black">
         <Container>
            <Box
               display="flex"
               flexDirection={{
                  xs: 'column',
                  md: 'row'
               }}
               justifyContent="space-between"
               color="GrayText"
            >
               <Box
                  textAlign="center"
                  py={2}
                  order={{
                     xs: 100,
                     md: 1
                  }}
               >
                  <Typography variant="subtitle2">
                     Copyright &copy; Whitelist LLC 2022
                  </Typography>
               </Box>

               <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  pt={{
                     xs: 2,
                     md: 0
                  }}
                  order={{
                     xs: 90,
                     md: 2
                  }}
               >
                  <a
                     href="https://www.youtube.com/channel/UC5_0jij62Sf45SGt6zfrnbA"
                     target="_blank"
                     referrerPolicy="no-referrer"
                     style={{
                        display: 'flex',
                        color: 'GrayText'
                     }}
                  >
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
                  </a>

                  <SvgIcon
                     component={DiscordIcon}
                     fontSize="large"
                     sx={{
                        mr: 2,
                        '& path': {
                           fill: 'GrayText'
                        },
                        ':hover': {
                           cursor: 'pointer',
                           '& path': {
                              fill: '#5865F2'
                           }
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
