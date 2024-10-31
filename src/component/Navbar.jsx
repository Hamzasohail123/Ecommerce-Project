import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Navbar() {

  const items = useSelector((state)=>state.cart)

  return (
    <div className="flex flex-row justify-between items-center p-5 bg-gray-900 text-white shadow-md">
      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold">Redux Store</h1>
      </div>

      {/* Center Side */}
      <div className="flex flex-1 justify-center mx-4">
        <input
          type="text"
          placeholder="Search product..."
          className="border border-gray-400 rounded-lg p-2 w-64 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <Link to='/'><p className="text-lg hover:text-blue-400 transition duration-200">Home</p></Link> 
        <Link  to="/cart"><BsCart2 className="text-lg cursor-pointer hover:text-blue-400 transition duration-200" /></Link>
        
        <p className="text-lg">Items: {items.length}</p>
      </div>
    </div>
  );
}

export default Navbar;
