import { Transition } from 'react-transition-group'
import type { SlideProps } from '@mui/material'
import { useEffect, useState } from 'react'

interface ImageFadeProps {
   children: React.ReactElement
   direction: SlideProps['direction']
   duration: number
   delay?: 0
}

export default ({
   children,
   direction = 'up',
   duration = 500,
   delay = 0
}: ImageFadeProps) => {
   const [isIn, setIsIn] = useState<boolean>(delay === 0)
   const directionProperty = direction.match(/up|down/) ? 'top' : 'left'
   const directionStart = directionProperty.match(/up|right/) ? 250 : 0
   const directionAmount =
      (directionProperty.match(/up|right/) ? 0 : 250) *
      (direction.match(/down|right/) ? -1 : 1)
   const defaultStyles = {
      opacity: 0,
      [directionProperty]: duration,
      transition: `opacity ${
         duration * 1.5
      }ms ease-in-out, ${directionProperty} ${duration}ms ease-in-out`
   }

   const transitionStyles = {
      entering: { opacity: 1, [directionProperty]: directionStart },
      entered: { opacity: 1, [directionProperty]: directionStart },
      exiting: { opacity: 0, [directionProperty]: directionAmount },
      exited: { opacity: 0, [directionProperty]: directionAmount },
      unmounted: { opacity: 0, [directionProperty]: directionAmount }
   }

   useEffect(() => {
      if (delay > 0) {
         setTimeout(() => setIsIn(true), delay)
      }
   })

   return (
      <Transition in={isIn} appear timeout={duration}>
         {(state) => (
            <div
               style={{
                  position: 'relative',
                  ...defaultStyles,
                  ...transitionStyles[state]
               }}
            >
               {children}
            </div>
         )}
      </Transition>
   )
}
