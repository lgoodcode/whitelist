import { styled } from '@mui/material'
import { animated } from 'react-spring'

const Lifebar = styled(animated.div)({
   position: 'absolute',
   bottom: 0,
   left: 0,
   width: 'auto',
   backgroundImage: 'linear-gradient(130deg, #00b4e6, #00f0e0)',
   height: 5
})

export default Lifebar
