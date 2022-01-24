import type MinerProps from './MinerProps'

interface ProductProps extends MinerProps {
   id: string
   isNew?: boolean
   discount?: number
   inventory: number
}

export default ProductProps
