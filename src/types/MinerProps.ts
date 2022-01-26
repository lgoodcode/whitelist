interface MinerProps {
   id: string
   name: string
   brand: string
   images:
      | string
      | {
           main: string
           others?: string[]
        }
   price: number
   description: string
}

export default MinerProps
