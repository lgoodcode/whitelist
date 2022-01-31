import { Box, Typography } from '@mui/material'
import { BlockSpinner, CircleSpinner } from 'components/Spinners'

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
         <Box>{spinner === 'block' ? <BlockSpinner /> : <CircleSpinner />}</Box>
         {message && (
            <Box mt={1}>
               <Typography>Loading...</Typography>
            </Box>
         )}
      </Box>
   )
}

export default Loading
