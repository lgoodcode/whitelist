import { createSlice } from '@reduxjs/toolkit'

interface CartState {
   isOpen: boolean
}

const initialState: CartState = {
   isOpen: false
}

const cartSlice = createSlice({
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

export default cartSlice.reducer
