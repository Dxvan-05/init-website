import React from 'react'
import { Navbar } from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Typing from "./Typing";
import Execom from "./Execom";
import Events from "./Events";
import Footer from "./Footer";
import Gallery from "./Gallery";

function Home() {
  return (
    <div id="container" className="relative">
              <div id="pebbles" className="absolute w-full h-full">
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute top-20 left-1/2"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute top-[800px] left-1/3"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute  top-[500px] right-60"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute top-60 left-60"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute top-1/2 right-60"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute top-1/4 right-40"></div>
                
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute top-[1200px] left-60"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute top-[1700px] left-1/3"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute top-[1500px] right-1/3"></div>
                  {/*  */}
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute bottom-[250px] left-1/2"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute bottom-[800px] left-1/3"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute  bottom-[500px] right-60"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute bottom-[900px] left-[100px]"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute bottom-1/4 right-40"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute bottom-[1200px] left-60"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute bottom-[1700px] left-1/3"></div>
                  <div className="h-20 w-20 rounded-full bg-[#27c250] absolute bottom-[1500px] right-1/3"></div>
              </div>
              <div className="main z-20">
                  <Navbar />
                  <Hero />
                  <Typing />
                  <About />
                  <Events />
                  <Gallery />
                  <Execom />
                  <Footer />
              </div>
            </div>
  )
}

export default Home