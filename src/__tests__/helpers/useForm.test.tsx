import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import axios, { AxiosResponse } from 'axios'
import ThemeMock from '../mocks/ThemeMock'
import ContactForm from 'components/ContactForm'

jest.mock('axios')

const renderApp = () =>
   render(
      <ThemeMock>
         <ContactForm />
      </ThemeMock>
   )

const mockPost = axios.post as jest.Mock

const mockResponse = (valid: boolean): Partial<AxiosResponse> => ({
   data: {
      success: valid
   }
})

describe('renders form', () => {
   it('renders input elements', () => {
      const { getByLabelText } = renderApp()

      expect(getByLabelText(/first name/i)).toBeInTheDocument()
      expect(getByLabelText(/last name/i)).toBeInTheDocument()
      expect(getByLabelText(/email/i)).toBeInTheDocument()
      expect(getByLabelText(/phone/i)).toBeInTheDocument()
      expect(getByLabelText(/message/i)).toBeInTheDocument()
   })

   it('renders submit button', () => {
      const { getByText } = renderApp()

      expect(getByText(/submit/i)).toBeInTheDocument()
   })
})

describe('form behavior', () => {
   it('empty required elements display error message', () => {
      const { getByTestId, getByText } = renderApp()

      fireEvent.submit(getByTestId('form'))

      expect(getByText(/must enter your first name/i)).toBeInTheDocument()
      expect(getByText(/must enter your last name/i)).toBeInTheDocument()
      expect(getByText(/must enter your email address/i)).toBeInTheDocument()
      expect(getByText(/please enter a brief message/i)).toBeInTheDocument()
   })

   it('invalid input on required inputs provides error messages', () => {
      const { getByTestId, getByText, getAllByText } = renderApp()

      fireEvent.change(screen.getByLabelText(/first name/i), {
         target: { value: '12' }
      })

      fireEvent.change(screen.getByLabelText(/last name/i), {
         target: { value: '12' }
      })

      fireEvent.change(screen.getByLabelText(/email/i), {
         target: { value: '12' }
      })

      fireEvent.change(screen.getByLabelText(/phone/i), {
         target: { value: 'abc' }
      })

      fireEvent.change(screen.getByLabelText(/message/i), {
         target: { value: '' }
      })

      fireEvent.submit(getByTestId('form'))

      expect(getAllByText(/please enter a valid name/i)).toHaveLength(2)
      expect(getByText(/valid email/i)).toBeInTheDocument()
      expect(getByText(/valid phone/i)).toBeInTheDocument()
      expect(getByText(/please enter a brief message/i)).toBeInTheDocument()
   })

   it('should not validate on blur on non-required inputs', () => {
      const { queryByText } = renderApp()

      fireEvent.blur(screen.getByTestId(/non-required/i))

      expect(queryByText(/please/i)).not.toBeInTheDocument()
   })

   it('should validate on blur on required inputs after a submit attempt', () => {
      const { getByText, getAllByText, getByTestId } = renderApp()

      // Submit form
      fireEvent.submit(getByTestId('form'))

      fireEvent.blur(screen.getByLabelText(/first name/i))

      fireEvent.blur(screen.getByLabelText(/last name/i))

      fireEvent.blur(screen.getByLabelText(/email/i))

      fireEvent.blur(screen.getByLabelText(/message/i))

      expect(getAllByText(/must enter [a-z\s]+ name/i)).toHaveLength(2)
      expect(getByText(/must enter your email address/i)).toBeInTheDocument()
      expect(getByText(/please enter a brief message/i)).toBeInTheDocument()
   })

   it('should submit when form inputs contain valid text', async () => {
      const { getByTestId, queryByText } = renderApp()

      mockPost.mockResolvedValue(mockResponse(true))

      fireEvent.change(screen.getByLabelText(/first name/i), {
         target: { value: 'lawrence' }
      })

      fireEvent.change(screen.getByLabelText(/last name/i), {
         target: { value: 'good' }
      })

      fireEvent.change(screen.getByLabelText(/email/i), {
         target: { value: 'test@gmail.com' }
      })

      fireEvent.change(screen.getByLabelText(/phone/i), {
         target: { value: '3605931869' }
      })

      fireEvent.change(screen.getByLabelText(/message/i), {
         target: { value: 'some message text' }
      })

      fireEvent.submit(getByTestId('form'))

      await waitFor(() => {
         expect(queryByText(/please enter a valid name/i)).not.toBeInTheDocument()
         expect(queryByText(/valid email/i)).not.toBeInTheDocument()
         expect(queryByText(/valid phone/i)).not.toBeInTheDocument()
         expect(queryByText(/please enter a brief message/i)).not.toBeInTheDocument()
      })
   })
})

describe('form submission', () => {
   beforeEach(() => {
      renderApp()

      fireEvent.change(screen.getByLabelText(/first name/i), {
         target: { value: 'lawrence' }
      })

      fireEvent.change(screen.getByLabelText(/last name/i), {
         target: { value: 'good' }
      })

      fireEvent.change(screen.getByLabelText(/email/i), {
         target: { value: 'test@gmail.com' }
      })

      fireEvent.change(screen.getByLabelText(/phone/i), {
         target: { value: '3605931869' }
      })

      fireEvent.change(screen.getByLabelText(/message/i), {
         target: { value: 'some message text' }
      })
   })

   it('shows success message on successful submit', async () => {
      mockPost.mockResolvedValue(mockResponse(true))

      fireEvent.submit(screen.getByTestId('form'))

      expect(axios.post).toBeCalledTimes(1)
      expect(await screen.findByText(/success/i)).toBeInTheDocument()
   })

   it('shows failure message on failed submit', async () => {
      mockPost.mockResolvedValue(mockResponse(false))

      fireEvent.submit(screen.getByTestId('form'))

      expect(axios.post).toBeCalledTimes(1)
      expect(await screen.findByText(/fail/i)).toBeInTheDocument()
   })

   it('shows failure message on rejected promise', async () => {
      const errorMessage = 'No network connection'

      // Disable console.error for test
      global.console = {
         ...console,
         error: jest.fn()
      }

      mockPost.mockRejectedValue(new Error(errorMessage))

      fireEvent.submit(screen.getByTestId('form'))

      await expect(axios.post).rejects.toThrow(errorMessage)

      expect(await screen.findByText(/fail/i)).toBeInTheDocument()
   })
})
