import Todo from './Todo'
import PropTypes from 'prop-types'

export default function TodoList({ todos }) {
  return todos.length > 0 &&  (
    <ul data-testid="todo-list">
      { todos.map(todo => 
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      )}    
    </ul>
  )
}

TodoList.propTypes = { 
  todos: PropTypes.array,
}