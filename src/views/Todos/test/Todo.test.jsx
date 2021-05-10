import { render, screen, prettyDOM } from '@testing-library/react'
import { wrapper } from '../../../utils/testUtils'
import Todo from '../Todo'

const todo = {
  checked: true,
  createdAt: 1619894090832,
  text: 'Mow the lawn',
  id: 'ea153500-aaab-11eb-b26d-e31f7e2a7914',
  updatedAt: 1619902090237,
}

describe('test Todo view component', () => {
  test('with todo data', () => {
    render(<Todo todo={todo} />, { wrapper })
    const todoItem = screen.getByTestId('todo-item')

    expect(todoItem).toBeInTheDocument()
    expect(todoItem).toHaveTextContent(/mow the lawn/i)
  })
  test('with checked todo', () => {  
    render(<Todo todo={todo} />, { wrapper })
    const todoItem = screen.getByTestId('todo-item')
    const todoItemIcons = todoItem.getElementsByTagName('span')
    expect(todoItemIcons[1]).toHaveClass('text-green-500 text-2xl') 
  })
  test('with unchecked todo', () => {
    const uncheckedTodo = {...todo, checked: false}

    render(<Todo todo={uncheckedTodo} />, { wrapper })
    const todoItem = screen.getByTestId('todo-item')
    const todoItemIcons = todoItem.getElementsByTagName('span')
    expect(todoItemIcons[1]).toHaveClass('text-gray-500 text-2xl') 
  })
})
