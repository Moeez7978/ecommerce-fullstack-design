// import React from "react";
// import { FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";

// const Mobheader = () => {
//   return (
//     <div className="bg-white shadow-md p-4 w-full fixed top-0 z-10">
//       {/* Top Bar */}
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center">
//           <button className="p-2">
//             <FiMenu size={24} />
//           </button>
//           <div className="ml-2 text-xl font-bold text-blue-500">Brand</div>
//         </div>

//         <div className="flex items-center space-x-4">
//           <button className="p-2">
//             <FiShoppingCart size={24} />
//           </button>
//           <button className="p-2">
//             <FiUser size={24} />
//           </button>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search"
//           className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Categories */}
//       <div className="flex space-x-2 overflow-x-auto">
//         <button className="py-2 px-4 bg-gray-200 rounded-full text-blue-600">
//           All category
//         </button>
//         <button className="py-2 px-4 bg-gray-200 rounded-full">Gadgets</button>
//         <button className="py-2 px-4 bg-gray-200 rounded-full">Clothes</button>
//         <button className="py-2 px-4 bg-gray-200 rounded-full">Accessory</button>
//       </div>
//     </div>
//   );
// };


// export default Mobheader;
import React from "react";
import { FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";

const Mobheader = () => {
  return (
    <div className="bg-white shadow-md p-4 w-full  block md:hidden mb-2">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        {/* Menu and Brand */}
        <div className="flex items-center">
          <button className="p-2">
            <FiMenu size={24} />
          </button>
          <div className="ml-2 text-xl font-bold text-blue-500">Brand</div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <FiShoppingCart size={24} />
          </button>
          <button className="p-2">
            <FiUser size={24} />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Categories */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
        <button className="py-2 px-4 bg-gray-200 rounded-full text-blue-600 whitespace-nowrap">
          All category
        </button>
        <button className="py-2 px-4 bg-gray-200 rounded-full whitespace-nowrap">
          Gadgets
        </button>
        <button className="py-2 px-4 bg-gray-200 rounded-full whitespace-nowrap">
          Clothes
        </button>
        <button className="py-2 px-4 bg-gray-200 rounded-full whitespace-nowrap">
          Accessory
        </button>
      </div>
    </div>
  );
};

export default Mobheader;
