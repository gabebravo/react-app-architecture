import React from 'react'
import { useDeleteTodo, usePutTodo } from '../../hooks/useTodoMutations'

export default function Todo({ todo }) {
  const todoDeleteRq = useDeleteTodo()
  const todoPutRq = usePutTodo()

  return (
    <>
      <div>
        <span className="text-2xl"
          onClick={() => console.log(todo.id)}
        >
          {todo.text}
        </span>
      </div>
      <div>
        <span className={`text-${todo.checked ? 'green' : 'gray'}-500 text-2xl`}
          onClick={() => todoPutRq.mutateAsync(todo)}
        >
          <i className="ri-checkbox-circle-fill"></i>
        </span>
        <span className="text-red-500 text-2xl"
          onClick={() => todoDeleteRq.mutateAsync(todo.id)} 
        >
            <i className="ri-close-circle-fill"></i>
        </span>
      </div>
    </>
  )
}
