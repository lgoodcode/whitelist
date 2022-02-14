import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Home from 'pages/Home'
import store from 'app/store'
import { StyleTheme } from 'assets/theme'

// Need to import it manually because it has to set the window
// property, whereas jest.mock() simply imports the module
// eslint-disable-next-line jest/no-mocks-import
import './__mocks__/intersectionObserverMock'

test('renders home page without crashing', () => {
   render(
      <Provider store={store}>
         <BrowserRouter>
            <ThemeProvider theme={StyleTheme('dark')}>
               <Home />
            </ThemeProvider>
         </BrowserRouter>
      </Provider>
   )
   expect(screen.getByText(/your go-to helium center/i)).toBeInTheDocument()
})
