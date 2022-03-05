import { Box, Typography } from '@mui/material'
// For some reason the destructuring import doesn't work
import Spinners from 'components/Spinners'

export interface LoadingProps {
   spinner?: 'block' | 'circle'
   message?: boolean
}

function Loading({ spinner = 'block', message }: LoadingProps) {
   return (
      <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         minHeight="100vh"
         minWidth="100vh"
      >
         <Box>
            {spinner === 'block' ? <Spinners.BlockSpinner /> : <Spinners.CircleSpinner />}
         </Box>
         {message && (
            <Box mt={1}>
               <Typography>Loading...</Typography>
            </Box>
         )}
      </Box>
   )
}

export default Loading
