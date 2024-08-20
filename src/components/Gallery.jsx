import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import test from '../assets/gallery/roadmap.webp'
import gallery from "../assets/gallery";
import axios from "axios";

import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper/modules";

function Gallery() {

    const [galleryImages, setGalleryImages] = useState([]);
    
    useEffect(() => {
        axios.get('/gallery/data').then((response) => {
            setGalleryImages(response.data.data)
        })
    }, [])


    return (
        <div id="gallery">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight text-center mt-32">
                Gallery
            </h1>
            <div className="w-[400px] sm:w-[600px] lg:w-[800px] mx-auto mt-20">
                <Swiper
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    modules={[EffectCreative]}
                    className="mySwiper"
                >
                    {galleryImages.map((image, index) => <SwiperSlide key={index}><img src={image.src} className="mx-auto w-[400px] sm:w-[600px] lg:w-[800px]" /></SwiperSlide>)}
                    
                </Swiper>
            </div>
        </div>
    );
}

export default Gallery;
