import { Box, Container, Grid, Typography } from '@mui/material'
import { useAppSelector } from 'app/hooks'
import { selectProducts, selectProductsStatus } from 'app/reducers/products/productsSlice'
import { Section } from 'components/Section'
import MyDivider from 'components/MyDivider'
import ProductCard from 'components/ProductCard'

function ProductsPage() {
   const status = useAppSelector(selectProductsStatus)
   const products = useAppSelector(selectProducts)
   const loading = status === 'pending'

   if (status === 'error') {
      return (
         <Section>
            <Container>
               <Box mt={{ md: 4, lg: 8 }} display="flex" justifyContent="center">
                  <Typography variant="h4">Oops! An error occurred.</Typography>
               </Box>
            </Container>
         </Section>
      )
   }

   const content =
      !loading && products.length === 0 ? (
         <Box minHeight="100%" width="100%">
            <Typography>Failed to retrieve products.</Typography>
         </Box>
      ) : (
         <Grid container rowSpacing={{ xs: 8, md: 6 }} columnSpacing={{ xs: 0, md: 6 }}>
            {(loading ? Array.from(new Array(3)) : products).map((product, key) => (
               <Grid item key={key} xs={12} md={4} mx="auto">
                  <ProductCard product={product} useDesc={false} />
               </Grid>
            ))}
         </Grid>
      )

   return (
      <Section>
         <Container>
            <Box
               mt={{
                  md: 4,
                  lg: 8
               }}
               display="flex"
               width="auto"
               maxWidth={300}
            >
               <MyDivider
                  boxProps={{
                     mr: 2
                  }}
                  dividerProps={{
                     orientation: 'vertical',
                     sx: {
                        borderRightWidth: 'thick'
                     }
                  }}
               />

               <Typography variant="h3" fontFamily="Titillium Web">
                  Products
               </Typography>
            </Box>
            {/* TODO: add filtering and sorting */}
            <Box></Box>
            <Box mt={6}>{content}</Box>
         </Container>
      </Section>
   )
}

export default ProductsPage
