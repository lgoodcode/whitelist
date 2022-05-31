import { Box, Skeleton } from '@mui/material'
import type { BoxProps } from '@mui/system'
import { useState } from 'react'

export interface ImageProps extends BoxProps {
   src: string
   alt: string
   skeleton?: boolean | 'rectangular' | 'circular'
}

const Image = ({
   src,
   alt,
   skeleton = false,
   width = '100%',
   height = 'auto',
   sx = {},
   ...rest
}: ImageProps) => {
   const [imgLoaded, setImgLoaded] = useState(false)
   const handleLoad = () => setImgLoaded(true)

   if (skeleton === true) {
      skeleton = 'rectangular'
   }

   return (
      <Box position="relative" display="flex" justifyContent="center">
         <Box
            component="img"
            src={src}
            sx={{
               height,
               width: width,
               transition: 'opacity 0.3s, visibility 0.3s',
               opacity: !skeleton || imgLoaded ? 1 : 0,
               ...sx
            }}
            alt={alt}
            onLoad={handleLoad}
            {...rest}
         />
         {skeleton && !imgLoaded && (
            <Skeleton
               variant={skeleton}
               height="100%"
               sx={{
                  top: 0,
                  width: width,
                  position: 'absolute'
               }}
            />
         )}
      </Box>
   )
}

export default Image
