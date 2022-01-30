import type { CartItem } from './cartSlice'

export function getCart(): CartItem[] {
   if ('cart' in localStorage) {
      return JSON.parse(localStorage.getItem('cart') ?? '[]')
   }
   return []
}

export function setCart(cart: CartItem[]): void {
   localStorage.setItem('cart', JSON.stringify(cart))
}

export default { getCart, setCart }
