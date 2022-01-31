import {
   Box,
   CardActionArea,
   CardContent,
   CardMedia,
   Divider,
   Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import StyledCard from './StyledCard'
import ProductDescription from './ProductDescription'
import type { Product } from 'types'

function FeaturedProduct({ name, brand, images, price, description }: Product) {
   const navigate = useNavigate()
   const handleOnClick = () => navigate(`/products/${name}`)

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
            <CardMedia component="img" image={images[0]} height={285} />
            {/* <CardMedia component={} /> */}
            <CardContent sx={{ width: '100%' }}>
               <Typography variant="subtitle1" color="gray">
                  {brand}
               </Typography>
               <Typography variant="h4">{name}</Typography>
               <Divider />
               <ProductDescription sx={{ mt: 1 }}>{description}</ProductDescription>
               <Box mt={1} display="flex" justifySelf="flex-end">
                  <Typography variant="h6">
                     ${price.toLocaleString('en-us') + '.00'}
                  </Typography>
               </Box>
            </CardContent>
         </CardActionArea>
      </StyledCard>
   )
}

export default FeaturedProduct
