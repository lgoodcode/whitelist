import { Box } from '@mui/material'

// Navbar and Footer
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

// Sections
import Landing from './sections/Landing'

function ServicesPage() {
  return (
    <>
      <Navbar />
      <Box component="main">
        <Landing />
      </Box>
      <Footer />
    </>
  )
}

export default ServicesPage
