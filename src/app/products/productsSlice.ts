import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get } from 'app/api'
import type { RootState } from '../store'
import type { Product } from 'types'

export interface ProductsState {
   products: Product[]
   status: 'pending' | 'fulfilled' | 'error'
   error: string
}

const initialState: ProductsState = {
   products: [],
   status: 'pending',
   error: ''
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
   const req = await get('/products')
   return req.data
})

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(fetchProducts.pending, (state) => {
            state.status = 'pending'
         })
         .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.products = action.payload
         })
         .addCase(fetchProducts.rejected, (state) => {
            state.status = 'error'
            state.error = 'Failed to retrieve products'
         })
   }
})

export const selectStatus = (state: RootState) => state.products.status

export const selectProducts = (state: RootState) => state.products.products

export const selectProductById = (id: Product['id']) => (state: RootState) =>
   state.products.products.find((product) => product.id === id)

export const selectProductByName = (name: Product['name']) => (state: RootState) =>
   state.products.products.find((product) => product.name === name)

export const selectProductsFeatured = (state: RootState) =>
   state.products.products.filter((product) => product.featured)

export default productsSlice.reducer
