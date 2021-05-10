import React from 'react'
import ErrorMessage from '../../shared/ErrorMessage'
import InfoMessage from '../../shared/InfoMessage'
import {
  usePostTodo,
} from '../../hooks/useTodoMutations';

export default function TodoInput() {
  const [todo, setTodo] = React.useState('')
  const { isSuccess, isLoading, error, mutateAsync } = usePostTodo()

  const handleSubmit = (e) => {
    e.preventDefault()
    mutateAsync(todo)
    setTodo('')
  }

  if(isLoading) {
    return <InfoMessage message="Saving Todo..." />
  }

  if(isSuccess) {
    return <InfoMessage message="Todo added successfully" />
  }

  if(error) {
    return <ErrorMessage title="Whoops... " text="An error occured on the server" />
  }

  return (
    <div className="mt-12" data-testid="todo-form">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label 
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
              htmlFor="inline-enter-todo"
            >
              Enter Todo
            </label>
          </div>
          <div className="md:w-2/3">
            <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              type="text"
              name="todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button 
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
              type="submit">
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
