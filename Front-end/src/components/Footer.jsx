import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGooglePlay, FaAppStore, FaApple } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {

  return (
    <footer className=" py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center bg-gray-100 p-8 my-12 rounded-lg">
          <h2 className="text-lg font-semibold">Subscribe on our newsletter</h2>
          <p className="text-sm text-gray-600">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>
          <div className="mt-4 flex flex-wrap md:justify-center gap-4 md:gap-0">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border rounded-md md:rounded-l-md focus:outline-none "
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md md:rounded-r-md hover:bg-blue-600 mx-auto md:mx-0">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div>
            <img src="/src/logo-colored.png" alt="Logo" className='my-2 p-4' />{/* <h3 className="text-xl font-bold text-blue-500 mb-2 flex items-center">
              <span className="bg-blue-100 p-2 rounded-md mr-2">🛍️</span> Brand
            </h3> */}
            <p className="text-sm text-gray-600">
              Best information about the company goes here but now lorem ipsum is
            </p>
            <div className="mt-4 flex space-x-4 text-gray-600">
              <a href="#" aria-label="Facebook">
             <FaFacebook style={{color: "#1877F2", transition: "color 0.3s ease",
        }}/>
                {/* <i className="fab fa-facebook"></i> */}
              </a>
              <a href="#" aria-label="Twitter">
              <FaTwitter style={{color: "#1DA1F2",transition: "color 0.3s ease",}}/>
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin style={{color: "#0077B5", transition: "color 0.3s ease", }}/>
              </a>
              <a href="#" aria-label="Instagram">
              <FaInstagram style={{color: "#E1306C",transition: "color 0.3s ease",}}/>
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube style={{color: "#FF0000",transition: "color 0.3s ease",}}/>
              </a>
            </div>
          </div>
          <div className='mx-auto md:mx-0'>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">About</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Find Store</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>
          <div className='mx-auto md:mx-0'>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Partnership</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Find Store</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>
          <div className='mx-auto md:mx-0'>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Information</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Money Refund</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className='mx-auto md:mx-0'>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">For Users</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li><a href="#">Login</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">My Orders</a></li>
            </ul>
          </div>
            <div className="mt-4 flex space-x-4 text-center mx-auto items-end">
            <div style={{ marginTop: "20px" }}>
            <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background-color 0.3s ease",width:'124px',height:'40px'
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
      >
        <FaGooglePlay style={{ color: "#fff", width: "30px", height: "30px", textAlign: "start" }} />
        <span className='text-xs text-end'>Get it on Google Play</span>
      </button>
    </div>
    <div style={{ marginTop: "20px" }}> <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px 10px",
          border: "none",
          borderRadius: "5px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background-color 0.3s ease",width:'124px',height:'40px'
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
      >
        <FaApple style={{ color: "#fff", width: "30px", height: "30px" }} />
        <span className='text-xs text-end'>Download from Store </span>
       
      </button>
      </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

