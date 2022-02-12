import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, useMediaQuery } from '@mui/material'
import type { PaletteMode } from '@mui/material'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { fetchProducts, selectProductsStatus } from 'app/products/productsSlice'
import Layout from 'components/Layout'
import { ComponentTheme, StyleTheme } from 'assets/theme'
import routes from 'routes'

// const lazyLoadPage = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
//    <Suspense fallback={<Loading />}>
//       <Component />
//    </Suspense>
// )

function App() {
   const dispatch = useAppDispatch()
   const { pathname } = useLocation()
   // Load products into state on app load to cache
   const productsStatus = useAppSelector(selectProductsStatus)
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
   // TODO: implement light/dark mode switch
   // eslint-disable-next-line
   const [themeMode, setThemeMode] = useState<PaletteMode>(
      prefersDarkMode ? 'light' : 'dark'
   )

   useEffect(() => {
      if (productsStatus === 'pending') {
         dispatch(fetchProducts())
      }
   }, [productsStatus, dispatch])

   // Scroll back to top when changing pages
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [pathname])

   return (
      <ThemeProvider theme={StyleTheme(themeMode)}>
         <ThemeProvider theme={ComponentTheme}>
            <CssBaseline />
            <Routes>
               <Route path="/" element={<Layout />}>
                  {routes.map(({ path, Component }) => (
                     <Route key={path} path={path} element={<Component />} />
                  ))}
               </Route>
            </Routes>
         </ThemeProvider>
      </ThemeProvider>
   )
}

export default App
