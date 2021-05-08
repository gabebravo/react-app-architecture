import React from 'react'
import {
  useGetTodos,
} from '../../hooks/useTodoMutations';
import RqMessage from '../../shared/RqMessage'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default function Main() {
  const { data, error, isLoading, isFetching, isSuccess } = useGetTodos()

  if(isLoading) {
    return <RqMessage message="Loading..." />
  }

  if(isFetching) {
    return <RqMessage message="Updating..." />
  }

  if(error) {
    return <RqMessage message="Whoops... an error occured on the server" />
  }

  return isSuccess && (
    <div className="flex justify-center mt-8">
      <div className="flex-col w-1/5">
        <TodoList todos={data} />
        <TodoForm />
      </div>
    </div>
  )
}
