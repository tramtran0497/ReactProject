import React, {useState} from 'react'
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'

function Question({title, info}) {
    const [showInfo, setShowInfo] = useState(false)
    const handleChange = ()=>{
        setShowInfo(!showInfo)
    }
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={handleChange}>{
                    showInfo ? <GrFormSubtract /> : <GrFormAdd />
                }</button>
            </header>
            {showInfo ? <p>{info}</p>: ''}
            
        </article>
    );
}

export default Question
