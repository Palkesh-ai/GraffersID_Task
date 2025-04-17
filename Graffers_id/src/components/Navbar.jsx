import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 px-4 flex">
      <div className="container w-full  px-4 py-3 flex items-center justify-between "> 
        <div className="flex items-center">
          <div className="bg-purple-600 text-white p-2 rounded-full mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold flex">
            Review<span className="text-purple-600 font-bold">&</span><span className=' font-bold'>RATE</span>
          </h1>
        </div>
        
        <div className="flex items-center">
          <div className="relative mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          <button className="text-gray-600 hover:text-gray-800 mr-4">SignUp</button>
          <button className="text-gray-600 hover:text-gray-800">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;