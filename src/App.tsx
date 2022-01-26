import React, { useEffect, useState, lazy, Suspense } from 'react'

import { Routes, Route, useLocation } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, useMediaQuery } from '@mui/material'
import type { PaletteMode } from '@mui/material'

import Theme from 'assets/theme'
import Loading from 'components/Loading'
import Layout from 'components/Layout'

// Pages
import HomePage from 'pages/Home'
const ServicesPage = lazy(() => import('pages/Services'))
const ProductsPage = lazy(() => import('pages/Products'))
const ItemPage = lazy(() => import('pages/Item'))
const ContactPage = lazy(() => import('pages/Contact'))

const lazyLoadPage = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
   <Suspense fallback={<Loading />}>
      <Component />
   </Suspense>
)

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
            <Route path="/" element={<Layout />}>
               <Route index element={<HomePage />} />
               <Route path="/services" element={lazyLoadPage(ServicesPage)} />
               <Route path="/products" element={lazyLoadPage(ProductsPage)} />
               <Route path="/products/:id" element={lazyLoadPage(ItemPage)} />
               <Route path="/contact" element={lazyLoadPage(ContactPage)} />
            </Route>
         </Routes>
      </ThemeProvider>
   )
}

export default App
