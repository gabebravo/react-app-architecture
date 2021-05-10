import { render, screen, prettyDOM } from '@testing-library/react'
import { wrapper } from '../../../utils/testUtils'
import TodoList from '../TodoList'

describe('test TodoList view component', () => {
  test('Todo container and todo item rendered', () => {
    const data = [
      {
        checked: true,
        createdAt: 1619894090832,
        text: 'Mow the lawn',
        id: 'ea153500-aaab-11eb-b26d-e31f7e2a7914',
        updatedAt: 1619902090237,
      }
    ]

    render(<TodoList todos={data} />, { wrapper })
    const todoList = screen.getByTestId('todo-list')
    expect(todoList).toBeInTheDocument()
    expect(todoList).toHaveTextContent(/mow the lawn/i);
  })
})