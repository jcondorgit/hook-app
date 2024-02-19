import { useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {
    const [formState, setformState] = useState({
        name:'pilot',
        email:'',
    })

    const { name , email } = formState
  
    const onInputChange = ( {target} )=>{
        const {name, value} = target
        setformState({
            ...formState,
            [ name ]:value,
        }) 
    }

    return (
        <>
            <h1>Formulario Simple</h1>
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

           {
             (name === 'pilot') && <Message/>
           }
        </>
  )
}