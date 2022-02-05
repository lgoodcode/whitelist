import { Alert, Snackbar } from '@mui/material'
import type { AlertProps } from '@mui/material'

interface ToastProps {
   open: boolean
   handleClose: () => void
   message: string
   severity?: AlertProps['severity']
   bgcolor?: string
}

function Toast({
   open,
   handleClose,
   message,
   severity,
   bgcolor = 'background.paper',
   ...rest
}: ToastProps) {
   return (
      <Snackbar
         open={open}
         autoHideDuration={3000}
         onClose={handleClose}
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
               bgcolor: !severity ? bgcolor : undefined
            }}
            onClose={handleClose}
            {...rest}
         >
            {message}
         </Alert>
      </Snackbar>
   )
}

export default Toast
