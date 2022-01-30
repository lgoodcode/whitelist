import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'
import { Box, Button, Fab, TextField, Typography } from '@mui/material'
import { selectAlertOpen, closeAlert } from 'app/cart/cartSlice'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import Toast from 'components/Toast'

function Quantity({
   inStock,
   quantity,
   total,
   handleIncrement,
   handleDecrement,
   handleAddItem
}: {
   inStock: boolean
   quantity: number
   total: number
   handleIncrement: () => void
   handleDecrement: () => void
   handleAddItem: () => void
}): JSX.Element {
   const dispatch = useAppDispatch()
   const open = useAppSelector(selectAlertOpen)
   const handleClose = () => dispatch(closeAlert())

   return (
      <Box>
         <Box>
            <Typography variant="body1">Select desired quantity</Typography>
         </Box>
         <Box mt={1} display="flex" alignItems="center">
            <Fab
               aria-label="increment quantity"
               disabled={!inStock}
               size="small"
               onClick={handleIncrement}
               sx={{ border: '1px solid rgb(156 163 175 / 0.4)' }}
            >
               <AddIcon />
            </Fab>
            <TextField
               disabled={!inStock}
               value={quantity}
               inputProps={{
                  readOnly: true,
                  inputMode: 'numeric',
                  min: 0,
                  max: total,
                  style: { textAlign: 'center' }
               }}
               sx={{
                  mx: 1,
                  width: '4rem',
                  border: '1px solid rgb(156 163 175 / 0.4)',
                  borderRadius: 1
               }}
            />
            <Fab
               aria-label="decrement quantity"
               disabled={!inStock}
               size="small"
               onClick={handleDecrement}
               sx={{ border: '1px solid rgb(156 163 175 / 0.4)' }}
            >
               <RemoveIcon />
            </Fab>
         </Box>

         <Box mt={2}>
            {inStock ? (
               <Button
                  fullWidth
                  variant="contained"
                  color="inherit"
                  onClick={handleAddItem}
               >
                  Add to Cart
               </Button>
            ) : (
               <Button fullWidth variant="outlined" color="primary" disabled>
                  Sold Out
               </Button>
            )}
         </Box>

         <Toast open={open} handleClose={handleClose} message="Item Added to Cart" />
      </Box>
   )
}

export default Quantity
