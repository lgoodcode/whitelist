import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders whitelist', () => {
  render(<App />)
  expect(screen.getByText(/we train whales/i)).toBeInTheDocument()
})
