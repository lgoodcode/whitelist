import { Box, Container, Typography } from '@mui/material'

import ProductCard from 'components/ProductCard'

import miners from './data/miners'

function Miner() {
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
          {miners.map((miner, i) => (
            <ProductCard
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
