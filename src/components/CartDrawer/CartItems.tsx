import { Delete as DeleteIcon } from '@mui/icons-material'
import { Box, List, ListItem, IconButton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Image from 'components/Image'
import { formatPrice } from 'helpers'
import { useAppSelector } from 'app/hooks'
import { selectCartItems } from 'app/reducers/cart/cartSlice'

function CartItems({
   handleClose,
   handleRemove
}: {
   handleClose: () => void
   handleRemove: (idx: number) => void
}) {
   const cart = useAppSelector(selectCartItems)
   const hasCartItems = cart.length > 0

   return (
      <Box overflow="auto" height="calc((100vh - 64px) - 140px)">
         {!hasCartItems ? (
            <Box height="100%" display="flex" alignItems="center" justifyContent="center">
               <Typography>No items</Typography>
            </Box>
         ) : (
            <List>
               {cart.map((item, idx) => (
                  <ListItem
                     key={idx}
                     divider
                     secondaryAction={
                        <IconButton
                           edge="end"
                           aria-label="remove item"
                           onClick={() => handleRemove(idx)}
                        >
                           <DeleteIcon />
                        </IconButton>
                     }
                  >
                     <Box width={100}>
                        <Link to={`/products/${item.product.name}`} onClick={handleClose}>
                           <Image
                              skeleton="circular"
                              alt={item.product.name}
                              src={item.product.images[0]}
                           />
                        </Link>
                     </Box>
                     <Box ml={2}>
                        <Link to={`/products/${item.product.name}`} onClick={handleClose}>
                           <Typography
                              variant="body1"
                              color="text.primary"
                              sx={{ textDecoration: 'none' }}
                           >
                              {item.product.name}
                           </Typography>
                        </Link>
                        <Typography variant="caption" fontWeight="light">
                           $
                           {formatPrice(item.product.price * (1 - item.product.discount))}{' '}
                           x {item.quantity}
                        </Typography>
                        <Typography variant="body1" fontWeight="bold" sx={{ mt: 1 }}>
                           $
                           {formatPrice(
                              item.product.price *
                                 (1 - item.product.discount) *
                                 item.quantity
                           )}
                        </Typography>
                     </Box>
                  </ListItem>
               ))}
            </List>
         )}
      </Box>
   )
}

export default CartItems
