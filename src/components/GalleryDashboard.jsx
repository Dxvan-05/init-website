import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import axios from "axios";
import ImageDashBoardCard from "./ImageDashBoardCard";

function GalleryDashboard() {

    const [imageUrlInput, setImageUrlInput] = useState('');

    const [galleryImages, setGalleryImages] = useState([]);

    const [refresh, setRefresh] = useState(true);
    
    const toggleRefresh = () => {
        setRefresh(!refresh);
    }

    const handleImageUrlInput = (e) => {
        setImageUrlInput(e.target.value);
    }

    const handleAddGallery = () => {
        axios.post('/gallery/create', {
            src: imageUrlInput
        }).then((response) => {
            alert(response.data.msg);
            toggleRefresh();
        })
    }

    useEffect(() => {
        axios.get('/gallery/data').then((response) => {
            setGalleryImages(response.data.data)
        })
    }, [refresh])

    return (
        <div className="w-[80%]">
            <h1 className="text-center font-bold text-3xl mt-20">
                Add Gallery Images
            </h1>
            <div className="flex items-center justify-center py-0  sm:py-16 lg:py-24">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <form action="#" method="POST" className="mt-5">
                        <div className="space-y-5">
                            <div>
                                <label
                                    htmlFor="image"
                                    className="text-base font-medium text-gray-300"
                                >
                                    {" "}
                                    Image Url{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder=""
                                        id="image"
                                        value={imageUrlInput}
                                        onChange={handleImageUrlInput}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-green-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-green-500"
                                    onClick={handleAddGallery}
                                
                                >
                                    Add Image{" "}
                                    <Plus className="ml-2" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="my-24 max-w-[1250px] ms-5 grid gap-2 grid-cols-[repeat(auto-fill,350px)] justify-start items-center">
                {galleryImages.map((src) => {
                    return <ImageDashBoardCard src={src.src} id={src._id} toggleRefresh={toggleRefresh}/>
                })}
            </div>
        </div>
    );
}

export default GalleryDashboard;
