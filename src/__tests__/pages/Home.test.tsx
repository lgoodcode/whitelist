import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Home from 'pages/Home'
import store from 'app/store'

test('renders home page', () => {
   render(
      <Provider store={store}>
         <BrowserRouter>
            <Home />
         </BrowserRouter>
      </Provider>
   )
   expect(screen.getByText(/your go-to helium center/i)).toBeInTheDocument()
})
