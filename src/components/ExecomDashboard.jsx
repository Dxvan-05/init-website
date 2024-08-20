import React, { useEffect, useState } from "react";
import ExecomDashboardCard from "./ExecomDashboardCard";
import { Plus } from "lucide-react";
import axios from "axios";
import ExecomCard from "./ExecomCard";

function ExecomDashboard() {
    const [execomMembers, setExecomMembers] = useState([]);
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [description, setDescription] = useState("");
    const [linkedInUrl, setLinkedInUrl] = useState("");
    const [instagramUrl, setInstagramUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        axios.get("/execom/data").then((response) => {
            setExecomMembers(response.data.data);
        });
    }, [refresh]);

    const toggleRefresh = () => {
        setRefresh(!refresh);
    };

    const handleNameInput = (e) => {
        setName(e.target.value);
    };

    const handlePositionInput = (e) => {
        setPosition(e.target.value);
    };

    const handleDescriptionInput = (e) => {
        setDescription(e.target.value);
    };

    const handleLinkedInUrlInput = (e) => {
        setLinkedInUrl(e.target.value);
    };

    const handleInstagramUrlInput = (e) => {
        setInstagramUrl(e.target.value);
    };

    const handleImageUrlInput = (e) => {
        setImageUrl(e.target.value);
    };

    const addExecomMember = () => {
        if (
            !(
                name &&
                position &&
                description &&
                linkedInUrl &&
                instagramUrl &&
                imageUrl
            )
        ) {
            alert("A field in empty. Can't add Execom Member");
            return;
        }

        axios
            .post("/execom/create", {
                name,
                position,
                description,
                linkedInUrl,
                InstagramUrl: instagramUrl,
                imageUrl,
            })
            .then((response) => {
                if (!response.data.status) {
                    alert(response.data.msg);
                } else {
                    alert("Execom Member Successfully Added");
                    toggleRefresh();
                    setName("");
                    setPosition("");
                    setDescription("");
                    setLinkedInUrl("");
                    setInstagramUrl("");
                    setImageUrl("");
                }
            });
    };

    return (
        <div className="w-[80%]">
            <h1 className="text-center font-bold text-3xl mt-20">
                Add New Execom Member
            </h1>

            <div className="flex items-center justify-center py-0  sm:py-16 lg:py-24">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <form className="mt-5">
                        <div className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-base font-medium text-gray-300"
                                >
                                    {" "}
                                    Full Name{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Full Name"
                                        id="name"
                                        value={name}
                                        onInput={handleNameInput}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="position"
                                    className="text-base font-medium text-gray-300"
                                >
                                    {" "}
                                    Position{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="position"
                                        placeholder="Position"
                                        id="position"
                                        value={position}
                                        onInput={handlePositionInput}
                                        required
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
                                        onInput={handleDescriptionInput}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="linkedin"
                                        className="text-base font-medium text-gray-300"
                                    >
                                        {" "}
                                        LinkedIn URL{" "}
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="linkedin"
                                        placeholder="https://www.linkedin.com/company/init-association"
                                        id="linkedin"
                                        value={linkedInUrl}
                                        onInput={handleLinkedInUrlInput}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="instagram"
                                        className="text-base font-medium text-gray-300"
                                    >
                                        {" "}
                                        Instagram URL{" "}
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="instagram"
                                        placeholder="https://www.instagram.com/example"
                                        id="instagram"
                                        value={instagramUrl}
                                        onInput={handleInstagramUrlInput}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="image"
                                            className="text-base font-medium text-gray-300"
                                        >
                                            {" "}
                                            Profile Image URL{" "}
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="https://example.com/example.jpg"
                                            id="image"
                                            value={imageUrl}
                                            onInput={handleImageUrlInput}
                                            required
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-green-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-green-500"
                                    onClick={addExecomMember}
                                >
                                    Add Member{" "}
                                    <Plus className="ml-2" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <hr />

            <h1 className=" ps-10 font-bold text-3xl mt-20">
                Remove/Update Existing Execom Members
            </h1>

            <div className="my-24 max-w-[1250px] ms-5 grid gap-2 grid-cols-[repeat(auto-fill,350px)] justify-start items-center">
                {execomMembers.map((member) => {
                    return <ExecomDashboardCard
                        member={member}
                        toggleRefresh={toggleRefresh}
                    />;
                })}
            </div>

            <hr />
            
            <h1 className=" ps-10 font-bold text-3xl mt-20">
                Preview
            </h1>


            <div className="my-24 max-w-[1250px] ms-5 grid gap-2 grid-cols-[repeat(auto-fill,350px)] justify-start items-center">
                <ExecomCard membersList={execomMembers} />
            </div>

        </div>
    );
}

export default ExecomDashboard;
