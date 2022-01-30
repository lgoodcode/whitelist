import { Alert, Snackbar } from '@mui/material'
import type { AlertProps } from '@mui/material'

function Toast({
   open,
   handleClose,
   message,
   severity = 'success',
   bgcolor = 'background.paper',
   ...rest
}: {
   open: boolean
   handleClose: () => void
   message: string
   severity?: AlertProps['severity']
   bgcolor?: string
}) {
   return (
      <Snackbar
         open={open}
         autoHideDuration={1500}
         onClose={handleClose}
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
         }}
      >
         <Alert
            severity={severity}
            variant="filled"
            sx={{ width: '100%', bgcolor }}
            onClose={handleClose}
            {...rest}
         >
            {message}
         </Alert>
      </Snackbar>
   )
}

export default Toast
