import type { ProductProps } from 'types'

const miners: ProductProps[] = [
   {
      id: '1',
      name: 'MNTD Goldspot Limited Edition',
      brand: 'MNTD',
      price: 1450,
      discount: 0,
      quantity: 10,
      isNew: false,
      inStock: true,
      images: {
         main: '/img/miners/mntd/goldspot/goldspot-birdview.png'
      },
      description:
         'The Goldspot miner comes with 8GB RAM (double the Blackspot miner), giving extra performance and protection from unforeseen blockchain challenges. There will be Limited Edition Goldspot miners available in all MNTD miner drops. Miners who purchase the Goldspot will have premium access to the Dedicated Premium Goldspot Discord for fast-track access to MNTD. support. These miners will receive exclusive Goldspot features in future firmware releases. And, if you happen to run into any issues, Goldspot miners will receive expedited replacements in the event of hardware failure.'
   },
   {
      id: '2',
      name: 'MNTD Blackspot',
      brand: 'MNTD',
      price: 1200,
      discount: 0,
      quantity: 3,
      isNew: false,
      inStock: true,
      images: {
         main: '/img/miners/mntd/blackspot/blackspot-birdview.png',
         others: [
            '/img/miners/mntd/blackspot/blackspot-installed.jpg',
            '/img/miners/mntd/blackspot/blackspot-openbox.jpg',
            '/img/miners/mntd/blackspot/blackspot-package.jpg',
            '/img/miners/mntd/blackspot/blackspot-spotlight.jpg'
         ]
      },
      description:
         'The standard RAK helium hotspot miner, but with 4GB RAM (double the regular RAK Hotspot Miner). All other mining operations are the same as the Limited Edition Goldspot Miner.'
   },
   {
      id: '3',
      name: 'Hot Miner',
      brand: 'MNTD',
      price: 1450,
      discount: 0,
      quantity: 20,
      isNew: true,
      inStock: true,
      images: '/img/miners/mntd/goldspot/goldspot-birdview.png',
      description:
         'The Goldspot miner comes with 8GB RAM (double the Blackspot miner), giving extra performance and protection from unforeseen blockchain challenges. There will be Limited Edition Goldspot miners available in all MNTD miner drops. Miners who purchase the Goldspot will have premium access to the Dedicated Premium Goldspot Discord for fast-track access to MNTD. support. These miners will receive exclusive Goldspot features in future firmware releases. And, if you happen to run into any issues, Goldspot miners will receive expedited replacements in the event of hardware failure.'
   },
   {
      id: '4',
      name: 'Sold Out Miner',
      brand: 'MNTD',
      price: 1200,
      discount: 0,
      quantity: 0,
      isNew: false,
      inStock: false,
      images: '/img/miners/mntd/blackspot/blackspot-birdview.png',
      description:
         'The standard RAK helium hotspot miner, but with 4GB RAM (double the regular RAK Hotspot Miner). All other mining operations are the same as the Limited Edition Goldspot Miner.'
   },
   {
      id: '5',
      name: 'Discount Miner',
      brand: 'MNTD',
      price: 1450,
      discount: 0.1,
      quantity: 5,
      isNew: false,
      inStock: true,
      images: '/img/miners/mntd/goldspot/goldspot-birdview.png',
      description:
         'The Goldspot miner comes with 8GB RAM (double the Blackspot miner), giving extra performance and protection from unforeseen blockchain challenges. There will be Limited Edition Goldspot miners available in all MNTD miner drops. Miners who purchase the Goldspot will have premium access to the Dedicated Premium Goldspot Discord for fast-track access to MNTD. support. These miners will receive exclusive Goldspot features in future firmware releases. And, if you happen to run into any issues, Goldspot miners will receive expedited replacements in the event of hardware failure.'
   }
]

export default miners
