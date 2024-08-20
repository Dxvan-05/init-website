import React from 'react'
import axios from 'axios'


function ImageDashBoardCard({src, id, toggleRefresh}) {
    const handleDelete = (e) => {
        axios.post('/gallery/delete', {
            _id: e.target.value
        }).then((response) => {
            toggleRefresh();
        })
    }

  return (
    <div>
        <img src={src} className='w-[300px]' />
        <button className='bg-red-700 text-white rounded m-5 p-2 hover:bg-red-800' onClick={handleDelete} value={id}>Delete</button>
    </div>
  )
}

export default ImageDashBoardCard