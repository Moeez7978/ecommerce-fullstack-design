import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [ismob, setIsmob] = useState(false);
  const Togglemenu=() => {
    setIsmob(!ismob);
  };
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/products/${category}`);
  }
  return (
   


    <header className="hidden md:flex justify-between items-center p-8 bg-white border-b border-gray-300 h-12 ">
      <div className="flex items-center ">
        <img src="/src/logo-colored.png" alt="Logo picture" />
      </div>
      <div className="flex items-center align-middle sm:">
        <input
          type="text"
          placeholder="Search"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-1 pr-10 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <select className="p-1 px-4 border-t border-b border-gray-300 focus:outline-none cursor-pointer">
          <option value="all">All category</option>
          <option value="all">Automobiles</option>
          <option value="all">Clothes and wear</option>
          <option value="all">Home interiors</option>
          <option value="all">Computer and tech</option>
          <option value="all">Sports and outdoor</option>
          <option value="all">Electronics</option>
          <option value="all">Mobile and Accessories</option>
          {/* Add more categories here if needed */}
        </select>
        <button className="p-1 px-6 bg-blue-500 text-white rounded-r-md hover:bg-blue-600" onClick={handleSearch}>Search</button>
      </div>
      <div className="flex items-center gap-6 mr-12">
        <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Profile</span>
        <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Message</span>
        <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Orders</span>
        <span className="text-gray-600 hover:text-blue-500 cursor-pointer">My cart</span>
      </div>
     
    </header>


    // <>
    //   <div className="img">
    //     <img src="/src/logo-colored.png" alt="" />
    //   </div>
    //   <div className="search">
    //     <input type="text" placeholder="Search" />

    //     <button>Search</button>
    //     </div> 
    //   <div className="menu"></div>
    // </>
  )
}

export default Header
