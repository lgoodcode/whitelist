// Sections
import { Box, Container, Divider, Grid, Typography } from '@mui/material'

import ProductCard from './ProductCard'

import products from 'data/products'

function ProductsPage() {
   return (
      <Box component="section" py={8} mt={4} bgcolor="background.default">
         <Container>
            <Box mt={6} width="auto" maxWidth={300}>
               <Typography variant="h3">Products</Typography>
               <Divider />
            </Box>
            {/* TODO: add filtering for name, price, availability */}
            <Box></Box>
            <Box mt={6}>
               <Grid
                  container
                  rowSpacing={{ xs: 8, lg: 6 }}
                  columnSpacing={{ xs: 0, lg: 3 }}
               >
                  {products.map((product) => (
                     <Grid item key={product.id} xs={12} lg={4}>
                        <ProductCard {...product} />
                     </Grid>
                  ))}
               </Grid>
            </Box>
         </Container>
      </Box>
   )
}

export default ProductsPage
