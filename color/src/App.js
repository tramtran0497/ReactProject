import React,{useState, useEffect} from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'
function App() {

  const[color, setColor] = useState("")
  const [error, setError] = useState(false)
  // if wantting to have a default color
  const [list, setList] = useState(new Values('#f15025').all(5))
// all(number) means you want to minus each how many ex: 100 - 5
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e)
    try{
      let colors = new Values(color).all(10)
      setList(colors)
      console.log("CCCCC",colors)
    } catch(e){
      setError(true)
      console.log(e)
    }
    console.log(error)
  }
  console.log(list)
  return (
  <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color} onChange = {(e)=> setColor(e.target.value)} placeholder="#f15025" className={`${error? 'error':null}`} />
        <button className="btn" type="submit">Submit</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color,index)=> <SingleColor key={index} {...color} index={index} hexColor={color.hex} />)}
    </section>
  </>
  )
}

export default App

