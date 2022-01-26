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

import type { ProductProps } from 'types'

function ProductCard({
   id,
   name,
   brand,
   images,
   price,
   discount,
   isNew,
   inStock
}: ProductProps) {
   const navigate = useNavigate()
   const handleOnClick = () => navigate(`/products/${id}`)
   const image = typeof images === 'string' ? images : images.main

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
            <CardMedia component="img" image={image} />
            <CardContent sx={{ width: '100%' }}>
               {isNew && inStock && (
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
                              sx={{
                                 textDecorationLine: 'line-through'
                              }}
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
