import { Outlet } from 'react-router-dom'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import CartDrawer from 'components/CartDrawer'

function Layout() {
   return (
      <>
         <Navbar />
         <main>
            <Outlet />

            <CartDrawer />
         </main>
         <Footer />
      </>
   )
}

export default Layout
