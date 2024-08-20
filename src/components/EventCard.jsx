import React from 'react'

function EventCard({title, description, imageUrl, registerLink}) {
    return (
        <div className="w-[300px] rounded-md border border-gray-50">
            <img
                src={imageUrl}
                alt="Laptop"
                className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4 bg-gray-900 text-white">
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="mt-3 text-sm text-gray-200">
                    {description}
                </p>
                <a href={registerLink} target="_blank">
                    <button
                        type="button"
                        className="mt-4 text-sm rounded-sm bg-green-700 px-4 py-2 text-[10px] font-bold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Register
                    </button>
                </a>
            </div>
        </div>
    )
}

export default EventCard