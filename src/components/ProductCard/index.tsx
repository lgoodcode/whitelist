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

interface ProductCardProps {
  classes?: {
    card?: string
    actionArea?: string
    content?: string
    name?: string
    description?: string
  }
  key?: number | string
  name: JSX.Element | React.ReactElement | HTMLElement | string
  brand?: string
  image: string
  price: number
  description: JSX.Element | React.ReactElement | HTMLElement | string
}

function ProductCard({
  classes = {},
  name,
  brand,
  image,
  price,
  description
}: ProductCardProps) {
  return (
    <StyledCard className={classes.card}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia component="img" image={image} />
        <CardContent className={classes.content}>
          {brand && (
            <Typography variant="subtitle1" color="gray">
              {brand}
            </Typography>
          )}
          <Typography className={classes.name} variant="h4">
            {name}
          </Typography>
          <Divider />
          <ProductDescription className={classes.description} sx={{ mt: 1 }}>
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

export default ProductCard
