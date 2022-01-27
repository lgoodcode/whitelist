import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'
import { Box, Fab, TextField, Typography } from '@mui/material'
import { useState } from 'react'

function Quantity({
   inStock,
   quantity
}: {
   inStock: boolean
   quantity: number
}): JSX.Element {
   const [qty, setQty] = useState<number>(0)
   const handleAdd = () => {
      if (qty < quantity) setQty(qty + 1)
   }
   const handleMinus = () => {
      if (qty > 0) setQty(qty - 1)
   }

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
               onClick={handleAdd}
               sx={{ border: '1px solid rgb(156 163 175 / 0.4)' }}
            >
               <AddIcon />
            </Fab>
            <TextField
               disabled={!inStock}
               value={qty}
               inputProps={{
                  readOnly: true,
                  inputMode: 'numeric',
                  min: 0,
                  max: qty,
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
               onClick={handleMinus}
               sx={{ border: '1px solid rgb(156 163 175 / 0.4)' }}
            >
               <RemoveIcon />
            </Fab>
         </Box>
      </Box>
   )
}

export default Quantity
