import React from "react";
import { Plus } from "lucide-react";
import EventsDashboardCard from "./EventsDashboardCard";

function EventsDashBoard() {
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
        <div className="w-[80%]">
            <h1 className="text-center font-bold text-3xl mt-20">
                Add New Events
            </h1>
            <div className="flex items-center justify-center py-0  sm:py-16 lg:py-24">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <form action="#" method="POST" className="mt-5">
                        <div className="space-y-5">
                            <div>
                                <label
                                    htmlFor="title"
                                    className="text-base font-medium text-gray-300"
                                >
                                    {" "}
                                    Title{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Title"
                                        id="title"
                                    ></input>
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="description"
                                        className="text-base font-medium text-gray-300"
                                    >
                                        {" "}
                                        Description{" "}
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="description"
                                        placeholder="Description"
                                        id="description"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="image"
                                        className="text-base font-medium text-gray-300"
                                    >
                                        {" "}
                                        Image URL{" "}
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Image URL"
                                        id="image"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="registration"
                                        className="text-base font-medium text-gray-300"
                                    >
                                        {" "}
                                        Registration Link{" "}
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Registration Link"
                                        id="registration"
                                    ></input>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-gray-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gray-500"
                                >
                                    Add Event{" "}
                                    <Plus className="ml-2" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <hr />

            <h1 className=" ps-10 font-bold text-center text-4xl mt-20">
                Remove Existing Events
            </h1>

            <div className="flex flex-wrap lg:mx-60 sm:mx-20 justify-center gap-10 mt-20 mb-20">
                {events.map((event) => {
                    return (
                        <EventsDashboardCard
                            imageUrl={event.imageUrl}
                            title={event.title}
                            description={event.description}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default EventsDashBoard;
