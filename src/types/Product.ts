import type Miner from './Miner'

export default interface Product extends Miner {
   id: string
   quantity: number
   discount: number
   isnew: boolean
   featured: boolean
}
