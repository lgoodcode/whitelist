import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'

import rootReducer from './reducers/rootReducer'

const store = configureStore({
   reducer: rootReducer,
   middleware: [logger] as const
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Export a hook that can be reused to resolve types
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
