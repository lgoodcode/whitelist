import { Box, Container, Grid, Typography, Divider, Skeleton } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { setItem } from 'app/reducers/cart/cartSlice'
import { selectProductByName } from 'app/reducers/products/productsSlice'
import Toast from 'components/Toast'
import { SectionHeader } from 'components/Section'
import Gallery from './Gallery'
import Price from './Price'
import Quantity from './Quantity'

function ItemPage() {
   const { name = '' } = useParams()
   const dispatch = useAppDispatch()
   const [qty, setQty] = useState(0)
   const [toastOpen, setToastOpen] = useState(false)
   const [newToast, setNewToast] = useState(false)
   const product = useAppSelector(selectProductByName(name))
   const inStock = !product ? false : product.quantity > 0

   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
         return false
      }
      setToastOpen(false)
   }
   const handleAddItem = !product
      ? () => null
      : () => {
           dispatch(setItem({ product, quantity: qty }))
           setToastOpen(true)
           setNewToast(true)
        }
   const handleIncrement = !product
      ? () => null
      : () => {
           if (qty < product.quantity) setQty(qty + 1)
        }
   const handleDecrement = !product
      ? () => null
      : () => {
           if (qty > 0) setQty(qty - 1)
        }

   /**
    * Displays the newest toast
    */
   useEffect(() => {
      if (newToast && toastOpen) {
         setToastOpen(false)
      } else if (newToast && !toastOpen) {
         setToastOpen(true)
         setNewToast(false)
      }
   }, [toastOpen, newToast])

   return (
      <SectionHeader>
         <Toast
            open={toastOpen}
            handleClose={handleClose}
            color="success"
            message="Item Added to Cart"
         />

         <Container>
            <Grid container spacing={2} justifyContent="center">
               <Grid item xs={12} lg={6}>
                  {product ? (
                     <Gallery images={product.images} />
                  ) : (
                     <Box>
                        <Skeleton variant="rectangular" height={480} />
                        <Skeleton variant="rectangular" height={100} sx={{ mt: 2 }} />
                     </Box>
                  )}
               </Grid>
               <Grid item xs={12} lg={1}>
                  <Divider orientation="vertical" />
               </Grid>
               <Grid item xs={12} lg={4}>
                  <Box>
                     {product ? (
                        <Typography variant="h3" fontWeight="light">
                           {name}
                        </Typography>
                     ) : (
                        <Skeleton height={72} />
                     )}
                  </Box>

                  <Price {...{ inStock, product }} />

                  <Box mt={2} display="flex" flexDirection="row">
                     {product ? (
                        <>
                           <Typography
                              variant="h6"
                              fontWeight="regular"
                              color="text.secondary"
                              letterSpacing="0.05rem"
                           >
                              Quantity Available:
                           </Typography>
                           <Typography variant="h6" sx={{ ml: 1 }}>
                              {product.quantity}
                           </Typography>
                        </>
                     ) : (
                        <>
                           <Skeleton height={48} width="50%" />
                           <Skeleton height={48} width={36} sx={{ ml: 1 }} />
                        </>
                     )}
                  </Box>

                  <Box mt={2}>
                     <Quantity
                        {...{
                           loading: product === undefined,
                           inStock,
                           quantity: qty,
                           total: product?.quantity || 0,
                           handleIncrement,
                           handleDecrement,
                           handleAddItem
                        }}
                     />
                  </Box>

                  {product ? (
                     <Box my={2}>
                        <Divider />
                        <Box mt={3}>
                           <Typography fontWeight="light" textTransform="uppercase">
                              Details
                           </Typography>
                        </Box>
                        <Box mt={3}>
                           <Typography variant="body1" lineHeight="1.75rem">
                              {product.description}
                           </Typography>
                        </Box>
                     </Box>
                  ) : (
                     <Box my={2}>
                        <Divider />
                        <Skeleton height={48} width="33%" />
                        <Skeleton height={240} />
                     </Box>
                  )}
               </Grid>
            </Grid>
         </Container>
      </SectionHeader>
   )
}

export default ItemPage
