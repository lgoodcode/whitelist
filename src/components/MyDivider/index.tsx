import { Box, Divider } from '@mui/material'
import type { BoxProps, DividerProps } from '@mui/material'

interface MyDividerProps {
   boxProps?: BoxProps
   dividerProps?: DividerProps
}

export default ({ boxProps, dividerProps }: MyDividerProps) => (
   <Box {...boxProps}>
      <Divider {...dividerProps} sx={{ borderColor: '#5cfff3', ...dividerProps?.sx }} />
   </Box>
)
