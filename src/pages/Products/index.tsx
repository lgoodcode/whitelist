import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { useAppSelector } from 'app/hooks'
import { selectProducts } from 'app/products/productsSlice'
import ProductCard from './ProductCard'

function ProductsPage() {
   const products = useAppSelector(selectProducts)

   return (
      <Box component="section" py={8} mt={4} bgcolor="background.default">
         <Container>
            <Box mt={6} width="auto" maxWidth={300}>
               <Typography variant="h3">Products</Typography>
               <Divider />
            </Box>
            {/* TODO: add filtering and sorting */}
            <Box></Box>
            <Box mt={6}>
               <Grid
                  container
                  rowSpacing={{ xs: 8, lg: 6 }}
                  columnSpacing={{ xs: 0, lg: 3 }}
               >
                  {products.length &&
                     products.map((product) => (
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
