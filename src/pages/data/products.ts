import goldMinerImg from 'assets/img/goldspot-birdview.png'
import blackMinerImg from 'assets/img/blackspot-birdview.png'

import type { ProductProps } from 'assets/types'

const miners: ProductProps[] = [
   {
      id: '1',
      name: 'MNTD Goldspot Limited Edition',
      brand: 'MNTD',
      image: goldMinerImg,
      price: 1450,
      inventory: 10,
      description:
         'The Goldspot miner comes with 8GB RAM (double the Blackspot miner), giving extra performance and protection from unforeseen blockchain challenges. There will be Limited Edition Goldspot miners available in all MNTD miner drops. Miners who purchase the Goldspot will have premium access to the Dedicated Premium Goldspot Discord for fast-track access to MNTD. support. These miners will receive exclusive Goldspot features in future firmware releases. And, if you happen to run into any issues, Goldspot miners will receive expedited replacements in the event of hardware failure.'
   },
   {
      id: '2',
      name: 'MNTD Blackspot',
      brand: 'MNTD',
      image: blackMinerImg,
      price: 1200,
      inventory: 3,
      description:
         'The standard RAK helium hotspot miner, but with 4GB RAM (double the regular RAK Hotspot Miner). All other mining operations are the same as the Limited Edition Goldspot Miner.'
   },
   {
      id: '3',
      name: 'Hot Miner',
      brand: 'MNTD',
      image: goldMinerImg,
      price: 1450,
      inventory: 20,
      isNew: true,
      description:
         'The Goldspot miner comes with 8GB RAM (double the Blackspot miner), giving extra performance and protection from unforeseen blockchain challenges. There will be Limited Edition Goldspot miners available in all MNTD miner drops. Miners who purchase the Goldspot will have premium access to the Dedicated Premium Goldspot Discord for fast-track access to MNTD. support. These miners will receive exclusive Goldspot features in future firmware releases. And, if you happen to run into any issues, Goldspot miners will receive expedited replacements in the event of hardware failure.'
   },
   {
      id: '4',
      name: 'Sold Out Miner',
      brand: 'MNTD',
      image: blackMinerImg,
      price: 1200,
      inventory: 0,
      description:
         'The standard RAK helium hotspot miner, but with 4GB RAM (double the regular RAK Hotspot Miner). All other mining operations are the same as the Limited Edition Goldspot Miner.'
   },
   {
      id: '5',
      name: 'Discount Miner',
      brand: 'MNTD',
      image: goldMinerImg,
      price: 1450,
      discount: 0.1,
      inventory: 5,
      description:
         'The Goldspot miner comes with 8GB RAM (double the Blackspot miner), giving extra performance and protection from unforeseen blockchain challenges. There will be Limited Edition Goldspot miners available in all MNTD miner drops. Miners who purchase the Goldspot will have premium access to the Dedicated Premium Goldspot Discord for fast-track access to MNTD. support. These miners will receive exclusive Goldspot features in future firmware releases. And, if you happen to run into any issues, Goldspot miners will receive expedited replacements in the event of hardware failure.'
   }
]

export default miners
