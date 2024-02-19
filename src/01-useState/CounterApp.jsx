import { useState } from "react"

export const CounterApp = () => {
  const [state, setContador] = useState({
    counter1:10,
    counter2:20,
    counter3:30,
  })

  const {counter1, counter2, counter3} = state

  const incre = ()=>{
    setContador({
        ...state,
        counter1: counter1+1,
    })
  }
  return (
    <>
        <h1>Contador:{ counter1 }</h1>
        <h1>Contador:{ counter2 }</h1>
        <h1>Contador:{ counter3 }</h1>
        <br />
        <button className="btn" onClick={ incre }>+1</button>
    </>
  )
}
