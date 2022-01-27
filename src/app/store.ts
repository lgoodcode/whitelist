import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from './reducers/rootReducer'

const store = configureStore({
   reducer: rootReducer,
   middleware: [logger] as const
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export default store
