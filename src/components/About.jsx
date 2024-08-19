import React from "react";
import wave from "../assets/wave.svg";
import wave_down from "../assets/wave_down.svg";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="flex">
            <div
                id="about"
                className="mb-4 mt-60 inline-block mx-auto lg:px-20"
            >
                <div className=" text-white py-20">
                    <h1 id="about-title" className="lg:text-6xl text-4xl text-center font-bold p-3">
                        Welcome to init[]
                    </h1>
                    <div className="flex justify-center">
                        <p className="max-w-[800px] mx-8 mt-12 mb-20 text-xl text-center">
                            Where the brightest minds converge to push the
                            boundaries of what's possible in technology,
                            creating solutions that drive progress and change.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
