import { useEffect } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {
    
    const {formState, onInputChange,name,email,password,onFormReset}= useForm({
        name:'',
        email:'',
        password:'',
    })

    //const {name, email, password} = formState

    return (
        <>
            <h1>Formulario  with custom hook</h1>
            <br />
            <input 
                type="text" 
                className="form-control mt-2"
                placeholder="User name"
                name="name"
                value={name}
                onChange={ onInputChange }

            />
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="email"
                name="email"
                value={email}
                onChange={ onInputChange }
            />
            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={ onInputChange }
            />

            <button onClick={ onFormReset } className="btn btn-primary mt-2">Reset</button>
        </>
  )
}