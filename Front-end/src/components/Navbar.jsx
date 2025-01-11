import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [helpDropdown, setHelpDropdown] = useState(false);
    const [languageDropdown, setLanguageDropdown] = useState(false);
  return (
    <>
 <nav className="hidden md:flex justify-between items-center p-4 bg-white border-b border-gray-300 ">
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 hover:text-blue-500 cursor-pointer">&#9776; All category</span>
          <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Hot offers</span>
          <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Gift boxes</span>
          <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Projects</span>
          <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Menu item</span>
          <div className="relative">
            <span
              className="text-gray-600 hover:text-blue-500 cursor-pointer"
              onClick={() => setHelpDropdown(!helpDropdown)}
            >
              Help &#9662;
            </span>
            {helpDropdown && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded shadow-md z-10">
                <span className="block px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">FAQ</span>
                <span className="block px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">Contact Us</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span
              className="text-gray-600 hover:text-blue-500 cursor-pointer"
              onClick={() => setLanguageDropdown(!languageDropdown)}
            >
              English, USD &#9662;
            </span>
            {languageDropdown && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-md">
                <span className="block px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">English, USD</span>
                <span className="block px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">Spanish, EUR</span>
              </div>
            )}
          </div>
          <span className="text-gray-600 hover:text-blue-500 cursor-pointer">
            Ship to <span className="inline-block">&#127465;&#127466;</span>
          </span>
        </div>
      </nav>
    </>
  )
}

export default Navbar
