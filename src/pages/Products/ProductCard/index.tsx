import {
   Box,
   CardActionArea,
   CardContent,
   CardMedia,
   Chip,
   Divider,
   Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import StyledCard from './StyledCard'
import { formatPrice } from 'utilities'
import type { Product } from 'types'

function ProductCard({ brand, name, price, quantity, discount, isnew, images }: Product) {
   const navigate = useNavigate()
   const handleOnClick = () => navigate(`/products/${name}`)
   const inStock = quantity > 0

   return (
      <StyledCard>
         <CardActionArea
            onClick={handleOnClick}
            sx={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between',
               height: '100%'
            }}
         >
            <CardMedia component="img" image={images[0]} />
            <CardContent sx={{ width: '100%' }}>
               {isnew && inStock && (
                  <Chip label="NEW" color="error" sx={{ cursor: 'pointer' }} />
               )}
               {!inStock && (
                  <Chip label="SOLD OUT" color="secondary" sx={{ cursor: 'pointer' }} />
               )}
               <Box mt={1}>
                  <Typography variant="subtitle1" color="text.secondary">
                     {brand}
                  </Typography>
               </Box>
               <Typography variant="h5">{name}</Typography>
               <Divider />
               <Box mt={1} display="flex" justifySelf="flex-end">
                  {discount > 0 ? (
                     <>
                        <Typography variant="h6" fontWeight="light">
                           ${formatPrice(price - price * discount)}
                        </Typography>
                        <Box ml={2}>
                           <Typography
                              color="GrayText"
                              variant="h6"
                              fontWeight="light"
                              sx={{ textDecorationLine: 'line-through' }}
                           >
                              ${price.toFixed(2)}
                           </Typography>
                        </Box>
                        <Box ml={2}>
                           <Chip label={`${discount * 100}% OFF`} color="error" />
                        </Box>
                     </>
                  ) : (
                     <Typography variant="h6" fontWeight="light">
                        ${formatPrice(price)}
                     </Typography>
                  )}
               </Box>
            </CardContent>
         </CardActionArea>
      </StyledCard>
   )
}

export default ProductCard
