import { Box, Container, Typography } from '@mui/material'

import FeaturedProduct from 'components/FeaturedProductCard'

import featuredMiners from 'pages/data/featuredMiners'

function Miner() {
   return (
      <Box component="section" py={8} bgcolor="background.default">
         <Container>
            <Box textAlign="center">
               <Typography
                  color="white"
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
               {featuredMiners.map((miner, i) => (
                  <FeaturedProduct
                     key={i}
                     name={miner.name}
                     brand={miner.brand}
                     image={miner.image}
                     price={miner.price}
                     description={miner.description}
                  />
               ))}
            </Box>
         </Container>
      </Box>
   )
}

export default Miner
