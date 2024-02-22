import { TodoList, ToDoAdd } from "./components"
import { useTodos } from "../hooks"

export const TodoApp = () => {
  
    const {todos, countTodo, pendingCountTodo, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();
  
  return (
    <>
        <h1>Todo app total:({countTodo}), <small>pendientes: {pendingCountTodo}</small></h1> 
        <br />
        <div className="row">
            <div className="col-7">
                <TodoList
                    todoItems = {todos}
                    handleDeleteTodo = { handleDeleteTodo }
                    handleToggleTodo = { handleToggleTodo }
                />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <ToDoAdd 
                    handleTodo = { handleNewTodo }
                />
            </div>
        </div>
    </>
  )
}
