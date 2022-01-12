import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar from '../Navbar'

describe('Navbar Component', () => {
  it('Renders the Navbar with the logo and hamburger buttons', () => {
    render(<Navbar />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByTestId('logo')).toHaveClass('logo btn nav icon')

    expect(screen.getByTestId('hamburger')).toBeInTheDocument()
    expect(screen.getByTestId('hamburger')).toHaveClass('hamburger-btn')
  })
})
