import {
   Box,
   Button,
   Container,
   Grid,
   Typography,
   Divider,
   Stack,
   Chip
} from '@mui/material'
import { useParams } from 'react-router-dom'

import Miners from 'data/products'
import { formatPrice } from 'utilities'
import Gallery from './Gallery'
import Quantity from './Quantity'

function ItemPage() {
   const { id } = useParams()
   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
   const { name, description, images, price, discount, quantity, inStock } = Miners.find(
      (item) => item.id === id
   )!

   return (
      <Box component="section" py={8} mt={10} bgcolor="background.default">
         <Container>
            <Grid container spacing={2} justifyContent="center">
               <Grid item xs={12} lg={6}>
                  <Gallery images={images} />
               </Grid>
               <Grid item xs={12} lg={1}>
                  <Divider orientation="vertical" />
               </Grid>
               <Grid item xs={12} lg={4}>
                  <Box>
                     <Typography variant="h3" fontWeight="light">
                        {name}
                     </Typography>
                  </Box>

                  <Stack
                     mt={2}
                     direction="row"
                     sx={{
                        color: !inStock ? 'gray' : ''
                     }}
                  >
                     <Typography
                        variant="h5"
                        fontWeight="light"
                        color={discount > 0 ? 'gray' : ''}
                        sx={{
                           textDecorationLine: discount > 0 ? 'line-through' : ''
                        }}
                     >
                        ${formatPrice(price)}
                     </Typography>
                     {inStock && discount > 0 && (
                        <Typography variant="h5" fontWeight="light" sx={{ ml: 1 }}>
                           ${formatPrice(price - price * discount)}
                        </Typography>
                     )}
                     <Typography variant="h5" fontWeight="regular" sx={{ ml: 1 }}>
                        USD
                     </Typography>
                     {!inStock && (
                        <Box ml={2} display="flex" alignItems="center">
                           <Chip
                              color="secondary"
                              label={
                                 <Typography variant="h6" textTransform="uppercase">
                                    Sold Out
                                 </Typography>
                              }
                           />
                        </Box>
                     )}
                     {inStock && discount > 0 && (
                        <Box ml={2} display="flex" alignItems="center">
                           <Chip
                              color="error"
                              label={
                                 <Typography variant="h6" textTransform="uppercase">
                                    {discount * 100}% OFF
                                 </Typography>
                              }
                           />
                        </Box>
                     )}
                  </Stack>

                  <Stack mt={2} direction="row">
                     <Typography
                        variant="h6"
                        color="text.secondary"
                        letterSpacing="0.05rem"
                     >
                        Quantity Available:
                     </Typography>
                     <Typography variant="h6" sx={{ ml: 1 }}>
                        {quantity}
                     </Typography>
                  </Stack>

                  <Box mt={2}>
                     <Quantity inStock={inStock} quantity={quantity} />
                  </Box>

                  <Box mt={2}>
                     {inStock ? (
                        <Button fullWidth variant="contained">
                           Add to Cart
                        </Button>
                     ) : (
                        <Button fullWidth variant="outlined" color="primary" disabled>
                           Sold Out
                        </Button>
                     )}
                  </Box>

                  <Box mt={2}>
                     <Typography variant="body1" lineHeight="1.75rem">
                        {description}
                     </Typography>
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </Box>
   )
}

export default ItemPage
