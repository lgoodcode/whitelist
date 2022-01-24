import {
   Box,
   CardActionArea,
   CardContent,
   CardMedia,
   Chip,
   Divider,
   Typography
} from '@mui/material'

import StyledCard from './StyledCard'

import type { ProductProps } from 'assets/types'

function ProductCard({
   name,
   brand,
   image,
   price,
   discount = 0,
   inventory,
   isNew = false
}: ProductProps) {
   return (
      <StyledCard>
         <CardActionArea
            sx={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between',
               height: '100%'
            }}
         >
            <CardMedia component="img" image={image} />
            <CardContent sx={{ width: '100%' }}>
               {isNew && inventory > 0 && (
                  <Chip label="NEW" color="error" sx={{ cursor: 'pointer' }} />
               )}
               {inventory == 0 && (
                  <Chip
                     label="SOLD OUT"
                     color="secondary"
                     sx={{ cursor: 'pointer' }}
                  />
               )}
               <Box mt={1}>
                  <Typography variant="subtitle1" color="text.secondary">
                     {brand}
                  </Typography>
               </Box>
               <Typography variant="h5">{name}</Typography>
               <Divider />
               <Box mt={1} display="flex" justifySelf="flex-end">
                  {discount ? (
                     <>
                        <Typography variant="h6" fontWeight="light">
                           ${(price - price * discount).toFixed(2)}
                        </Typography>
                        <Box ml={2}>
                           <Typography
                              color="GrayText"
                              variant="h6"
                              fontWeight="light"
                              sx={{
                                 textDecorationLine: 'line-through'
                              }}
                           >
                              ${price.toFixed(2)}
                           </Typography>
                        </Box>
                        <Box ml={2}>
                           <Chip
                              label={`${discount * 100}% OFF`}
                              color="error"
                           />
                        </Box>
                     </>
                  ) : (
                     <Typography variant="h6" fontWeight="light">
                        ${price.toFixed(2)}
                     </Typography>
                  )}
               </Box>
            </CardContent>
         </CardActionArea>
      </StyledCard>
   )
}

export default ProductCard
