import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10)
    
    const incrementF =  useCallback(
      () => {
        setCounter( (value) => value  + 1 )
      },
      [],
    )
    

    /* const incrementF = ()=>{
        setCounter(counter + 1)
    } */
  return (
    <div>
        <h1>Use Callback Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment = {incrementF}/>
    </div>
  )
}

