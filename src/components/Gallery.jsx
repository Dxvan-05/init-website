import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import test from '../assets/screenshot_test.png'

import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper/modules";

function Gallery() {
    const galleryImages = [
        {
            imageUrl: "",
            caption: "",
        },
        {
            imageUrl: "",
            caption: "",
        },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight text-center mt-32">
                Gallery
            </h1>
            <div className="max-w-[900px] mx-auto mt-20">
                <Swiper
                    grabCursor={true}
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
                    <SwiperSlide><img src={test} className="mx-auto max-w-[900px]" /></SwiperSlide>
                    <SwiperSlide><img src={test} className="mx-auto" /></SwiperSlide>
                    <SwiperSlide><img src={test} className="mx-auto" /></SwiperSlide>
                    <SwiperSlide><img src={test} className="mx-auto" /></SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
}

export default Gallery;
