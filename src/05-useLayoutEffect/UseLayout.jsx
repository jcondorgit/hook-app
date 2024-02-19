import { useCounter,useFetch } from '../hooks'
import { LoadingQuote, Quote } from '../03-ejemplos'

export const Layout = () => {
  
    const { counter, increment } = useCounter(1)
    const { data, isLoading, hasHerror } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

  return (
    <>
      <h1>Breacking bad Quotes</h1>
      <hr />
      {
        isLoading
        ?<LoadingQuote />
        :<Quote data={data} />
      }

      <button 
        onClick={ ()=>increment(1) } 
        className='btn btn-primary'
        disabled={isLoading}
      >
        Next Quote
      </button>
    </>
  )
}
