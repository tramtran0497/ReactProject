import React,{useEffect, useState} from 'react'
import rgbToHex from './utils'
function SingleColor({rgb, weight, index, hexColor}) {
    const [alert, setAlert] = useState(false)
    // change rgb to string to put inside rgb() change the background
   
    const bcg = rgb.join(",")
    
    // change the name color from rgb to hex
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert(false)
        }, 1000)
        return ()=>{
            clearTimeout(timeout)
        }
    }, [alert])
    return (
        // classname of article help user can easy to see
        <article className={`${index >10 ? 'color color-light':'color'}`} style={{backgroundColor : `rgb(${bcg})`}} onClick={()=>{ 
            setAlert(true)
            // property writes the specified text string to the system clipboard
            navigator.clipboard.writeText(`#${hexColor}`)
        }}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hexColor}</p>
            {alert ? <p className="alert">Copied</p> : ""}
        </article>
    )
}

export default SingleColor
