import {
   Box,
   CardActionArea,
   CardContent,
   CardMedia,
   Chip,
   Divider,
   Skeleton,
   Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import StyledCard from './StyledCard'
import ProductDescription from './ProductDescription'
import type { Product } from 'types'
import { formatPrice } from 'utilities'

interface ProductCardProps {
   product: Product
   useDesc?: boolean
}

function ProductCard({ product, useDesc = true }: ProductCardProps) {
   const navigate = useNavigate()
   const handleOnClick = () =>
      product ? navigate(`/products/${product.name}`) : () => null
   const inStock = product?.quantity > 0

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
            {product ? (
               <CardMedia component="img" src={product.images[0]} />
            ) : (
               <Skeleton variant="rectangular" width="100%" height={335} />
            )}

            <CardContent sx={{ width: '100%' }}>
               <Box>
                  {product?.isnew && inStock && (
                     <Chip label="NEW" color="error" sx={{ mr: 1 }} />
                  )}
                  {product && !inStock && <Chip label="SOLD OUT" sx={{ mr: 1 }} />}
                  {product?.discount > 0 && (
                     <Chip
                        label={`${product.discount * 100}% OFF`}
                        color="error"
                        sx={{ mr: 1 }}
                     />
                  )}
               </Box>

               <Box mt={1}>
                  <Typography variant="subtitle1" color="gray">
                     {product ? product.brand : <Skeleton />}
                  </Typography>

                  <Typography variant="h5">
                     {product ? product.name : <Skeleton />}
                  </Typography>
               </Box>

               {product && <Divider sx={{ my: 1 }} />}

               {useDesc && (
                  <Box mt={1}>
                     {product ? (
                        <ProductDescription text={product.description} />
                     ) : (
                        <Skeleton variant="rectangular" height={120} />
                     )}
                  </Box>
               )}

               <Box mt={1} display="flex" flexDirection="row">
                  {product ? (
                     product?.discount > 0 ? (
                        <>
                           <Typography variant="h6" fontWeight="light">
                              $
                              {formatPrice(
                                 product.price - product.price * product.discount
                              )}
                           </Typography>
                           <Box ml={2}>
                              <Typography
                                 color="GrayText"
                                 variant="h6"
                                 fontWeight="light"
                                 sx={{ textDecorationLine: 'line-through' }}
                              >
                                 ${product.price.toFixed(2)}
                              </Typography>
                           </Box>
                        </>
                     ) : (
                        <Typography variant="h6" fontWeight="light">
                           ${formatPrice(product.price)}
                        </Typography>
                     )
                  ) : (
                     <Typography variant="h4">
                        <Skeleton width="50%" />
                     </Typography>
                  )}
               </Box>
            </CardContent>
         </CardActionArea>
      </StyledCard>
   )
}

export default ProductCard
