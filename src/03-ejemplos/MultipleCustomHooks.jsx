import { useCounter,useFetch } from '../hooks'
import { LoadingQuote, Quote } from './'

export const MultipleCustomHooks = () => {
  
  const { counter, increment } = useCounter(1)
    const { data, isLoading, hasHerror } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    //const { quote, author } = !!data && data[0]

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
