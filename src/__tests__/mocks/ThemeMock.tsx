import { ThemeProvider } from '@mui/material/styles'
import type { ReactNode } from 'react'
import { StyleTheme, ComponentTheme } from 'assets/theme'

const ThemeMock = ({ children }: { children: ReactNode }) => (
   <ThemeProvider theme={StyleTheme('dark')}>
      <ThemeProvider theme={ComponentTheme}>{children}</ThemeProvider>
   </ThemeProvider>
)

export default ThemeMock
