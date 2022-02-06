import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { useAppSelector } from 'app/hooks'
import { selectProducts, selectProductsStatus } from 'app/products/productsSlice'
import ProductCard from 'components/ProductCard'

function ProductsPage() {
   const status = useAppSelector(selectProductsStatus)
   const products = useAppSelector(selectProducts)
   const loading = status === 'pending'

   return (
      <>
         <Box
            role="background gradient"
            position="absolute"
            height="100vh"
            width="100%"
            zIndex={-1}
            sx={{
               backgroundImage:
                  'linear-gradient(180deg, #253380 0%, rgba(61,63,199,0) 100%)'
            }}
         ></Box>
         <Box component="section" display="flex" py={8}>
            <Container>
               <Box
                  mt={{
                     md: 4,
                     lg: 8
                  }}
                  width="auto"
                  maxWidth={300}
               >
                  <Typography variant="h3">Products</Typography>
                  <Divider />
               </Box>
               {/* TODO: add filtering and sorting */}
               <Box></Box>
               <Box mt={6}>
                  <Grid
                     container
                     rowSpacing={{ xs: 8, md: 6 }}
                     columnSpacing={{ xs: 0, md: 6 }}
                  >
                     {(loading ? Array.from(new Array(3)) : products).map(
                        (product, key) => (
                           <Grid item key={key} xs={12} md={3} mx="auto">
                              <ProductCard product={product} useDesc={false} />
                           </Grid>
                        )
                     )}
                  </Grid>
               </Box>
            </Container>
         </Box>
      </>
   )
}

export default ProductsPage
