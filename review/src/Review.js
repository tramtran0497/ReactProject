import React, {useState, useEffect} from 'react'
import people from './data'
import {HiChevronLeft, HiChevronRight, } from "react-icons/hi"
import {FaQuoteRight} from 'react-icons/fa'

function Review() {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]

    const checkNumber = (number) =>{
        if(number > people.length -1){
            return 0
        } else if(number < 0){
            return people.length -1
        }
        return number
    }
    const nextPerson = () =>{
        setIndex((index)=> {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const prevPerson = () =>{
        setIndex((index)=> {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    const randomPerson = ()=>{
        let randomIndex = Math.floor(Math.random()* people.length)
        if(randomIndex === index){
            randomIndex = index + 1
        }
        setIndex(checkNumber(randomIndex))
        
    }
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <spna className="quote-icon">
                    <FaQuoteRight />
                </spna>
            </div>
            <h4 className='author'>
                {name}
            </h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className="prev-btn" onClick={prevPerson}><HiChevronLeft /></button>
                <button className="next-btn" onClick={nextPerson}><HiChevronRight /></button>
            </div>
            <div className="button-container">
                <button className="random-btn" onClick={randomPerson}>Suprise Me</button>
            </div>
        </article>
    )
}

export default Review
