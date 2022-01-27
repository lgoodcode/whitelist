import { Delete as DeleteIcon, ShoppingBag as ShoppingBagIcon } from '@mui/icons-material'
import {
   Avatar,
   Box,
   Button,
   Divider,
   Drawer,
   IconButton,
   List,
   ListItem,
   Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { close, selectIsOpen } from 'app/reducers/cartReducer'

import Products from 'data/products'

function Cart() {
   const cartOpen = useSelector(selectIsOpen)
   const dispatch = useDispatch()
   const handleClose = () => dispatch(close())

   const item = Products[1]
   const imageSrc = typeof item.images === 'string' ? item.images : item.images.main

   return (
      <Drawer open={cartOpen} anchor="right" onClose={handleClose}>
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
                     1 Item
                  </Typography>
               </Box>
               <Divider />
            </Box>
            <Box>
               <List>
                  <ListItem
                     divider
                     secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                           <DeleteIcon />
                        </IconButton>
                     }
                  >
                     <Box>
                        <Link to={`/products/${item.id}`} onClick={handleClose}>
                           <Avatar
                              alt={item.name}
                              src={imageSrc}
                              sx={{ mx: 2, height: '80px', width: '80px' }}
                           />
                        </Link>
                     </Box>
                     <Box ml={2}>
                        <Link to={`/products/${item.id}`} onClick={handleClose}>
                           <Typography
                              variant="body1"
                              color="text.primary"
                              sx={{ textDecoration: 'none' }}
                           >
                              {item.name}
                           </Typography>
                        </Link>
                        <Typography variant="caption" fontWeight="light">
                           $1,200 x 1
                        </Typography>
                        <Typography variant="body1" fontWeight="bold" sx={{ mt: 1 }}>
                           $1,200
                        </Typography>
                     </Box>
                  </ListItem>
               </List>
            </Box>
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
