import React from 'react'
import deptImage from'../assets/dept.png'
function Hero() {
  return (
    <div className='h-4/6 w-screen flex flex-col justify-center items-center mt-20'>
        <div className='h-4/6 flex flex-col items-center'>
            <img src={deptImage} className='w-3/6 min-w-80 h-fit aspect-square' alt="" />
        </div>
    </div>
  )
}

export default Hero