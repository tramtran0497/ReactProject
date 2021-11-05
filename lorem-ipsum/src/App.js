import React, {useState, useEffect} from 'react'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text,setText] = useState([])
  const handleSubmit = (e)=>{
    e.preventDefault()
    // typeOf of count is string
    let amount = parseInt(count)
    if(amount<=0){
      amount=1
    }
    if(amount> text.length -1){
      amount=text.length -1
    }
    //console.log("EEEEEEE",count)
    // slice(start,end) it changed the text's reference value
    setText(data.slice(0,amount))
    
  }
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Paragraphs
        </label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e)=> setCount(e.target.value)} />
        <button className="btn" type="submit">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
    
  )
}

export default App

