import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ( {data} ) => {
  
  const divRef = useRef()
  const [boxSize, setboxSize] = useState( { width:0, height:0})

  useLayoutEffect(() => {
    const {width, height} = divRef.current.getBoundingClientRect()
    setboxSize({width,height}) 
  }, [data])
 
  return (
    <div ref={divRef}>
      {
          data.map( ({quote, author}) => (
              <blockquote className='blockquote text-end' style={{ display:'flex'}}>
                  <p className='mb-1' >{quote}</p>
                  <footer className='blockquote-footer'>{author}</footer>
              </blockquote>
          ))
      } 
      <code>{JSON.stringify(boxSize)}</code>
    </div>
  )
}
