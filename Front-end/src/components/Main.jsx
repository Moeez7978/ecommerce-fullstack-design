import React from 'react'
import { useState } from 'react'

const Main = () => {
    const [selected, setSelected] = useState('Automobiles');

    const handleSelect = (option) => {
      setSelected(option);
    };
  return (
    <>
    <div className='flex justify-center items-center md:my-10 gap-6 mx-auto'>
      {/* // Side Bar */}
     <div className="w-auto hidden md:flex">
      <ul className="space-y-2">
        {[
          'Automobiles',
          'Clothes and wear',
          'Home interiors',
          'Computer and tech',
          'Tools, equipments',
          'Sports and outdoor',
          'Animal and pets',
          'Machinery tools',
          'More category',
        ].map((option) => (
          <li
            key={option}
            className={`cursor-pointer p-2 ${
              selected === option ? 'bg-gray-300 font-bold' : ''
            }`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
    {/* Main Content */}
    <div className="w-96 h-44 md:w-2/4 flex items-center justify-center  relative">
      <img
        src="src/Main.png" // Replace this with your desired image link
        alt="Electronics"
        className=" md:w-full md:h-auto object-cover"
        
      />
      <div className="absolute  flex flex-col top-6 left-8 md:top-12 md:left-10 justify-center bg-black bg-opacity-0 p-6 gap-2">
        <h2 className="text-md md:text-4xl font-thin">Latest trending</h2>
        <h1 className="text-lg md:text-4xl font-bold">Electronic items</h1>
        <button className="md:mt-4 px-4 py-2 bg-blue-600 text-white rounded">Learn more</button>
      </div>
    </div>
    {/* Actions */}
    <div className="w-auto  space-y-4 hidden md:flex md:flex-col">
      <div className="bg-white p-4 shadow rounded">
        <p className="text-gray-600">Hi, user</p>
        <p className="text-gray-400">let’s get started</p>
        <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded">Join now</button>
        <button className="mt-2 w-full bg-gray-200 text-gray-600 py-2 rounded">Log in</button>
      </div>
      <div className="bg-orange-600 p-4 px-12 rounded shadow text-start text-white">
        Get US $10  off <br /> with a new <br /> supplier
      </div>
      <div className="bg-blue-400 p-4 px-12 rounded shadow text-start text-white">
        Send quotes with <br /> supplier <br />preferences
      </div>
    </div>
    </div>
    </>
  )
}

export default Main
