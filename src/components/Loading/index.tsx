import { Box, CircularProgress } from '@mui/material'

function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      minWidth="100vh"
    >
      <CircularProgress />
    </Box>
  )
}

export default Loading
