import React from 'react'; // Ensure this is imported to apply Tailwind styles

const Pro2 = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto my-8 " style={{width:'1280px', height:'257px'}}>
      <div className="flex flex-col lg:flex-row  p-6 m-4">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center  mb-6 lg:mb-0">
          <div className="w-full h-48 rounded-md flex items-center justify-center relative">
            {/* Placeholder for Room Image */}
            <img 
            src="/src/Electronics.png" 
            alt="Room" 
            className="object-cover w-full h-full rounded-l-lg" style={{width:'295px', height:'257px'}}/>
          </div>
          <div className='absolute flex flex-col gap-3 left-40 p-4 mb-16'>
            <span className='text-xl font-bold'>Consumer <br /> Electronics and <br /> Gadgets</span>
          <button className="px-6 py-2 bg-white rounded-lg">Source Now</button></div>
        </div>
        
        {/* Right Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-300 rounded-r-lg ">
          <div className="flex flex-col border border-gray-300 pl-3" style={{width:'224px', height:'127px'}}>
            <p className="mt-2">Soft chairs</p>
            <p className="text-sm font-thin text-gray-600" >From <br /> USD 19</p>
            <div className='ml-36 mb-2'><img src="/src/headphone.png" alt="Soft chairs" className="w-12 h-12 object-cover" /></div>
          </div>
          <div className="flex flex-col border border-gray-300 pl-3" style={{width:'224px', height:'127px'}}>
            <p className="mt-2 ">Sofa & chair</p>
            <p className="text-sm font-thin text-gray-600">From <br /> USD 19</p>
            <div className='ml-36 mb-2'><img src="/src/camera.png" alt="Sofa & chair" className="w-12 h-12 object-cover" /></div>
          </div>
          <div className="flex flex-col border border-gray-300 pl-3" style={{width:'224px', height:'127px'}}>
            <p className="mt-2">Kitchen dishes</p>
            <p className="text-sm font-thin text-gray-600">From <br /> USD 19</p>
            <div className='ml-36 mb-2'><img src="/src/camera.png" alt="Kitchen dishes" className="w-12 h-12 object-cover" /></div>
          </div>
          <div className="flex flex-col border border-gray-300 pl-3" style={{width:'224px', height:'127px'}}>
            <p className="mt-2 ">Smart watches</p>
            <p className="text-sm font-thin text-gray-600">From <br /> USD 19</p>
            <div className='ml-36 mb-2'><img src="/src/camera.png" alt="Smart watches" className="w-12 h-12 object-cover" /></div>
          </div>
          <div className="flex flex-col border border-gray-300 pl-3" style={{width:'224px', height:'127px'}}>
            <p className="mt-2 ">Kitchen mixer</p>
            <p className="text-sm font-thin text-gray-600">From <br /> USD 100</p>
            <div className='ml-36 mb-2'><img src="/src/camera.png" alt="Kitchen mixer" className="w-12 h-12 object-cover" /></div>
          </div>
          <div className="flex flex-col border border-gray-300 pl-3" style={{width:'224px', height:'127px'}}>
            <p className="mt-2 ">Blenders</p>
            <p className="text-sm font-thin text-gray-600">From <br /> USD 39</p>
           <div className='ml-36 mb-2'> <img src="/src/camera.png" alt="Blenders" className="w-12 h-12 object-cover" /></div>
          </div>
          <div className="flex flex-col border border-gray-300 pl-3" style={{width:'224px', height:'127px'}}>
            <p className="mt-2 ">Home appliance</p>
            <p className="text-sm font-thin text-gray-600">From <br /> USD 19</p>
            <div className='ml-36 mb-2'> <img src="/src/camera.png" alt="Home appliance" className="w-12 h-12 object-cover" /></div>
          </div>
          <div className="flex flex-col border border-gray-300 pl-3 " style={{width:'224px', height:'127px'}}>
            <p className="mt-2 text-start">Coffee maker</p>
            <p className="text-sm font-thin text-gray-600 text-start">From <br /> USD 10</p>
            <div className='ml-36 mb-2'> <img src="/src/camera.png" alt="Coffee maker" className="w-12 h-12 object-cover" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro2;