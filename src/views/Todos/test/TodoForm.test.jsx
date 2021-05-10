import { render, screen, prettyDOM } from '@testing-library/react'
import { wrapper } from '../../../utils/testUtils'
import TodoForm from '../TodoForm'

describe('test TodoForm view component', () => {
  test('Todo container and todo item rendered', () => {
    render(<TodoForm />, { wrapper })
    const todoForm = screen.getByTestId('todo-form')
    const todoFormButton = screen.getByRole('button')
    expect(todoForm).toBeInTheDocument()
    expect(todoForm).toHaveTextContent(/enter todo/i)
    expect(todoFormButton).toHaveTextContent(/add todo/i);
  })
})