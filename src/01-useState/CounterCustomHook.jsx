import { useCounter } from '../hooks/useCounter'

export const CounterCustomHook = () => {
   const { counter, increment , decrement, reset} = useCounter()
    const valorIncremento = 1

    return (
    <>
        <h1>Counter Hook : { counter }</h1>
        <button className="btn btn-primary" onClick={ ()=>decrement(valorIncremento) }>-{valorIncremento}</button>
        <button className="btn btn-primary" onClick={ reset }>Reset</button>
        <button className="btn btn-primary" onClick={ ()=>increment(valorIncremento) }>+{valorIncremento}</button>
    </>
    )
}

