import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import CartDrawer from 'components/CartDrawer'

function Layout() {
   return (
      <Box>
         <Navbar />
         <main>
            <Outlet />

            <CartDrawer />
         </main>
         <Footer />
      </Box>
   )
}

export default Layout
