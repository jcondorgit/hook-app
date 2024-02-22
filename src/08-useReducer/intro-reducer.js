const inicialState =[{
    id:1,
    todo:'recolectar piedra alma',
    done:false,
}]

const todoReducer = (state=inicialState, action={}) => {
    if ( action.type === '[TODO] add todo' ) {
        return [...state, action.payload]
    }
    return state;
}
//estableciendo estado inicial
let todos = todoReducer();

const newTodo = {
    id:1,
    todo:'recolectar piedra 2',
    done:false,
}

const todoAction = {
    type:'[TODO] add todo',
    payload:newTodo,
}

todos = todoReducer( todos, todoAction)

console.log(todos)