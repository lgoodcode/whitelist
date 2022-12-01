import type Product from './Product'

export default interface CartItem {
   id: Product['id']
   quantity: Product['quantity']
}
