import React from "react";
// const updateQuantity = (id, delta) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(1, item.quantity + delta) }
//           : item
//       )
//     );
//   };
const Cart = () => {
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Section: Cart Items */}
            <div className="bg-white rounded-lg shadow-lg flex-1">
              {/* Cart Header */}
              <h2 className="text-xl font-semibold p-4 border-b">Shopping Cart</h2>
  
              {/* Items Section */}
              <div className="p-4 space-y-6">
                {/* Item 1 */}
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="T-shirts"
                    className="w-20 h-20 rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">
                      T-shirts with multiple colors for men
                    </h3>
                    <p className="text-sm text-gray-500">
                      Size: Medium, Color: Blue
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-800 font-medium">$78.99</span>
                      <div className="flex items-center border rounded">
                        <button className="px-2 py-1">-</button>
                        <input
                          type="text"
                          value="2"
                          readOnly
                          className="w-8 text-center border-l border-r"
                        />
                        <button className="px-2 py-1">+</button>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Item 2 */}
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="Backpack"
                    className="w-20 h-20 rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">
                      Solid Backpack blue jeans large size
                    </h3>
                    <p className="text-sm text-gray-500">
                      Size: Medium, Color: Blue
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-800 font-medium">$78.99</span>
                      <div className="flex items-center border rounded">
                        <button className="px-2 py-1">-</button>
                        <input
                          type="text"
                          value="1"
                          readOnly
                          className="w-8 text-center border-l border-r"
                        />
                        <button className="px-2 py-1">+</button>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Item 3 */}
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="Water boiler"
                    className="w-20 h-20 rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">
                      Water boiler black for kitchen, 1200 Watt
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-800 font-medium">$78.99</span>
                      <div className="flex items-center border rounded">
                        <button className="px-2 py-1">-</button>
                        <input
                          type="text"
                          value="2"
                          readOnly
                          className="w-8 text-center border-l border-r"
                        />
                        <button className="px-2 py-1">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Section: Summary and Saved Items */}
            <div className="bg-white rounded-lg shadow-lg w-full lg:w-1/3 flex flex-col gap-6">
              {/* Summary Section */}
              <div className="p-4 border-b">
                <h3 className="font-medium mb-4">Order Summary</h3>
                <div className="flex justify-between mb-2">
                  <span>Items (3):</span>
                  <span>$32.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping:</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Tax:</span>
                  <span>$7.00</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span>$220.00</span>
                </div>
              </div>
  
              {/* Checkout Button */}
              <div className="p-4">
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                  Checkout (3 items)
                </button>
              </div>
  
              {/* Saved for Later */}
              <div className="p-4">
                <h3 className="font-medium mb-4">Saved for later</h3>
                <div className="flex items-center mb-4">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="Headphones"
                    className="w-16 h-16 rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">Regular Fit Resort Shirt</h3>
                    <span>$57.70</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-500">Move to cart</button>
                    <button className="text-red-500">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;
  