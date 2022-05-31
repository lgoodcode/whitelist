import { Box, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { ArrowUpward } from '@mui/icons-material'

export default function BackToTop() {
   const [opacity, setOpacity] = useState<0 | 1>(0)
   const handleClick = () => window.scrollTo(0, 0)

   useEffect(() => {
      const onScroll = () => {
         setOpacity(window.scrollY > window.innerHeight / 2 ? 1 : 0)
      }
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
   }, [])

   return (
      <Box
         className="back-to-top"
         position="fixed"
         bottom={75}
         right={75}
         justifyContent="center"
         zIndex={10}
         sx={{
            opacity,
            borderRadius: '50%',
            transition: 'opacity 300ms linear'
         }}
      >
         <Button
            size="large"
            color="primary"
            variant="contained"
            sx={{ py: 2, px: 2 }}
            onClick={handleClick}
         >
            <ArrowUpward />
         </Button>
      </Box>
   )
}
