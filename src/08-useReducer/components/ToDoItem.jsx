export const ToDoItem = ( { todo, handleDeleteTodo, handleToggleTodo } ) => {
  return (
    <li key={todo.id} className="list-group-item d-flex justify-content-between">
        <span 
          className={`align-self-enter ${ (todo.done)?'text-decoration-line-through':''}`}
          onClick={ ()=>handleToggleTodo( todo.id )}
          >{todo.description}</span>
        <button 
         className="btn btn-danger"
         onClick={ ()=>handleDeleteTodo(todo.id) }
         >Borrar</button>
    </li>
  )
}
