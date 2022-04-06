import { render, screen } from '@testing-library/react'
import { StoreMock, RoutingMock, ThemeMock } from '../commonSetup'
import Home from 'pages/Home'

// Need to import it manually because it has to set the window
// property, whereas jest.mock() simply imports the module
// eslint-disable-next-line jest/no-mocks-import
import '../mocks/intersectionObserverMock'

test('renders home page without crashing', () => {
   render(
      <StoreMock>
         <RoutingMock>
            <ThemeMock>
               <Home />
            </ThemeMock>
         </RoutingMock>
      </StoreMock>
   )
   expect(screen.getByText(/your go-to helium center/i)).toBeInTheDocument()
})
