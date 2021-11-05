import React,{useState, useEffect} from 'react'
import data from './data'
import {FaAngleLeft, FaAngleRight, FaQuoteRight} from 'react-icons/fa'
function App() {
    const [people, setPeople] = useState(data)
    // people is an array in data.js file
    const [index,setIndex] = useState(0)
    // position of each person in people array
    
    useEffect(() => {
        if(index > people.length -1){
            setIndex(0)
        } if(index < 0 ){
            setIndex(people.length -1)
        }

    }, [index, people])

    useEffect(()=>{
        let slider = setInterval(() => {
            setIndex(index + 1);
          }, 5000);
          return () => {
            clearInterval(slider);
          };
        }, [index]
    )
    
    return (
        <section className="section">
            <div className="title"> 
                <h2>
                    <span>/</span> reviews
                </h2>
            </div>

            <div className="section-center">
                {people.map((person,personIndex) => {
                    const {id,img,name,title,quote} = person
                    // position
                    let position = 'nextSlide'
                    if(personIndex === index){
                        position = 'activeSlide'
                    }
                    if(index === 0 ? personIndex === people.length -1 : personIndex === index - 1){
                        position='lastSlide'
                    }
                    return <article className={position} key={id}>
                    <img src={img} alt={name} className="person-img" />
                    <h4>{name}</h4>
                    <p className="title">{title}</p>
                    <p className="text">{quote}</p>
                    <FaQuoteRight className="icon" />
                    </article>
                })}
                <button className="prev" onClick={()=> setIndex (index -1)}><FaAngleLeft /></button>
                <button className="next" onClick={()=> setIndex (index +1)}>><FaAngleRight /></button>
            </div>
        </section>
    )
}

export default App
