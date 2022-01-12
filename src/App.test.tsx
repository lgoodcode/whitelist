import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders fish fried fresh', () => {
  render(<App />)
  expect(screen.getByText(/fish fried fresh/i)).toBeInTheDocument()
})
