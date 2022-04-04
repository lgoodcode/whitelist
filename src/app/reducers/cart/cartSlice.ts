import { createSlice } from '@reduxjs/toolkit'
import { getCart, setCart } from './cart'
import type { RootState } from '../../store'
import type { Product } from 'types'

export type CartItem = {
   product: Product
   quantity: number
}

export interface CartState {
   isOpen: boolean
   items: CartItem[]
}

const initialState: CartState = {
   isOpen: false,
   items: getCart()
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      open: (state) => {
         state.isOpen = true
      },
      close: (state) => {
         state.isOpen = false
      },
      setItem: (state, { payload }) => {
         const { product, quantity } = payload as CartItem
         let idx = -1

         if (quantity < 1) {
            return
         }

         if (state.items.length > 0) {
            idx = state.items.findIndex((item) => item.product.id === product.id)
         }

         if (idx === -1) {
            state.items = [...state.items, payload]
         } else {
            state.items[idx].quantity = quantity
         }
      },
      removeItem: (state, action: { payload: number }) => {
         const idx = action.payload
         const items = state.items

         if (idx > -1) {
            items.splice(idx, 1)
            state.items = items
         }
      }
   },
   extraReducers: (builder) => {
      // Save the cart on any change to localStorage
      builder.addMatcher(
         (action) => action.type.endsWith('Item'),
         (state) => setCart(state.items)
      )
   }
})

export const { open, close, setItem, removeItem } = cartSlice.actions

export const selectIsOpen = (state: RootState) => state.cart.isOpen
export const selectCartItems = (state: RootState) => state.cart.items
export const selectNumItems = (state: RootState) => state.cart.items.length

export default cartSlice.reducer
