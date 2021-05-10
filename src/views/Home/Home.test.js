import { render, screen } from '@testing-library/react'
import Layout from './Layout'

test('renders learn react link', () => {
  render(<Layout />)
  const linkElement = screen.getByText(/react query todo/i)
  expect(linkElement).toBeInTheDocument()
})
