import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import cartReducer from './cart/cartSlice'
import productsReducer from './products/productsSlice'

const devMiddleware = process.env.NODE_ENV !== 'development' ? [] : [logger]

const store = configureStore({
   reducer: {
      cart: cartReducer,
      products: productsReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(devMiddleware)
})

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type from the store reducers
export type AppDispatch = typeof store.dispatch

export default store
