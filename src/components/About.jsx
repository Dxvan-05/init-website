import React from "react";
import wave from "../assets/wave.svg";
import wave_down from "../assets/wave_down.svg";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="flex">
          <div id="about" className="mb-4 mt-60 inline-block mx-auto lg:px-20">
              <div className=" text-white py-20">
                  <h1 className="lg:text-6xl text-4xl text-center font-bold p-3">
                    <Link to={'/admin'}>Welcome to init[]</Link>
                  </h1>
                  <div className="flex justify-center">
                      <p className="max-w-[800px] mx-8 mt-12 mb-20 text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Perferendis consequuntur doloremque, fugiat harum, odit
                          sed excepturi maxime beatae libero blanditiis nihil
                          accusamus? Doloribus fugiat quam quidem vero ducimus?
                          Ipsum, laudantium.
                      </p>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default About;
