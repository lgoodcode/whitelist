import { Box, Container, Divider, Grid, Typography } from '@mui/material'

import ProductCard from 'components/ProductCard'

import products from 'pages/data/products'

function ProductsLanding() {
   return (
      <Box component="section" py={8} mt={4} bgcolor="background.default">
         <Container>
            <Box mt={6} width="auto" maxWidth={300}>
               <Typography variant="h3">Products</Typography>
               <Divider />
            </Box>
            <Box></Box>
            <Box mt={6}>
               <Grid
                  container
                  rowSpacing={{ xs: 8, lg: 6 }}
                  columnSpacing={{ xs: 0, lg: 3 }}
               >
                  {products.map((product) => (
                     <Grid item key={product.id} xs={12} lg={4}>
                        <ProductCard
                           id={product.id}
                           name={product.name}
                           brand={product.brand}
                           image={product.image}
                           price={product.price}
                           discount={product.discount}
                           inventory={product.inventory}
                           isNew={product.isNew}
                           description={product.description}
                        />
                     </Grid>
                  ))}
               </Grid>
            </Box>
         </Container>
      </Box>
   )
}

export default ProductsLanding
