import { render, screen, prettyDOM } from '@testing-library/react'
import ErrorMessage from '../ErrorMessage'

describe('test ErrorMessage view component', () => {
  test('Render message within ErrorMessage', () => {
    const errorMsg = { title: 'Error', text: 'error xyz occured' }

    render(<ErrorMessage title={errorMsg.title} text={errorMsg.text} />)
    const errAlert = screen.getByRole('alert')
    expect(errAlert).toBeInTheDocument()
    expect(errAlert).toHaveTextContent(/error/ig);
  })
})