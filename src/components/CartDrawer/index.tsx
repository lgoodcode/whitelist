import { ShoppingBag as ShoppingBagIcon } from '@mui/icons-material'
import { Box, Button, Divider, Drawer, Typography } from '@mui/material'

import { useAppSelector, useAppDispatch } from 'app/hooks'
import { close, selectIsOpen, selectNumItems, removeItem } from 'app/cart/cartSlice'
import CartItems from './CartItems'

function Cart() {
   const dispatch = useAppDispatch()
   const open = useAppSelector(selectIsOpen)
   const numItems = useAppSelector(selectNumItems)
   const handleClose = () => dispatch(close())
   const handleRemove = (idx: number) => dispatch(removeItem(idx))

   return (
      <Drawer open={open} anchor="right" onClose={handleClose}>
         <Box
            role="presentation"
            display="flex"
            flexDirection="column"
            height={'100%'}
            width={380}
            bgcolor="background.default"
         >
            <Box>
               <Box py={2} display="flex" alignItems="center" justifyContent="center">
                  <ShoppingBagIcon />
                  <Typography variant="h6" sx={{ ml: 0.5 }}>
                     {numItems} Item
                  </Typography>
               </Box>
               <Divider />
            </Box>

            <CartItems handleClose={handleClose} handleRemove={handleRemove} />

            <Box mt="auto">
               <Divider variant="middle" />
               <Box p={3} display="flex" flexDirection="column">
                  <Button variant="contained" color="inherit">
                     Checkout now
                  </Button>
                  <Button variant="outlined" color="inherit" sx={{ mt: 2 }}>
                     View Cart
                  </Button>
               </Box>
            </Box>
         </Box>
      </Drawer>
   )
}

export default Cart
