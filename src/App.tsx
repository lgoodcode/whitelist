import React, { useEffect, useState, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, useMediaQuery } from '@mui/material'
import type { PaletteMode } from '@mui/material'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { fetchProducts, selectStatus } from 'app/products/productsSlice'
import Scrollbar from 'components/Scrollbar'
import Loading from 'components/Loading'
import Layout from 'components/Layout'
import Theme from 'assets/theme'

// Pages
import HomePage from 'pages/Home'
// const ServicesPage = lazy(() => import('pages/Services'))
const ProductsPage = lazy(() => import('pages/Products'))
const ItemPage = lazy(() => import('pages/Item'))
const ContactPage = lazy(() => import('pages/Contact'))
const CartPage = lazy(() => import('pages/Cart'))
const PageNotFound = lazy(() => import('pages/404'))

const lazyLoadPage = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
   <Suspense fallback={<Loading />}>
      <Component />
   </Suspense>
)

function App() {
   const dispatch = useAppDispatch()
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
   // TODO: implement light/dark mode switch
   // eslint-disable-next-line
   const [themeMode, setThemeMode] = useState<PaletteMode>(
      prefersDarkMode ? 'light' : 'dark'
   )
   const { pathname } = useLocation()

   // Load products into state
   const productsStatus = useAppSelector(selectStatus)
   useEffect(() => {
      if (productsStatus === 'pending') {
         dispatch(fetchProducts())
      }
   }, [productsStatus, dispatch])

   // Setting page scroll to 0 when changing the route
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [pathname])

   return (
      <ThemeProvider theme={Theme(themeMode)}>
         <CssBaseline />
         <Scrollbar mode={themeMode}>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  {/* <Route path="/services" element={lazyLoadPage(ServicesPage)} /> */}
                  <Route path="/products" element={lazyLoadPage(ProductsPage)} />
                  <Route path="/products/:name" element={lazyLoadPage(ItemPage)} />
                  <Route path="/contact" element={lazyLoadPage(ContactPage)} />
                  <Route path="/cart" element={lazyLoadPage(CartPage)} />
                  <Route path="*" element={lazyLoadPage(PageNotFound)} />
               </Route>
            </Routes>
         </Scrollbar>
      </ThemeProvider>
   )
}

export default App
