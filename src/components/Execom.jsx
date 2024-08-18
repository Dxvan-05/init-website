import React from 'react'
import ExecomCard from './ExecomCard'


const execomMembers = [
  {
    name: 'Execom Member 1',
    position: 'Position 1, Execom',
    description: 'One',
    imageUrl: 'https://i.pngimg.me/thumb/f/720/m2i8m2A0K9H7N4m2.jpg'
  },
  {
    name: 'Execom Member 2',
    position: 'Position 1, Execom',
    description: 'One',
    imageUrl: 'https://i.pngimg.me/thumb/f/720/m2i8m2A0K9H7N4m2.jpg'
  },
  {
    name: 'Execom Member 3',
    position: 'Position 1, Execom',
    description: 'One',
    imageUrl: 'https://i.pngimg.me/thumb/f/720/m2i8m2A0K9H7N4m2.jpg'
  },
  {
    name: 'Execom Member 4',
    position: 'Position 1, Execom',
    description: 'One',
    imageUrl: 'https://i.pngimg.me/thumb/f/720/m2i8m2A0K9H7N4m2.jpg'
  },

];


function Execom() {
  return (
    <div className='z-30 relative'>
        <h1 className='text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight text-center mt-32'>Meet our execom this year</h1>
        <div className="my-24 max-w-[1350px] mx-auto mx-18 grid gap-3 grid-cols-[repeat(auto-fill,350px)] justify-center items-center">
        <ExecomCard membersList={execomMembers} />
      </div>
    </div>
  )
}

export default Execom