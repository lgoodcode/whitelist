import { useEffect, useState } from 'react'

import { Routes, Route, useLocation } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, useMediaQuery } from '@mui/material'
import type { PaletteMode } from '@mui/material'

import { themeDark, themeLight } from 'assets/theme'

import Home from 'pages/Home'

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // TODO: implement light/dark mode switch
  // eslint-disable-next-line
  const [themeMode, setThemeMode] = useState<PaletteMode>(
    prefersDarkMode ? 'light' : 'dark'
  )
  const { pathname } = useLocation()

  console.log(prefersDarkMode)
  console.log('[THEME] ' + themeMode)

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <ThemeProvider theme={themeMode === 'dark' ? themeDark : themeLight}>
      {/* <ThemeProvider theme={themeLight}> */}
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}
