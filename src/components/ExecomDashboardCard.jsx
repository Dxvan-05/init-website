import axios from 'axios';
import React, { useState } from 'react'

function ExecomDashBoardCard({ member, toggleRefresh }) {

  const [name, setName] = useState(member.name);
  const [position, setPosition] = useState(member.position);
  const [description, setDescription] = useState(member.description);
  const [imageUrl, setImageUrl] = useState(member.imageUrl);
  const [linkedInUrl, setLinkedInUrl] = useState(member.linkedInUrl);
  const [instagramUrl, setInstagramUrl] = useState(member.InstagramUrl);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePositonChange = (e) => {
    setPosition(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  }

  const handleLinkedInUrlChange = (e) => {
    setLinkedInUrl(e.target.value);
  }

  const handleInstagramUrlChange = (e) => {
    setInstagramUrl(e.target.value);
  }

  const handleUpdate = (e) => {

    if (
      !(
          name &&
          position &&
          description &&
          linkedInUrl &&
          instagramUrl &&
          imageUrl
      )
  ) {
    alert('A field is empty. Can\'t Update');
    return;
  }


    axios.put('/update/execom', {
      _id: e.target.value,
      name,
      position,
      description,
      imageUrl,
      linkedInUrl,
      InstagramUrl: instagramUrl,
    }).then((response) => {
      alert(response.data.msg);
      toggleRefresh();
    });
  }

  const handleDelete = (e) => {
    axios.post('/execom/delete', {
      _id: e.target.value
    }).then((response) => {
      console.log(response);
      toggleRefresh();
    })
  }


  return (
    
        <div className="mx-auto w-[300px] rounded-md border bg-black">
          <img
            src={member.imageUrl}
            alt="Execom Member Image"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-4">
            {/* <h1 className="text-lg font-semibold">{ member.name }</h1> */}
            <input className='bg-black border p-2 mb-2' type="text" value={imageUrl} onChange={handleImageUrlChange}/>
            <input className='bg-black border p-2 text-lg font-semibold mb-2' type="text" value={name} onChange={handleNameChange}/>
            <input className='bg-black border p-2 mb-2 mt-3 font-medium' type="text" value={position} onChange={handlePositonChange}/>
            {/* <h6 className="mt-3 font-medium">{ member.position }</h6> */}
            <p className="mt-3 text-sm text-gray-300">
              <input className='bg-black border p-2 mb-2' type="text" value={description} onChange={handleDescriptionChange}/>
            </p>

            <input className='bg-black border p-2 mb-2' type="text" value={linkedInUrl} onChange={handleLinkedInUrlChange}/>
            <input className='bg-black border p-2 mb-2' type="text" value={instagramUrl} onChange={handleInstagramUrlChange}/>
            
          </div>
          <button className='bg-red-700 text-white rounded m-5 p-2 hover:bg-red-800' value={member._id} onClick={handleDelete}>Remove</button>
          <button className='bg-yellow-800 text-white rounded ms-2 p-2 hover:bg-orange-800' value={member._id} onClick={handleUpdate}>Update</button>
        </div>
    
  )
}

export default ExecomDashBoardCard;