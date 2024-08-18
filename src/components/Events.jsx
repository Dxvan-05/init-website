import React from "react";
import EventCard from "./EventCard";

function Events() {
    const events = [
        {
            title: "Workshop 1",
            description: "Description 1",
            imageUrl:
                "https://media.licdn.com/dms/image/D4E22AQFMO878H6eYFA/feedshare-shrink_800/0/1708527470540?e=1726099200&v=beta&t=NaNGozkXgvt1NnQDz6SwZZelzc00bYTu8O9SzpxgZBs",
        },
        {
            title: "Workshop 2",
            description: "Description 2",
            imageUrl:
                "https://media.licdn.com/dms/image/D4E22AQFMO878H6eYFA/feedshare-shrink_800/0/1708527470540?e=1726099200&v=beta&t=NaNGozkXgvt1NnQDz6SwZZelzc00bYTu8O9SzpxgZBs",
        },
        {
            title: "Workshop 3",
            description: "Description 3",
            imageUrl:
                "https://media.licdn.com/dms/image/D4E22AQFMO878H6eYFA/feedshare-shrink_800/0/1708527470540?e=1726099200&v=beta&t=NaNGozkXgvt1NnQDz6SwZZelzc00bYTu8O9SzpxgZBs",
        },
        {
            title: "Workshop 4",
            description: "Description 4",
            imageUrl:
                "https://media.licdn.com/dms/image/D4E22AQFMO878H6eYFA/feedshare-shrink_800/0/1708527470540?e=1726099200&v=beta&t=NaNGozkXgvt1NnQDz6SwZZelzc00bYTu8O9SzpxgZBs",
        },
        {
            title: "Workshop 5",
            description: "Description 5",
            imageUrl:
                "https://media.licdn.com/dms/image/D4E22AQFMO878H6eYFA/feedshare-shrink_800/0/1708527470540?e=1726099200&v=beta&t=NaNGozkXgvt1NnQDz6SwZZelzc00bYTu8O9SzpxgZBs",
        },
        {
            title: "Workshop 6",
            description: "Description 6",
            imageUrl:
                "https://media.licdn.com/dms/image/D4E22AQFMO878H6eYFA/feedshare-shrink_800/0/1708527470540?e=1726099200&v=beta&t=NaNGozkXgvt1NnQDz6SwZZelzc00bYTu8O9SzpxgZBs",
        },
    ];

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
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Events;
