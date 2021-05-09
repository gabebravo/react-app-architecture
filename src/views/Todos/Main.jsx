import React from 'react'
import {
  useGetTodos,
} from '../../hooks/useTodoMutations';
import InfoMessage from '../../shared/InfoMessage'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default function Main() {
  const { data, error, isLoading, isFetching, isSuccess } = useGetTodos()

  if(isLoading) {
    return <InfoMessage message="Loading..." />
  }

  if(isFetching) {
    return <InfoMessage message="Updating..." />
  }

  if(error) {
    return <InfoMessage message="Whoops... an error occured on the server" />
  }

  return isSuccess && (
    <div className="flex justify-center mt-12">
      <div className="flex-col w-1/5">
        <TodoList todos={data} />
        <TodoForm />
      </div>
    </div>
  )
}
