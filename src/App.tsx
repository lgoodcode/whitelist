import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, useMediaQuery } from '@mui/material'
import type { PaletteMode } from '@mui/material'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { fetchProducts, selectProductsStatus } from 'app/products/productsSlice'
import Layout from 'components/Layout'
import Theme from 'assets/theme'

// Pages
import HomePage from 'pages/Home'
// const ServicesPage = lazy(() => import('pages/Services'))
// const ProductsPage = lazy(() => import('pages/Products'))
import ProductsPage from 'pages/Products'
// const ItemPage = lazy(() => import('pages/Item'))
import ItemPage from 'pages/Item'
// const ContactPage = lazy(() => import('pages/Contact'))
// const CartPage = lazy(() => import('pages/Cart'))
// const PageNotFound = lazy(() => import('pages/404'))
import PageNotFound from 'pages/404'

// const lazyLoadPage = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
//    <Suspense fallback={<Loading />}>
//       <Component />
//    </Suspense>
// )

function App() {
   const dispatch = useAppDispatch()
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
   // TODO: implement light/dark mode switch
   // eslint-disable-next-line
   const [themeMode, setThemeMode] = useState<PaletteMode>(
      prefersDarkMode ? 'light' : 'dark'
   )
   const { pathname } = useLocation()

   // Load products into state on app load to cache
   const productsStatus = useAppSelector(selectProductsStatus)
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
      <ThemeProvider theme={Theme(themeMode)}>
         <CssBaseline />
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<HomePage />} />
               {/* <Route path="/services" element={lazyLoadPage(ServicesPage)} /> */}
               {/* <Route path="/products" element={lazyLoadPage(ProductsPage)} /> */}
               <Route path="/products" element={<ProductsPage />} />
               {/* <Route path="/products/:name" element={lazyLoadPage(ItemPage)} /> */}
               <Route path="/products/:name" element={<ItemPage />} />
               {/* <Route path="/contact" element={lazyLoadPage(ContactPage)} /> */}
               {/* <Route path="/cart" element={lazyLoadPage(CartPage)} /> */}
               {/* <Route path="*" element={lazyLoadPage(PageNotFound)} /> */}
               <Route path="*" element={<PageNotFound />} />
            </Route>
         </Routes>
      </ThemeProvider>
   )
}

export default App
