import { Outlet } from 'react-router-dom'

// Navbar and Footer
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

function Layout() {
   return (
      <>
         <Navbar />
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   )
}

export default Layout
