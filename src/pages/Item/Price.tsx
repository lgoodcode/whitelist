import { Typography, Box, Chip, Skeleton } from '@mui/material'
import { formatPrice } from 'utilities'
import type { Product } from 'types'

interface PriceDisplay {
   inStock: boolean
   product?: Product
}

function Price({ inStock, product }: PriceDisplay) {
   return (
      <Box
         mt={2}
         display="flex"
         flexDirection="row"
         alignItems="center"
         sx={{
            color: !inStock ? 'gray' : ''
         }}
      >
         {product ? (
            <Typography
               variant="h5"
               fontWeight="light"
               color={product.discount > 0 ? 'gray' : ''}
               sx={{
                  textDecorationLine: product.discount > 0 ? 'line-through' : ''
               }}
            >
               ${formatPrice(product.price)}
            </Typography>
         ) : (
            <Skeleton height={64} width="40%" />
         )}

         {product && inStock && product.discount > 0 && (
            <Typography variant="h5" fontWeight="light" sx={{ ml: 1 }}>
               ${formatPrice(product.price - product.price * product.discount)}
            </Typography>
         )}

         <Typography variant="h5" fontWeight="regular" sx={{ ml: 1 }}>
            USD
         </Typography>

         {product && (
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
               {inStock && product.discount > 0 && (
                  <Chip
                     color="error"
                     label={
                        <Typography variant="h6" textTransform="uppercase">
                           {product.discount * 100}% OFF
                        </Typography>
                     }
                  />
               )}
               {inStock && product.isnew && (
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
         )}
      </Box>
   )
}

export default Price
