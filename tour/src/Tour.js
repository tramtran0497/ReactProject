import React, {useState} from 'react'

function Tour({id, image, name, info, price, removeTour}) {
    const [readmore, setReadMore] = useState(false)

    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">{price}</h4>
                </div>
                <p>{readmore ? info : `${info.substring(0,200)}...`}
                <button onClick={()=> setReadMore(!readmore)}>{readmore ? 'Show Less':'Read More'}</button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}> not interesting</button>
            </footer>
        </article>
    )
}

export default Tour
