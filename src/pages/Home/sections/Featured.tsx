import { Box, Container, Typography } from '@mui/material'

import FeaturedProduct from 'pages/Home/FeaturedProductCard'

import Miners from 'data/products'

function Featured() {
   const [goldspot, blackspot] = Miners

   return (
      <Box component="section" py={8} bgcolor="background.default">
         <Container>
            <Box textAlign="center">
               <Typography color="white" variant="h3" fontWeight="fontWeightLight">
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
               {[goldspot, blackspot].map((miner, i) => (
                  <Box key={i}>
                     <FeaturedProduct {...miner} />
                  </Box>
               ))}
            </Box>
         </Container>
      </Box>
   )
}

export default Featured
