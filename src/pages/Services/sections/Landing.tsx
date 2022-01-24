import { Box } from '@mui/material'

import bgImage from 'assets/img/services-landing.jpg'

function Landing() {
   return (
      <Box
         display="flex"
         alignItems="center"
         minHeight="100vh"
         sx={{
            backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'revert'
         }}
      ></Box>
   )
}

export default Landing
