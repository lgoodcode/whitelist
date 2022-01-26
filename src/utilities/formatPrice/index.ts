function formatPrice(price: number, cents?: number): string {
   return price.toLocaleString('en-us') + '.' + (cents ? cents : '00')
}

export default formatPrice
