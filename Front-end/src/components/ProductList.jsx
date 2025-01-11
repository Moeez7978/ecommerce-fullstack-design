
// export default ProductList;
// import React, { useState,useEffect } from "react";
// import {useParams} from 'react-router-dom';
// const productlist = [
//     {
//         id: 1,
//         name: "Canon Camera EOS 2000",
//         price: "$998.00",
//         originalPrice: "$1128.00",
//         rating: 7.5,
//         orders: 154,
//         shipping: "Free Shipping",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         image: "/src/Electronics.png",
//         category: "Electronics",
//     },
//     {
//         id: 2,
//         name: "GoPro HERO6 4K Action Camera - Black",
//         price: "$998.00",
//         originalPrice: "$14528.00",
//         rating: 7.5,
//         orders: 154,
//         shipping: "Free Shipping",
//         description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         image: "/src/canon.png",
//         category: "Mobile and accessories",
//     },
//     {
//         id: 3,
//         name: "GoPro HERO6 4K Action Camera - Black",
//         price: "$998.00",
//         originalPrice: "$14528.00",
//         rating: 7.5,
//         orders: 154,
//         shipping: "Free Shipping",
//         description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         image: "/src/4.png",
//         category: "Electronics",
//     },
//     {
//         id: 4,
//         name: "GoPro HERO6 4K Action Camera - Black",
//         price: "$998.00",
//         originalPrice: "$14528.00",
//         rating: 7.5,
//         orders: 154,
//         shipping: "Free Shipping",
//         description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         image: "/src/3.png",
//         category: "Mobile and accessories",
//     },
//     {
//         id: 5,
//         name: "GoPro HERO6 4K Action Camera - Black",
//         price: "$998.00",
//         originalPrice: "$14528.00",
//         rating: 7.5,
//         orders: 154,
//         shipping: "Free Shipping",
//         description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         image: "/src/laptop.png",
//         category: "Electronics",
//     },
//     {
//         id: 6,
//         name: "GoPro HERO6 4K Action Camera - Black",
//         price: "$998.00",
//         originalPrice: "$14528.00",
//         rating: 7.5,
//         orders: 154,
//         shipping: "Free Shipping",
//         description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         image: "/src/headphone.png",
//         category: "Electronics",
//     },
//     {
//         id: 7,
//         name: "GoPro HERO6 4K Action Camera - Black",
//         price: "$998.00",
//         originalPrice: "$14528.00",
//         rating: 7.5,
//         orders: 154,
//         shipping: "Free Shipping",
//         description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         image: "/src/bgpro1.png",
//         category: "Mobile and accessories",
//     },
//     {
//         id: 8,
//         name: "GoPro HERO6 4K Action Camera - Black",
//         price: "$998.00",
//         originalPrice: "$14528.00",
//         rating: 7.5,
//         orders: 154,
//         shipping: "Free Shipping",
//         description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         image: "/src/laptop.png",
//         category: "Mobile and accessories",
//     },
//     {
//         id: 9,
//         name: "GoPro HERO6 4K Action Camera - Black",
//         price: "$998.00",
//         originalPrice: "$14528.00",
//         rating: 7.5,
//         orders: 154,
//         shipping: "Free Shipping",
//         description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         image: "/src/camera.png",
//         category: "Electronics",
//     },
//     {
//         id: 10,
//         name: "GoPro HERO6 4K Action Camera - Black",
//         price: "$998.00",
//         originalPrice: "$14528.00",
//         rating: 7.5,
//         orders: 154,
//         shipping: "Free Shipping",
//         description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         image: "/src/watch.png",
//         category: "Mobile and accessories",
//     },
//     // Add more products here...
// ];
// const categories = { 
//     'Electronics' : ['electronics', 'electronic', 'electro','electric'], 
//     'Mobile and accessories' : ['mobile', 'accessories', 'mobile accessories', 'mob'],
//      'books' : ['books', 'book']
//     }

// const Sidebar = () => {
//     return (
//         <div className="w-1/4 p-4 bg-gray-100 rounded-lg">
//             <h2 className="font-bold text-lg mb-4">Category</h2>
//             <ul className="space-y-2">
//                 <li><input type="checkbox" /> Mobile Accessory</li>
//                 <li><input type="checkbox" /> Electronics</li>
//                 <li><input type="checkbox" /> Smartphones</li>
//             </ul>

//             <h2 className="font-bold text-lg mt-6 mb-4">Brands</h2>
//             <ul className="space-y-2">
//                 <li><input type="checkbox" /> Samsung</li>
//                 <li><input type="checkbox" /> Apple</li>
//                 <li><input type="checkbox" /> Huawei</li>
//             </ul>

//             <h2 className="font-bold text-lg mt-6 mb-4">Features</h2>
//             <ul className="space-y-2">
//                 <li><input type="checkbox" /> Metallic</li>
//                 <li><input type="checkbox" /> Plastic Cover</li>
//                 <li><input type="checkbox" /> 8GB RAM</li>
//             </ul>
//         </div>
//     );
// };

// const Header = ({ isGridView, toggleView }) => {
//     const { category } = useParams();
//     return (
//         <div className="flex justify-between items-center mb-4">
//             <h1 className="text-xl font-bold">12,911 items in {category}</h1>
//             <button
//                 onClick={toggleView}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                 >
//                 {isGridView ? "Switch to List View" : "Switch to Grid View"}
//             </button>
//         </div>
//     );
// };

// const ProductList = () => {
//     const [isGridView, setIsGridView] = useState(false);
//      const [products, setProducts] = useState([]);
//     const { category } = useParams();

//     useEffect(() => {
//         // const lowercaseCategory = category.toLowerCase();
//         const fetchProducts = () => { 
//             const matchedCategory = Object.keys(categories).find(cat => categories[cat].some(c => category.toLowerCase().includes(c)));
//             const filteredProducts = productlist.filter(product => product.category === matchedCategory);
//              setProducts(filteredProducts); };
//               fetchProducts(); },
//                [category]);

//     const toggleView = () => {
//         setIsGridView(!isGridView);
//     };

    

//     return (
//         <div className="flex">
//             <Sidebar />
//             <div className="flex-1 p-4">
//                 <Header isGridView={isGridView} toggleView={toggleView} />
//                 <div className={isGridView ? "flex flex-wrap gap-4" : "space-y-4"}>
//                     {products.map((product) => (
//                         <div
//                             key={product.id}
//                             className={isGridView ? "border p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col gap-4" : "border p-4 rounded-lg shadow-md hover:shadow-lg transition flex items-center gap-8"}
//                             style={!isGridView ? ({ width: "920px", height: '230px' }) : ({ width: "295px", height: '405px' })}
//                         >

//                             <img src={product.image} alt={product.name} className="rounded-t-lg object-cover" style={!isGridView ? ({ width: "210px", height: '210px' }) : ({ width: "230px", height: '230px',marginInline:"auto" })} />

//                             <div className="flex flex-col p-4" >
//                                 <h2 className={isGridView? "text-md font-thin":"text-md font-bold w-full"}>{product.name}</h2>
//                                 <div className="flex gap-4 items-center mt-2">
//                                     <span className="text-lg font-semibold text-blue-500">
//                                         {product.price}
//                                     </span>
//                                     <span className="line-through text-gray-400">
//                                         {product.originalPrice}
//                                     </span>
//                                 </div>
//                                 <div className={isGridView? "hidden":"flex gap-8 items-center text-sm text-gray-500"}>
//                                     <span>⭐ {product.rating}</span>
//                                     <span>{product.orders} orders</span>
//                                     <p className="text-green-500 text-sm">{product.shipping}</p>
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <p className={isGridView? "hidden":"text-sm text-gray-500"}>{product.description}</p>
//                                     <button className="text-blue-500 text-start hover:text-blue-600 hover:underline">View details</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductList;
// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-200 p-4" style={{ width: '200px' }}>
      <h2 className="text-lg font-semibold">Categories</h2>
      <ul className="space-y-2">
        <li><a href="/products/category1" className="text-blue-500 hover:underline">Category 1</a></li>
        <li><a href="/products/category2" className="text-blue-500 hover:underline">Category 2</a></li>
        <li><a href="/products/category3" className="text-blue-500 hover:underline">Category 3</a></li>
        {/* Add more categories as needed */}
      </ul>
    </div>
  );
};

// src/components/Header.jsx

const Header = ({ isGridView, toggleView }) => {
  return (
    <div className="header flex justify-between items-center mb-4">
      <h1 className="text-2xl font-semibold">Product List</h1>
      <button 
        onClick={toggleView} 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
      </button>
    </div>
  );
};




import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';

const ProductList = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const categories = { 
    'Electronics' : ['electronics', 'electronic', 'electro','electric'], 
       'Mobile and accessories' : ['mobile', 'accessories', 'mobile accessories', 'mob'],
       'books' : ['books', 'book']
     }

     useEffect(() => { const fetchProducts = async () => { try { const response = await axios.get('http://localhost:5000/api/products'); const fetchedProducts = response.data;
     const filteredProducts = category ? fetchedProducts.filter(product => product.category.toLowerCase().includes(category.toLowerCase())) : fetchedProducts; setProducts(filteredProducts); } catch (error) { console.error('Error fetching products:', error); } }; fetchProducts(); }, [category]);
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         console.log('Fetched products:', response.data); // Add this log
//         const fetchedProducts = response.data;

//         // Filter products by category if category is defined
//         const filteredProducts = category
//           ? fetchedProducts.filter(product => product.category.toLowerCase() === category.toLowerCase())
//           : fetchedProducts;

//         setProducts(filteredProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [category]);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };
  

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Header isGridView={isGridView} toggleView={toggleView} />
        <div className={isGridView ? "flex flex-wrap gap-4" : "space-y-4"}>
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className={isGridView ? "border p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col gap-4" : "border p-4 rounded-lg shadow-md hover:shadow-lg transition flex items-center gap-8"}
                style={!isGridView ? { width: "920px", height: '230px' } : { width: "295px", height: '405px' }}
              >
                <img src={product.image} alt={product.name} className="rounded-t-lg object-cover" style={!isGridView ? { width: "210px", height: '210px' } : { width: "230px", height: '230px', marginInline: "auto" }} />
                <div className="flex flex-col p-4" >
                  <h2 className={isGridView ? "text-md font-thin" : "text-md font-bold w-full"}>{product.name}</h2>
                  <div className="flex gap-4 items-center mt-2">
                    <span className="text-lg font-semibold text-blue-500">
                      {product.price}
                    </span>
                    <span className="line-through text-gray-400">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className={isGridView ? "hidden" : "flex gap-8 items-center text-sm text-gray-500"}>
                    <span>⭐ {product.rating}</span>
                    <span>{product.orders} orders</span>
                    <p className="text-green-500 text-sm">{product.shipping}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className={isGridView ? "hidden" : "text-sm text-gray-500"}>{product.description}</p>
                    <button className="text-blue-500 text-start hover:text-blue-600 hover:underline">View details</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p> // Add this line to handle empty state
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

