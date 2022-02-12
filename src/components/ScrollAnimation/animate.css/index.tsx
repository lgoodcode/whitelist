import React, { useEffect, useRef, useState } from 'react'

export interface ScrollAnimationProps {
   children: React.ReactElement
   animation: string
   /**
    * Defines the percent of the element has to be visible within the
    * viewport to set the "isIntersecting" value to true
    */
   threshold?: number
   animateOnce?: boolean
   duration?: number | string
   delay?: number | string
   repeat?: 1 | 2 | 3 | 'infinite'
}

const ScrollAnimation = ({
   children,
   animation,
   threshold = 50,
   duration = 1000,
   delay = 0,
   repeat = undefined
}: ScrollAnimationProps) => {
   if (threshold < 0 || threshold > 100) {
      throw new Error('Invalid threshold supplied. Must be within range of 0 and 100')
   }

   const containerRef = useRef<HTMLDivElement>(null)
   const [isVisible, setIsVisible] = useState<boolean>(false)
   const animationClass = [
      ` animate__animated animate__${animation}`,
      repeat ? ` animate__${repeat === 'infinite' ? 'infinite' : `repeat-${repeat}`}` : ''
   ].join('')
   const animationDuration = typeof duration === 'number' ? `${duration}ms` : duration
   const animationDelay = typeof delay === 'number' ? `${delay}ms` : delay

   const callback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      setIsVisible(entry.isIntersecting)

      if (entry.isIntersecting && containerRef.current) {
         containerRef.current.style.visibility = 'visible'
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
         containerRef.current.style.visibility = 'hidden'
      }

      return () => observer.disconnect()
   }, [threshold, containerRef, isVisible, options])

   return (
      <div
         ref={containerRef}
         style={{ animationDuration, animationDelay }}
         className={['scrollAnimaton', isVisible ? animationClass : undefined].join('')}
      >
         {children}
      </div>
   )
}

export default ScrollAnimation
