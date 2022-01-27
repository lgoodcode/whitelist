import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface CartState {
   isOpen: boolean
}

const initialState: CartState = {
   isOpen: false
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState, // Type will be inferred
   reducers: {
      open: () => ({ isOpen: true }),
      close: (state: CartState) => {
         state.isOpen = false
      }
   }
})

export const { open, close } = cartSlice.actions
// Selector; allows us to retrive the value from the store without having to directly
// use the redux store
export const selectIsOpen = (state: RootState) => state.cart.isOpen

export default cartSlice.reducer
