import { useMemo, useState } from 'react';
import { useCounter } from '../hooks'

const heavyStuff = ( iterationNumber = 1000 )=>{

    for (let index = 0; index < iterationNumber; index++) {
        console.log('contando')        
    }
    return `${iterationNumber} datos procesados`
}

export const MemorizeHook = () => {

    const { counter, increment } = useCounter( 1000 );
    const [ show, setShow ] = useState(true)

    const memorizedVal = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small> </h1>
            <hr />
            <h4>{ memorizedVal }</h4>
            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show )  }
            >
                Show/Hide { JSON.stringify(show) } 
            </button>
        
        </>
    )
}