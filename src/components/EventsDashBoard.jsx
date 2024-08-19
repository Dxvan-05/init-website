import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import EventsDashboardCard from "./EventsDashboardCard";
import axios from "axios";

function EventsDashBoard() {
    const [events, setEvents] = useState([]); 

    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [registerLink, setRegisterLink] = useState("");

    const [refresh, setRefresh] = useState(true);

    const toggleRefresh = () => {
        setRefresh(!refresh);
    };

    useEffect(() => {
        axios.get("/event/data").then((response) => {
            setEvents(response.data.data);
        });
    }, [refresh]);

    

    const handleTitleInput = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionInput = (e) => {
        setDescription(e.target.value);
    };

    const handleImageUrlInput = (e) => {
        setImageUrl(e.target.value);
    };

    const handleRegisterLinkChange = (e) => {
        setRegisterLink(e.target.value);
    };

    const addNewEvent = () => {
        if( !(title && description && imageUrl && registerLink)) {
            alert('A field in empty. Can\'t add Event');
            return;
          }

        axios.post('/event/create', {
            title,
            description,
            imageUrl,
            registerLink,
        }).then((response) => {
            if(!response.data.status) {
                alert(response.data.msg);
              }
              else {
                alert('Event Successfully Added');
                toggleRefresh();
                setTitle('');
                setDescription('');
                setImageUrl('');
                setRegisterLink('');
              }
        });
    }

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
                                        value={title}
                                        onChange={handleTitleInput}
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
                                        value={description}
                                        onChange={handleDescriptionInput}
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
                                        value={imageUrl}
                                        onChange={handleImageUrlInput}
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
                                        value={registerLink}
                                        onChange={handleRegisterLinkChange}
                                    ></input>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-gray-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gray-500"
                                    onClick={addNewEvent}
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
                            id={event._id}
                            toggleRefresh={toggleRefresh}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default EventsDashBoard;
