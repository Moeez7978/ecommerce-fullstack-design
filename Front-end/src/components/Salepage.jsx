import React, { useState, useEffect } from 'react';
 // Ensure this is imported to apply Tailwind styles

const Salepage = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-01-06") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-4 px-24 mx-auto">
      <div className="bg-white md:border  md:border-gray-300 p-6 mr-12 flex flex-wrap flex-row md:flex-col " style={{height:'234px', width:'390px'}}>
        <h2 className="text-2xl font-bold  text-start px-1">Deals and Offers</h2>
        <p className="text-lg  text-start px-1">Hygiene Equipments</p>
        <div className="flex  justify-start items-start space-x-2 py-4">
          <div className="flex flex-col items-center bg-gray-200 p-2 rounded">
            <span className="text-xl font-semibold">{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-2 px-3 rounded">
            <span className="text-xl font-semibold">{timeLeft.hours}</span>
            <span className="text-sm">Hour</span>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-2 px-4 rounded">
            <span className="text-xl font-semibold">{timeLeft.minutes}</span>
            <span className="text-sm">Min</span>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-2 px-4 rounded">
            <span className="text-xl font-semibold">{timeLeft.seconds}</span>
            <span className="text-sm">Sec</span>
          </div>
        </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col items-center justify-between border border-gray-300 p-6 aspect-h-1 aspect-w-1 w-40">
            <img src="/src/watch.png" alt="Smartwatches" className='object-cover p-2'/>
           <div className='flex flex-col align-middle items-center'> <p className="mt-2">Smart watches</p>
            <p className="text-red-600 text-l  bg-red-200 rounded-2xl px-3 font-semibold">-25%</p></div>
          </div>
          <div className="flex flex-col items-center justify-between border border-gray-300 p-6 aspect-w-1 aspect-h-1 w-40 ">
            <img src="/src/laptop.png" alt="Laptops" className='object-cover p-2' />
            <div className='flex flex-col align-middle items-center'>
            <p className="mt-2">Laptops</p>
            <p className="text-red-600 text-l  bg-red-200 rounded-2xl px-3 font-semibold">-15%</p></div>
          </div>
          <div className="flex flex-col items-center justify-between border border-gray-300 p-6 aspect-w-1 aspect-h-1 w-40">
            <img src="/src/camera.png" alt="GoPro cameras" className='object-cover p-2'  />
           <div className='flex flex-col align-middle items-center'> <p className="mt-2">GoPro cameras</p>
            <p className="text-red-600 text-l font-semibold  bg-red-200 rounded-2xl px-3">-40%</p></div>
          </div>
          <div className="hidden md:flex flex-col items-center justify-between border border-gray-300 p-6 aspect-w-1 aspect-h-1 w-40">
            <img src="/src/headphone.png" alt="Headphones" className='object-cover p-2'/>
           <div className='flex flex-col align-middle items-center'> <p className="mt-2">Headphones</p>
            <p className="text-red-600 text-l font-semibold  bg-red-200 rounded-2xl px-3">-25%</p></div>
          </div>
          <div className="hidden md:flex flex-col items-center justify-between border border-gray-300 p-6 aspect-w-1 aspect-h-1 w-40">
            <img src="/src/canon.png" alt="Canon cameras" className='object-cover p-2'/>
            <div className='flex flex-col align-middle items-center'>
            <p className="mt-2">Canon cameras</p>
            <p className="text-red-600 text-l font-semibold bg-red-200 rounded-2xl px-3">-25%</p></div>
          </div>
        </div>
      
        </div>
    
  );
};

export default Salepage;

