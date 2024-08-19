import React from 'react'
import init_side from '../assets/init_side.png'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <img src={init_side} className='h-[50px] w-[110px]'/>
              </div>
              <div>
                <p className="mb-4  text-base font-medium">Bytewave@2024</p>
                <p className="text-sm text-gray-400">
                  &copy; Copyright FIGHT CLUB.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Lorem
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-200 hover:text-gray-400" href="https://www.instagram.com/init_society">
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-200 hover:text-gray-400" href="https://www.linkedin.com/company/init-association">
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-200 hover:text-gray-400" href="#">
                    Lorem
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-200 hover:text-gray-400" href="#">
                    Lorem
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Lorem
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-200 hover:text-gray-400" href="#">
                    Lorem
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-200 hover:text-gray-400" href="#">
                  Lorem
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-200 hover:text-gray-400" href="#">
                    Lorem
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-200 hover:text-gray-400" href="#">
                  Lorem
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Lorem
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-200 hover:text-gray-400" href="#">
                    Lorem &amp; Lorem
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-200 hover:text-gray-400" href="#">
                    Lorem
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-200 hover:text-gray-400" href="#">
                  Lorem
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer