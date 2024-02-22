import { useForm } from "../../hooks/useForm";

export const ToDoAdd = ({ handleTodo }) => {

    const { description, onInputChange, onFormReset} = useForm({
        description:''
    });

    const onFormSubmit= (e)=>{
        e.preventDefault();
        if (description.length <= 1) return
        const newtodo = {
            id: new Date().getTime(),
            description: description,
            done:false,
        }
        handleTodo( newtodo );
        onFormReset();
    }   

  return (
    <form onSubmit={ onFormSubmit}>
        <input 
            type="text" 
            placeholder="¿Que hay que hacer?"
            className="form-control"
            name="description"
            value={description}
            onChange={onInputChange}
        />
        <button 
            type="submit"
            className="btn btn-primary mt-2"
        >Sumbit</button>
    </form>
  )
}
