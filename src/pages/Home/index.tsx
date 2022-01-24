import { Box } from '@mui/material'

// Navbar and Footer
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

// Sections
import Landing from './sections/Landing'
import Quote from './sections/Quote'
import Products from './sections/Products'
// import About from './sections/About'

function HomePage() {
  return (
    <>
      <Navbar />
      <Box component="main">
        <Landing />
        <Quote />
        <Products />
        {/* <About /> */}
      </Box>
      <Footer />
    </>
  )
}

export default HomePage
