import React, { useState } from 'react'
import axios from 'axios';

function EventsDashboardCard({imageUrl, description, title, id, toggleRefresh, registerLink }) {

    const [imageInput, setImageInput] = useState(imageUrl);
    const [titleInput, setTitleInput] = useState(title);
    const [descriptionInput, setDescriptionInput] = useState(description);
    const [registerLinkInput, setRegisterLinkInput] = useState(registerLink);

    const handleImageInput = (e) => {
      setImageInput(e.target.value);
    }

    const handleTitleInput = (e) => {
      setTitleInput(e.target.value);
    }

    const handleDescriptionInput = (e) => {
      setDescriptionInput(e.target.value);
    }

    const handleRegisterLinkInput = (e) => {
      setRegisterLinkInput(e.target.value);
    }
    
    const handleDelete = (e) => {
        axios.post('/event/delete', {
          _id: e.target.value
        }).then((response) => {
          console.log(response);
          toggleRefresh();
        })
      }

    const handleUpdate = (e) => {

      if( !(titleInput && descriptionInput && imageInput && registerLinkInput)) {
        alert('A field in empty. Can\'t Update');
        return;
      }

      axios.put('/update/event', {
        _id: e.target.value,
        title: titleInput,
        description: descriptionInput,
        imageUrl: imageInput,
        registerLink: registerLinkInput
      }).then((response) => {
        alert(response.data.msg);
        toggleRefresh();
      })
    }


  return (
    


    <div className="w-[300px] rounded-md border border-gray-50">
            <img
                src={imageUrl}
                alt="Laptop"
                className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4 bg-gray-900 text-white">
            <input className='bg-black border mb-2 p-2' value={imageInput} onChange={handleImageInput} />
                <h1 className="text-lg font-semibold">
                  <input className='bg-black border p-2' value={titleInput} onChange={handleTitleInput} />
                </h1>
                <p className="mt-3 text-sm text-gray-200">
                  <input className='bg-black border p-2' value={descriptionInput} onChange={handleDescriptionInput} />
                </p>
                <input className='bg-black border mt-2 mb-2 p-2' value={registerLinkInput} onChange={handleRegisterLinkInput} />
                
                <button
                    type="button"
                    className="mt-4 text-sm rounded-sm bg-red-700 px-3 py-1 text-[10px] font-bold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    value={id}
                    onClick={handleDelete}
                >
                    Delete
                </button>
                <button
                    type="button"
                    className="mt-4 ms-2 text-sm rounded-sm bg-yellow-800 px-3 py-1 text-[10px] font-bold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    value={id}
                    onClick={handleUpdate}
                >
                    Update
                </button>
            </div>
        </div>
  )
}

export default EventsDashboardCard