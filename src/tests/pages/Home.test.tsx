import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Home from 'pages/Home'

test('renders home page', () => {
   render(
      <BrowserRouter>
         <Home />
      </BrowserRouter>
   )
   expect(screen.getByText(/we train whales/i)).toBeInTheDocument()
})
