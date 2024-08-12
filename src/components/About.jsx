import React from 'react'
import wave from '../assets/wave.svg'
import wave_down from '../assets/wave_down.svg'

function About() {
  return (


    <div className=''>
        <img src={wave} alt="" className=''/>
        <div className='bg-[#273036] text-white m-0 relative bottom-2'>
            <h1 className='lg:text-6xl text-4xl text-center font-bold p-3 mb-4'>Welcome to init[]</h1>
            <div className='flex justify-center'>
                <p className='max-w-[800px] mx-8 mt-12 mb-20 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur doloremque, fugiat harum, odit sed excepturi maxime beatae libero blanditiis nihil accusamus? Doloribus fugiat quam quidem vero ducimus? Ipsum, laudantium.</p>
            </div>
        </div>
        {/* <img src={wave_down} className='relative w-screen bottom-16' /> */}
    </div>
  )
}

export default About