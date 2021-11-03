import React from 'react'
import Tour from './Tour'

function Tours({tours, removeTour}) {
    return (
        <section>
            <div className="title">
                <h2>Ours Tours</h2>
                <div className="underline">

                </div>

            </div>
            <div className="">
                {tours.map(tour => {return <Tour key={tour.id} {...tour} removeTour={removeTour}/>})}
            </div>
        </section>
       
    )
}

export default Tours
