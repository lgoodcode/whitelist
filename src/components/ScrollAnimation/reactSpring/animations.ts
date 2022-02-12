import React from 'react'
import Fade from './animations/fade'
import Zoom from './animations/zoom'

export type SpringAnimation = {
   to: React.CSSProperties
   from: React.CSSProperties
}

export interface MyAnimations {
   [key: string]: () => SpringAnimation
}

const animations: MyAnimations = {
   ...Fade,
   ...Zoom
}

export default animations
