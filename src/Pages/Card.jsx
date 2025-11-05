import React from "react";

const Card = () => {
  return (
   <div className="flex gap-4 py-20npm run dev">
     <div
      className="w-full max-w-md h-64 py-16 rounded-xl  relative"
      style={{
        backgroundImage:
          "url('https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute  flex flex-col justify-center items-start p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
          Delicious Cake
        </h1>
        <p className="text-gray-500 mb-4">
          Try our freshly baked chocolate cake and enjoy the perfect taste.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-200">
          Order Now
        </button>
      </div>
    </div>
 {/* 222 */}
  <div
      className="w-full max-w-md h-64 py-16 rounded-xl  relative"
      style={{
        backgroundImage:
          "url('https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute  flex flex-col justify-center items-start p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
          Delicious Cake
        </h1>
        <p className="text-gray-500 mb-4">
          Try our freshly baked chocolate cake and enjoy the perfect taste.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-200">
          Order Now
        </button>
      </div>
    </div>
    {/* 333 */}
    <div
      className="w-full max-w-md h-64 py-16 rounded-xl  relative"
      style={{
        backgroundImage:
          "url('https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute  flex flex-col justify-center items-start p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
          Delicious Cake
        </h1>
        <p className="text-gray-500 mb-4">
          Try our freshly baked chocolate cake and enjoy the perfect taste.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-200">
          Order Now
        </button>
      </div>
    </div>
   </div>
   
    
  );
};

export default Card;
