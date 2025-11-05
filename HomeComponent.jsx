import React from "react";

const Home = () => {
  return (
    <div className="pb-20">
      <div
      className="h-[80vh] bg-cover  bg-center flex items-center px-6 md:px-20"
      style={{
        backgroundImage:
          "url('https://assets.hub.com.sa/images/Banner/c4fef91b-0538-4fea-b5d5-51dff0579157.png')",
      }}
    >
      {/* Overlay (optional, for better text visibility) */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl text-left text-black">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Hub
        </h2>
        <p className="text-lg text-gray-500 mb-6">
          Discover amazing deals and explore high-quality products that suit your lifestyle.
        </p>

        {/* Search bar + button */}
        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-lg max-w-md">
          <input
            type="text"
            placeholder="Search here..."
            className="flex-1 px-3 py-2 rounded-full focus:outline-none text-gray-700"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full transition-all duration-200">
            Search
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
