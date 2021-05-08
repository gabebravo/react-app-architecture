import Todo from './Todo'

export default function TodoList({ todos }) {
  return todos.length > 0 &&  (
    <ul>
      { todos.map(todo => 
        <li key={todo.id} className="flex justify-between">
          <Todo todo={todo} />
        </li>
      )}    
    </ul>
  )
}
