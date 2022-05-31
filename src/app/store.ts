import { configureStore } from '@reduxjs/toolkit'
import middleware from './middleware'
import cartReducer from './reducers/cart/cartSlice'
import coursesReducer from './reducers/courses/coursesSlice'
import productsReducer from './reducers/products/productsSlice'

const store = configureStore({
   reducer: {
      cart: cartReducer,
      courses: coursesReducer,
      products: productsReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type from the store reducers
export type AppDispatch = typeof store.dispatch

export default store
