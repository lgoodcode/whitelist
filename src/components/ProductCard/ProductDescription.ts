import { styled, Typography } from '@mui/material'

const ProductDescription = styled(Typography)({
   lineHeight: '1.75',
   overflow: 'hidden',
   maxHeight: '8rem',
   display: '-webkit-box',
   textOverflow: 'ellipsis',
   WebkitBoxOrient: 'vertical',
   WebkitLineClamp: '5'
})

export default ProductDescription
