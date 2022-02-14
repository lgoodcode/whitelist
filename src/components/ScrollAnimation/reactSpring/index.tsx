import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated, easings } from 'react-spring'
import animations from './animations'

export interface ScrollAnimationProps {
   children: React.ReactElement
   animation: string
   /**
    * Defines the percent of the element has to be visible within the
    * viewport to set the "isIntersecting" value to true
    */
   threshold?: number
   duration?: number
   delay?: number
   easing?: string
}

const ScrollAnimation = ({
   children,
   animation,
   threshold = 30,
   duration = 1000,
   delay = 0
}: ScrollAnimationProps) => {
   const containerRef = useRef<HTMLDivElement>(null)
   const [isVisible, setIsVisible] = useState<boolean>(false)
   const [styles, api] = useSpring(() => ({
      ...animations[animation]().from
   }))
   const callback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      setIsVisible(entry.isIntersecting)

      if (entry.isIntersecting && containerRef.current) {
         // Need to pass in the properties here when starting the animation.
         // If passed in the initial config, it will trigger all animations
         // whether scrolled into view or not.
         api.start({
            ...animations[animation]().to,
            delay,
            config: {
               duration,
               easing: easings.easeInOutCubic
            }
         })
      }
   }

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const options = {
      root: null,
      rootMargin: '0px',
      threshold: threshold / 100
   }

   useEffect(() => {
      if (isVisible) return

      const observer = new IntersectionObserver(callback, options)

      if (containerRef.current) {
         observer.observe(containerRef.current)
      }

      return () => observer.disconnect()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [threshold, containerRef, isVisible, options])

   return (
      <animated.div ref={containerRef} style={styles}>
         {children}
      </animated.div>
   )
}

export default ScrollAnimation
