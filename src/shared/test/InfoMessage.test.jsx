import { render, screen, prettyDOM } from '@testing-library/react'
import InfoMessage from '../InfoMessage'

describe('test InfoMessage view component', () => {
  test('Render message within InfoMessage', () => {
    const message = 'Loading...'

    render(<InfoMessage message={message} />)
    const imAlert = screen.getByRole('alert')
    expect(imAlert).toBeInTheDocument()
    expect(imAlert).toHaveTextContent(/loading/ig);
  })
})