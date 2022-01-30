import { Stack, Typography, Box, Chip } from '@mui/material'
import { formatPrice } from 'utilities'
import type { Product } from 'types'

interface PriceDisplay {
   inStock: boolean
   isnew: Product['isnew']
   discount: Product['discount']
   price: Product['price']
}

function Price({ inStock, isnew, discount, price }: PriceDisplay) {
   return (
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
         <Box ml={2} display="flex" alignItems="center">
            {!inStock && (
               <Chip
                  color="secondary"
                  label={
                     <Typography variant="h6" textTransform="uppercase">
                        Sold Out
                     </Typography>
                  }
               />
            )}
            {inStock && discount > 0 && (
               <Chip
                  color="error"
                  label={
                     <Typography variant="h6" textTransform="uppercase">
                        {discount * 100}% OFF
                     </Typography>
                  }
               />
            )}
            {inStock && isnew && (
               <Chip
                  color="error"
                  label={
                     <Typography variant="h6" textTransform="uppercase">
                        New
                     </Typography>
                  }
               />
            )}
         </Box>
      </Stack>
   )
}

export default Price
