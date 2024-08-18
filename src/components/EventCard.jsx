import React from 'react'

function EventCard() {
    return (
        <div className="w-[300px] rounded-md border border-gray-50">
            <img
                src="https://media.licdn.com/dms/image/D4E22AQFMO878H6eYFA/feedshare-shrink_800/0/1708527470540?e=1726099200&v=beta&t=NaNGozkXgvt1NnQDz6SwZZelzc00bYTu8O9SzpxgZBs"
                alt="Laptop"
                className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4 bg-gray-900 text-white">
                <h1 className="text-lg font-semibold">Resume building workshop</h1>
                <p className="mt-3 text-sm text-gray-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                </p>
                <button
                    type="button"
                    className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Register
                </button>
            </div>
        </div>
    )
}

export default EventCard