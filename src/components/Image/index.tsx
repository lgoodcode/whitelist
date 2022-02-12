import { Box } from '@mui/material'
import type { BoxProps } from '@mui/system'

export interface ImageProps extends BoxProps {
   src: string
   alt?: string
}

export default ({ src, alt = '', width = '100%', maxWidth = 600 }: ImageProps) => (
   <Box
      component="img"
      src={src}
      sx={{ height: 'auto', width: width, maxWidth }}
      alt={alt}
   />
)
