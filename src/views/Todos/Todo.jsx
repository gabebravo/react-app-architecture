import React from 'react'

export default function Todo({ todo }) {
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
        <span className="text-green-500 text-2xl"
          // onClick={() => todoPutRq.mutateAsync(todo)}
        >
          <i className="ri-checkbox-circle-fill"></i>
        </span>
        <span className="text-red-500 text-2xl"
          // onClick={() => todoDeleteRq.mutateAsync(todo.id)} 
        >
            <i className="ri-close-circle-fill"></i>
        </span>
      </div>
    </>
  )
}
