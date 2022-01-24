import { useEffect, useState, lazy, Suspense } from 'react'

import { Routes, Route, useLocation } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, useMediaQuery } from '@mui/material'
import type { PaletteMode } from '@mui/material'

// Theme
import Theme from 'assets/Theme'

// Preloader
import Loading from 'components/Loading'

// Pages
import HomePage from 'pages/Home'
const ServicesPage = lazy(() => import('pages/Services'))
const ProductsPage = lazy(() => import('pages/Products'))
const ContactPage = lazy(() => import('pages/Contact'))

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // TODO: implement light/dark mode switch
  // eslint-disable-next-line
  const [themeMode, setThemeMode] = useState<PaletteMode>(
    prefersDarkMode ? 'light' : 'dark'
  )
  const { pathname } = useLocation()

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <ThemeProvider theme={Theme(themeMode)}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/services"
          element={
            <Suspense fallback={<Loading />}>
              <ServicesPage />
            </Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <Suspense fallback={<Loading />}>
              <ProductsPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <ContactPage />
            </Suspense>
          }
        />
      </Routes>
    </ThemeProvider>
  )
}

export default App
