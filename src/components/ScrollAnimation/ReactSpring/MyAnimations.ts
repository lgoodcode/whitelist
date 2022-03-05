import React from 'react'
import Animations from './animations'
const { Fade, Zoom } = Animations

export type SpringAnimation = {
   readonly to: React.CSSProperties
   readonly from: React.CSSProperties
}

export interface MyAnimations {
   [key: string]: () => SpringAnimation
}

const animations: MyAnimations = {
   ...Fade,
   ...Zoom
}

export default animations
