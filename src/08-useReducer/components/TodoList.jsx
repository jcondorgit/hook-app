import { ToDoItem } from "./ToDoItem"

export const TodoList = ({ todoItems = [], handleDeleteTodo, handleToggleTodo }) => {
  return (
    <ul className="list-group">
        {
            todoItems.map( todo => (
                <ToDoItem 
                    key={todo.id}
                    todo = {todo}
                    handleDeleteTodo = {handleDeleteTodo}
                    handleToggleTodo = {handleToggleTodo}
                />
            ))
        }
    </ul>
  )
}
