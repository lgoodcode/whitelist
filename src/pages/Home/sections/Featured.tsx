import { Box, Container, Typography } from '@mui/material'

import { useAppSelector } from 'app/hooks'
import { selectProductsFeatured, selectProductsStatus } from 'app/products/productsSlice'
import { Section } from 'components/Section'
import MyDivider from 'components/MyDivider'
import ProductCard from 'components/ProductCard'
import ScrollAnimation from 'components/ScrollAnimation/animate.css'

function Featured() {
   const status = useAppSelector(selectProductsStatus)
   const products = useAppSelector(selectProductsFeatured)
   const loading = status === 'pending'

   return (
      <Section sx={{ pt: '64px !important', pb: '48px !important' }}>
         {/* Need a lower threshold because the padding top is reduced */}
         <ScrollAnimation animation="fadeInUp" threshold={20}>
            <Container>
               <Box maxWidth="sm" display="flex" flexDirection="column" mx="auto">
                  <Typography
                     variant="h3"
                     textAlign="center"
                     fontWeight="fontWeightLight"
                     fontFamily="Titillium Web"
                  >
                     Featured Products
                  </Typography>

                  <MyDivider />
               </Box>

               <Box
                  mx="auto"
                  mt={8}
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="space-around"
                  flexDirection={{ xs: 'column', md: 'row' }}
               >
                  {(loading ? Array.from(new Array(2)) : products).map((product, key) => (
                     <Box key={key} mx="auto" mb={8} width={{ xs: 300, lg: 350 }}>
                        <ProductCard product={product} />
                     </Box>
                  ))}
               </Box>
            </Container>
         </ScrollAnimation>
      </Section>
   )
}

export default Featured
