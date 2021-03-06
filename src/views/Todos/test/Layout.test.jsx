import { render, screen, prettyDOM } from '@testing-library/react'
import { wrapper } from '../../../utils/testUtils'
import { useGetTodos, usePostTodo } from '../../../hooks/useTodoMutations'
import Layout from '../Layout'

jest.mock('../../../hooks/useTodoMutations', () => {
  return {
    __esModule: true,
    useGetTodos: jest.fn(() => {}),
    usePostTodo: jest.fn(() => {}),
    useDeleteTodo: jest.fn(() => {}),
    usePutTodo: jest.fn(() => {}),
  }
})

describe('test Layout Todo view component', () => {
  test('while loading', () => {
    useGetTodos.mockImplementation(() => ({
      isLoading: true,
    }))
    render(<Layout />, { wrapper })
    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent(/Loading.../i)
  })
  
  test('while error', () => {
    useGetTodos.mockImplementation(() => ({
      error: true,
    }))
    render(<Layout />, { wrapper })
    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent(/an error occured on the server/i)
  })
  
  test('with data', () => {
    useGetTodos.mockImplementation(() => ({
      isSuccess: true,
      data: [
        {
          checked: true,
          createdAt: 1619894090832,
          text: 'Mow the lawn',
          id: 'ea153500-aaab-11eb-b26d-e31f7e2a7914',
          updatedAt: 1619902090237,
        }
      ],
    }))
    usePostTodo.mockImplementation(() => ({
      isSuccess: false, 
      isLoading: false, 
      erro: false,
    }))
  
    render(<Layout />, { wrapper })
    const container = screen.getByTestId('container')
    const todoList = screen.getByTestId('todo-list')
    const todoForm = screen.getByTestId('todo-form')
    // console.log(prettyDOM(container))
    expect(container).toBeInTheDocument()
    expect(todoList).toBeInTheDocument()
    expect(todoForm).toBeInTheDocument()
  })
})
