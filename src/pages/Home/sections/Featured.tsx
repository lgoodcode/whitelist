import { Box, Container, Typography } from '@mui/material'

import { useAppSelector } from 'app/hooks'
import { selectProductsFeatured, selectStatus } from 'app/products/productsSlice'
import FeaturedProduct from 'pages/Home/FeaturedProductCard'
import bgImage from 'assets/img/landing-particles.jpg'

const bgStyles = {
   backgroundImage: `url(${bgImage})`,
   backgroundSize: 'cover',
   backgroundRepeat: 'repeat-y',
   backgroundAttachment: 'fixed',
   '@keyframes animate': {
      from: {
         backgroundPositionY: 0
      },
      to: {
         backgroundPositionY: '100%'
      }
   },
   animation: 'animate 5s ease-in-out infinite alternate'
}

function Featured() {
   const loaded = useAppSelector(selectStatus)
   const products = useAppSelector(selectProductsFeatured)

   return (
      <Box component="section" py={8} sx={bgStyles}>
         <Container>
            {/* TODO: add a skeleton loader */}
            {loaded === 'pending' && <Box></Box>}
            {loaded === 'fulfilled' && (
               <Box>
                  <Box textAlign="center">
                     <Typography
                        color="text.primary"
                        variant="h3"
                        fontWeight="fontWeightLight"
                     >
                        Our Products
                     </Typography>
                  </Box>
                  <Box
                     mx="auto"
                     mt={8}
                     display="flex"
                     justifyContent="space-around"
                     flexDirection={{ xs: 'column', lg: 'row' }}
                  >
                     {products.map((miner, i) => (
                        <Box key={i}>
                           <FeaturedProduct {...miner} />
                        </Box>
                     ))}
                  </Box>
               </Box>
            )}
         </Container>
      </Box>
   )
}

export default Featured
