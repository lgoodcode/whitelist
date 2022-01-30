import { Box, Container, Grid, Typography, Divider, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { useAppSelector, useAppDispatch } from 'app/hooks'
import { setItem } from 'app/cart/cartSlice'
import { selectProductByName } from 'app/products/productsSlice'
import type { Product } from 'types'

import Gallery from './Gallery'
import Price from './Price'
import Quantity from './Quantity'

function ItemPage() {
   const dispatch = useAppDispatch()
   const [qty, setQty] = useState<number>(0)
   const { name } = useParams()
   const product = useAppSelector(selectProductByName(name ?? '')) as Product

   // TODO: implement a better fallback
   if (!product) {
      return <></>
   }

   const { description, images, price, discount, quantity, isnew } = product
   const handleAddItem = () => dispatch(setItem({ product, quantity: qty }))
   const handleIncrement = () => {
      if (qty < quantity) setQty(qty + 1)
   }
   const handleDecrement = () => {
      if (qty > 0) setQty(qty - 1)
   }
   const inStock = quantity > 0

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

                  <Price {...{ inStock, isnew, price, discount }} />

                  <Stack mt={2} direction="row">
                     <Typography
                        variant="h6"
                        fontWeight="regular"
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
                     <Quantity
                        {...{
                           inStock,
                           quantity: qty,
                           total: quantity,
                           handleIncrement,
                           handleDecrement,
                           handleAddItem
                        }}
                     />
                  </Box>

                  <Box my={2}>
                     <Divider />
                     <Box mt={3}>
                        <Typography fontWeight="light" textTransform="uppercase">
                           Details
                        </Typography>
                     </Box>
                     <Box mt={3}>
                        <Typography variant="body1" lineHeight="1.75rem">
                           {description}
                        </Typography>
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </Container>
      </Box>
   )
}

export default ItemPage
