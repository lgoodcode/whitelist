import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material'
import React from 'react'

interface SectionProps extends BoxProps {
   children: React.ReactNode
}

const Section = ({ children, ...rest }: SectionProps): JSX.Element => (
   <Box
      component="section"
      py={{
         xs: 12,
         md: 16,
         lg: 20
      }}
      {...rest}
   >
      {children}
   </Box>
)

export default Section
