import React from 'react'
import {
  useGetTodos,
} from '../../hooks/useTodoMutations';
import RqMessage from '../../shared/RqMessage'

export default function Todos() {
  const { data, error, isLoading, isFetching, isSuccess } = useGetTodos()

  return <RqMessage message="Loading..." />

  // if(isLoading) {
  //   return <RqMessage message="Loading..." />
  // }

  // if(isFetching) {
  //   return <RqMessage message="Updating..." />
  // }

  // if(error) {
  //   return <RqMessage message="Whoops... an error occured on the server" />
  // }

  // return isSuccess && (
  //   <div>
  //     Hello
  //   </div>
  // )
}
