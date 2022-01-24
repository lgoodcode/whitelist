import goldMinerImg from 'assets/img/goldspot-birdview.png'
import blackMinerImg from 'assets/img/blackspot-birdview.png'

interface Miner {
  name: string
  brand?: string
  image: string
  price: number
  description: string
}

const miners: Miner[] = [
  {
    name: 'MNTD Goldspot Limited Edition',
    brand: 'MNTD',
    image: goldMinerImg,
    price: 1450,
    description:
      'The Goldspot miner comes with 8GB RAM (double the Blackspot miner), giving extra performance and protection from unforeseen blockchain challenges. There will be Limited Edition Goldspot miners available in all MNTD miner drops. Miners who purchase the Goldspot will have premium access to the Dedicated Premium Goldspot Discord for fast-track access to MNTD. support. These miners will receive exclusive Goldspot features in future firmware releases. And, if you happen to run into any issues, Goldspot miners will receive expedited replacements in the event of hardware failure.'
  },
  {
    name: 'MNTD Blackspot',
    brand: 'MNTD',
    image: blackMinerImg,
    price: 1200,
    description:
      'The standard RAK helium hotspot miner, but with 4GB RAM (double the regular RAK Hotspot Miner). All other mining operations are the same as the Limited Edition Goldspot Miner.'
  }
]

export default miners
