import { Box, Fade, Slide } from '@mui/material'
import type { BoxProps, SlideProps } from '@mui/material'
import { useEffect, useState } from 'react'

interface SlideFadeProps extends BoxProps {
   children: React.ReactElement
   direction?: SlideProps['direction']
   in?: boolean
   timeout?: number
   delay?: number
}

export default ({
   children,
   direction = 'up',
   in: In = true,
   timeout = 1000,
   delay = 0,
   ...otherProps
}: SlideFadeProps): JSX.Element => {
   const [isIn, setIsIn] = useState<boolean>(In && delay === 0)

   useEffect(() => {
      if (delay > 0) {
         setTimeout(() => setIsIn(true), delay)
      }
   }, [delay])

   return (
      <Box {...otherProps}>
         <Slide in={isIn} timeout={timeout} direction={direction}>
            <div>
               <Fade in={isIn} timeout={timeout} easing="ease-in">
                  {children}
               </Fade>
            </div>
         </Slide>
      </Box>
   )
}
