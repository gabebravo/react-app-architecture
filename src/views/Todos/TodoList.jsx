export default function TodoList({ todos }) {
  return todos.length > 0 &&  (
    <ul>
      { todos.map(todo => 
        <li key={todo.id} className="flex">
          <div>
            <span 
              onClick={() => console.log(todo.id)}
            >
              {todo.text}
            </span>
          </div>
          <div>
            <span 
              // onClick={() => todoPutRq.mutateAsync(todo)}
            >
              <i className="ri-checkbox-circle-fill"></i>
            </span>
            <span 
              // onClick={() => todoDeleteRq.mutateAsync(todo.id)} 
            >
                <i className="ri-close-circle-fill"></i>
            </span>
          </div>
        </li>
      )}    
    </ul>
  )
}
