import { Box, Fade, Slide } from '@mui/material'
import type { BoxProps, SlideProps } from '@mui/material'
import { useEffect, useState } from 'react'

interface ElementFadeProps extends BoxProps {
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
}: ElementFadeProps): JSX.Element => {
   const [isIn, setIsIn] = useState<boolean>(In && delay === 0)

   useEffect(() => {
      if (delay > 0) {
         setTimeout(() => setIsIn(true), delay)
      }
   })

   return (
      <Box {...otherProps}>
         <Slide in={isIn} timeout={timeout} direction={direction} unmountOnExit>
            <div>
               <Fade in={isIn} timeout={timeout} easing="ease-in" unmountOnExit>
                  {children}
               </Fade>
            </div>
         </Slide>
      </Box>
   )
}
