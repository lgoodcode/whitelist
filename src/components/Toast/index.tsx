import { Alert, Slide, Snackbar } from '@mui/material'
import type { AlertProps } from '@mui/material'
import { useSpring } from 'react-spring'
import Lifebar from './Lifebar'
import { useEffect } from 'react'

interface ToastProps {
   open: boolean
   handleClose: () => void
   message: string
   severity?: AlertProps['severity']
   bgcolor?: string
   lifetime?: number
}

function Toast({
   open,
   handleClose,
   message,
   severity,
   bgcolor,
   lifetime = 3000,
   ...rest
}: ToastProps) {
   const [styles, api] = useSpring(() => {})

   useEffect(() => {
      api.start({
         from: {
            right: '100%'
         },
         to: {
            right: '0%'
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
         TransitionComponent={(props) => <Slide {...props} direction="down" />}
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
         }}
      >
         <Alert
            severity={severity}
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
