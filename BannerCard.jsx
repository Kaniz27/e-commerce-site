import React from 'react';

const BannerCard = () => {
    return (
        <div>
            <div 
  className="w-full h-screen bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url('/path-to-your-background.jpg')` }}
>
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white max-w-lg px-4">
    <h2 className="text-4xl font-bold mb-2">Welcome to Our Website</h2>
    <h3 className="text-xl mb-6">Find the best products for you</h3>

    {/* Search bar + button */}
    <div className="flex justify-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded-l-md w-64 text-black"
      />
      <button className="bg-blue-600 px-4 rounded-r-md hover:bg-blue-700">
        Search
      </button>
    </div>
  </div>
</div>


        </div>
    );
};

export default BannerCard;