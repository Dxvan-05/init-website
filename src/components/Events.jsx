import React, { useState } from "react";
import EventCard from "./EventCard";
import { useEffect } from "react";
import axios from "axios";

function Events() {
    const [events, setEvents] = useState([]); 

    useEffect(() => {
        axios.get("/event/data").then((response) => {
            setEvents(response.data.data);
        });
    }, []);

    return (
        <>
            <h1 className="text-3xl mt-20 font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight text-center">
                Events now
            </h1>
            <div className="flex flex-wrap lg:mx-60 sm:mx-20 justify-center gap-10 mt-20">
                {events.map((event) => {
                    return (
                        <EventCard
                            imageUrl={event.imageUrl}
                            title={event.title}
                            description={event.description}
                            registerLink={event.registerLink}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Events;
