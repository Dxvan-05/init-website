import axios from "axios";
import React, { useState } from "react";




function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        phnNo: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = () => {
        axios.post('/contact/create', formData).then(response => {
            alert('Message delivered successfully!')
            setFormData({
                name: '',
                phnNo: '',
                email: '',
                message: ''
            });
        }).catch(error => {
            alert('Coundn\'t deliver the message. Try Again')
        })
    }

    return (
        <div className="flex flex-col mb-20 justify-center items-center">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight text-center mt-32">
                Contact Us
            </h1>
            <form action="#" id="contact" method="POST" className="mt-10 p-10">
                <div className="space-y-5 min-w-[70vw] md:min-w-[500px]">
                    <div>
                        <label
                            htmlFor="name"
                            className="text-base font-medium text-gray-300"
                        >
                            {" "}
                            Name{" "}
                        </label>
                        <div className="mt-2">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Name"
                                id="name"
                                name="name"
                                onChange={handleInputChange}
                                value={formData.name}
                            ></input>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="phnNo"
                            className="text-base font-medium text-gray-300"
                        >
                            {" "}
                            Phone No{" "}
                        </label>
                        <div className="mt-2">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="+91 0000000000"
                                id="phnNo"
                                name="phnNo"
                                onChange={handleInputChange}
                                value={formData.phnNo}
                            ></input>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="text-base font-medium text-gray-300"
                        >
                            {" "}
                            Email{" "}
                        </label>
                        <div className="mt-2">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="email"
                                placeholder="initassociation@gmail.com"
                                id="email"
                                name="email"
                                onChange={handleInputChange}
                                value={formData.email}
                            ></input>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="text-base font-medium text-gray-300"
                        >
                            {" "}
                            Message{" "}
                        </label>
                        <div className="mt-2">
                            <textarea
                                className="flex h-10 w-full min-h-[300px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Enter your message here"
                                id="message"
                                name="message"
                                onChange={handleInputChange}
                                value={formData.message}
                            ></textarea>
                        </div>
                        <div className="mt-5">
                            <button
                                type="button"
                                className="inline-flex w-full items-center justify-center rounded-md bg-green-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-green-500"
                                onClick={handleSubmit}
                            >
                                Submit 
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;
