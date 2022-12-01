import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { fetchProducts, selectProductsStatus } from 'app/reducers/products/productsSlice'
import Layout from 'components/Layout'
import { ComponentTheme, StyleTheme } from 'assets/theme'
import routes from 'routes'
import BackToTop from 'components/BackToTop'
import Logo from 'pages/Logo'

function App() {
   const dispatch = useAppDispatch()
   const { key } = useLocation()
   // Load products into state on app load to cache
   const productsStatus = useAppSelector(selectProductsStatus)

   useEffect(() => {
      if (productsStatus === 'pending') {
         dispatch(fetchProducts())
      }
   }, [productsStatus, dispatch])

   // Scroll back to top when changing pages. Uses the key of the location,
   // which changes every time because if we are on the same page we change
   // to, we still want it to scroll to top
   useEffect(() => {
      window.scrollTo(0, 0)
      return window.scrollTo(0, 0)
   }, [key])

   return (
      <ThemeProvider theme={StyleTheme('dark')}>
         <ThemeProvider theme={ComponentTheme}>
            <CssBaseline />
            <BackToTop />
            <Routes>
               <Route path="/" element={<Layout />}>
                  {routes.map(({ path, Component }) => (
                     <Route key={path} path={path} element={<Component />} />
                  ))}
               </Route>
               <Route path="/logo" element={<Logo />} />
            </Routes>
         </ThemeProvider>
      </ThemeProvider>
   )
}

export default App
