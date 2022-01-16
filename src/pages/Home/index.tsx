import { Box } from '@mui/material'

// Navbar and Footer
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

// Sections
import Landing from './sections/Landing'
import Products from './sections/Products'
// import About from './sections/About'

function Home() {
  return (
    <>
      <Navbar />
      <Box component="main">
        <Landing />
        <Products />
        {/* <About /> */}
      </Box>
      <Footer />
    </>
  )
}

export default Home
