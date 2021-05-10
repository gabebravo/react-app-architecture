import React from 'react'
import {
  useGetTodos,
} from '../../hooks/useTodoMutations';
import InfoMessage from '../../shared/InfoMessage'
import ErrorMessage from '../../shared/ErrorMessage'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default function Layout() {
  const { data, error, isLoading, isFetching, isSuccess } = useGetTodos()

  if(isLoading) {
    return <InfoMessage message="Loading..." />
  }

  if(isFetching) {
    return <InfoMessage message="Updating..." />
  }

  if(error) {
    return <ErrorMessage title="Whoops... " text="An error occured on the server" />
  }

  return isSuccess && (
    <div className="flex justify-center mt-12" data-testid="container">
      <div className="flex-col w-1/5">
        <TodoList todos={data} />
        <TodoForm />
      </div>
    </div>
  )
}
