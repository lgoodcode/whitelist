import { Box } from '@mui/material'
import Spinner from 'components/Spinner'

function Loading() {
   return (
      <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         minHeight="100vh"
         minWidth="100vh"
      >
         <Spinner />
      </Box>
   )
}

export default Loading
