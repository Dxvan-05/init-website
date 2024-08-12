import React from 'react'
import EventCard from './EventCard'

function Events() {
    return (
        <>
            <h1 className='text-3xl mt-20 font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight text-center'>Events now</h1>
            <div className="flex justify-center mt-20">
                <EventCard />
            </div>
        </>
    )
}

export default Events