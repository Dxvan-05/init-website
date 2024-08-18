import React from 'react'
import ExecomDashboardCard from './ExecomDashboardCard'
import { Plus } from 'lucide-react'

function ExecomDashboard() {

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

  return (
    <div className='w-[80%]'>
      <h1 className='text-center font-bold text-3xl mt-20'>
        Add New Execom Member
      </h1>

      <div className="flex items-center justify-center py-0  sm:py-16 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">

          <form action="#" method="POST" className="mt-5">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-300">
                  {' '}
                  Full Name{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="position" className="text-base font-medium text-gray-300">
                  {' '}
                  Position{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="position"
                    placeholder="Position"
                    id="position"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="description" className="text-base font-medium text-gray-300">
                    {' '}
                    Description{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="description"
                    placeholder="Description"
                    id="description"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="linkedin" className="text-base font-medium text-gray-300">
                    {' '}
                    LinkedIn URL{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="linkedin"
                    placeholder="https://www.linkedin.com/company/init-association"
                    id="linkedin"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="instagram" className="text-base font-medium text-gray-300">
                    {' '}
                    Instagram URL{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="instagram"
                    placeholder="https://www.instagram.com/example"
                    id="instagram"
                  ></input>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="image" className="text-base font-medium text-gray-300">
                      {' '}
                      Profile Image URL{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="https://example.com/example.jpg"
                      id="image"
                    ></input>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-gray-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gray-500"
                >
                  Add Member <Plus className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>



      <hr />

      <h1 className=' ps-10 font-bold text-3xl mt-20'>
        Remove Existing Execom Members
      </h1>

      <div className="my-24 max-w-[1250px] ms-5 grid gap-2 grid-cols-[repeat(auto-fill,350px)] justify-start items-center">
        <ExecomDashboardCard membersList={execomMembers} />
      </div>


    </div>
  )
}

export default ExecomDashboard