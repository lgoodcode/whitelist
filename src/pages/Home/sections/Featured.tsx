import { Box, Container, Typography } from '@mui/material'

import { useAppSelector } from 'app/hooks'
import { selectProductsFeatured, selectProductsStatus } from 'app/products/productsSlice'
import ProductCard from 'components/ProductCard'
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
         backgroundPositionY: '-10000px'
      }
   },
   animation: 'animate 500s linear infinite alternate'
}

function Featured() {
   const status = useAppSelector(selectProductsStatus)
   const products = useAppSelector(selectProductsFeatured)
   const loading = status === 'pending'

   return (
      <Box component="section" py={8} pt={14} sx={bgStyles}>
         <Container>
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
                  flexWrap={'wrap'}
                  justifyContent="space-around"
                  flexDirection={{ xs: 'column', md: 'row' }}
               >
                  {(loading ? Array.from(new Array(2)) : products).map((product, key) => (
                     <Box key={key} mx="auto" mb={8} width={{ xs: 300, lg: 350 }}>
                        <ProductCard product={product} />
                     </Box>
                  ))}
               </Box>
            </Box>
         </Container>
      </Box>
   )
}

export default Featured
