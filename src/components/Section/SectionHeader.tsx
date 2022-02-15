import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material'
import React from 'react'

interface SectionProps extends BoxProps {
   children: React.ReactNode
}

const SectionHeader = ({ children, ...rest }: SectionProps): JSX.Element => (
   <Box
      className="section-header"
      component="section"
      pt={{
         xs: 16,
         lg: 24
      }}
      pb="10vw"
      {...rest}
   >
      {children}
   </Box>
)

export default SectionHeader
