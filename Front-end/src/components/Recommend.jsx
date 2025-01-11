import React from 'react';

const items = [
  { id: 1, name: "T-shirts with multiple colors, for men", price: "$10.30", image: "/src/canon.png" },
  { id: 2, name: "Jeans shorts for men blue color", price: "$10.30", image: "/src/laptop.png" },
  { id: 3, name: "Brown winter coat medium size", price: "$12.50", image: "/src/camera,png" },
  { id: 4, name: "Jeans bag for travel for men", price: "$34.00", image: "path/to/jeans-bag.jpg" },
  { id: 5, name: "Leather wallet", price: "$99.00", image: "path/to/leather-wallet.jpg" },
  { id: 6, name: "Canon camera black, 100x zoom", price: "$9.99", image: "path/to/camera.jpg" },
  { id: 7, name: "Headset for gaming with mic", price: "$8.99", image: "path/to/headset.jpg" },
  { id: 8, name: "Smartwatch silver color modern", price: "$10.30", image: "path/to/smartwatch.jpg" },
  { id: 9, name: "Blue wallet for men leather material", price: "$10.30", image: "path/to/blue-wallet.jpg" },
  { id: 10, name: "Jeans bag for travel for men", price: "$80.95", image: "path/to/jeans-bag-2.jpg" },
];

const Recommend = () => {
  return (
    <div className="p-2 md:mx-auto ml-6 h-auto items-center align-middle" >
      <h2 className="text-2xl font-bold mb-6">Recommended items</h2>
      <div className="flex flex-wrap  gap-5 ml-6 md:mx-auto">
        {items.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 " style={{width:'220px', height:'310px'}}>
            <img src={item.image} alt={item.name} className=" object-cover rounded-t-lg mb-4 mx-auto" style={{width:'auto', height:'10rem'}} />
            <div className="text-center">
              <p className="text-xl text-gray-700">{item.price}</p>
              <h3 className="text-lg font-thin mb-2">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
