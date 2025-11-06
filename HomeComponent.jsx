import React from "react";

const Home = () => {
  return (
    <div className="pb-5 m-10 rounded-md">
      <div
      className="h-[80vh] bg-cover rounded-xl  bg-center flex items-center px-6 md:px-20"
      style={{
        backgroundImage:
          "url('https://assets.hub.com.sa/images/Banner/c4fef91b-0538-4fea-b5d5-51dff0579157.png')",
      }}
    >
      {/* Overlay (optional, for better text visibility) */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl text-left text-black">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-600 mb-4">
         Fresh Vegetables <br /> Big Dicounts 
        </h2>
        <p className="text-lg text-gray-500  mb-6">
         Save up to 50% off on your first order
        </p>

        {/* Search bar + button */}
        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-lg max-w-md">
          <input
            type="text"
            placeholder="Search here..."
            className="flex-1 px-3 py-2 rounded-full focus:outline-none text-gray-700"
          />
          <button className="bg-[#29a56c] hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full transition-all duration-200">
            Search
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
