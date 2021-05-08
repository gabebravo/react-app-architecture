import React from 'react'
import {
  useGetTodos,
} from '../../hooks/useTodoMutations';

export default function Todos() {
  const { data, isLoading, isFetching, isSuccess } = useGetTodos()
  console.log(`data`, data)

  return (
    <div>
      Hello
    </div>
  )
}
