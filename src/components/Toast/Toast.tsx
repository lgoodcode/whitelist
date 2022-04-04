import { Alert, Snackbar } from '@mui/material'
import type { AlertColor } from '@mui/material'
import { useSpring } from 'react-spring'
import Lifebar from './Lifebar'
import { useEffect } from 'react'

interface ToastProps {
   open: boolean
   handleClose: () => void
   message: string
   color?: AlertColor
   bgcolor?: string
   lifetime?: number
}

function Toast({
   open,
   handleClose,
   message,
   color,
   bgcolor,
   lifetime = 3000,
   ...rest
}: ToastProps) {
   const [styles, api] = useSpring(() => ({
      right: '100%'
   }))

   useEffect(() => {
      api.start({
         from: {
            right: '100%'
         },
         to: {
            right: open ? '0%' : '100%'
         },
         config: {
            duration: lifetime
         }
      })
   }, [open, api, lifetime])

   return (
      <Snackbar
         open={open}
         autoHideDuration={lifetime}
         onClose={handleClose}
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
         }}
      >
         <Alert
            severity={color}
            variant="filled"
            sx={{
               xs: { width: '75%' },
               md: { width: '100%' },
               mt: { xs: 4, md: 0 },
               pb: 1.5,
               boxShadow: 5,
               bgcolor
            }}
            onClose={handleClose}
            {...rest}
         >
            {message}
            <Lifebar style={styles} />
         </Alert>
      </Snackbar>
   )
}

export default Toast
