import type MinerProps from './MinerProps'

interface ProductProps extends MinerProps {
   id: string
   isNew: boolean
   discount: number
   quantity: number
   inStock: boolean
}

export default ProductProps
