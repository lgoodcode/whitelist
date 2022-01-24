import {
   Box,
   CardActionArea,
   CardContent,
   CardMedia,
   Divider,
   Typography
} from '@mui/material'

import StyledCard from './StyledCard'
import ProductDescription from './ProductDescription'

import type { FeaturedProductProps } from 'assets/types'

function FeaturedProduct({
   name,
   brand,
   image,
   price,
   description
}: FeaturedProductProps) {
   return (
      <StyledCard>
         <CardActionArea sx={{ height: '100%' }}>
            <CardMedia component="img" image={image} />
            <CardContent>
               <Typography variant="subtitle1" color="gray">
                  {brand}
               </Typography>
               <Typography variant="h4">{name}</Typography>
               <Divider />
               <ProductDescription sx={{ mt: 1 }}>
                  {description}
               </ProductDescription>
               <Box mt={1} justifySelf="flex-end">
                  <Typography variant="h6">${price.toFixed(2)}</Typography>
               </Box>
            </CardContent>
         </CardActionArea>
      </StyledCard>
   )
}

export default FeaturedProduct
