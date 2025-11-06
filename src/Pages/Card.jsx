import React from "react";

const Card = () => {
  return (
    <div className="flex gap-4 pb-10 container mx-auto  justify-between">
      <div
        className="w-full  max-w-md h-64 py-16 rounded-xl  relative"
        style={{
          backgroundImage:
            "url('https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute gap-6 flex flex-col justify-center items-start p-6">
          <p className="text-gray-700  text-2xl font-semibold ">
           Everyday Fresh & <br />
Clean with Our 
          </p>
          <button className="bg-[#29a56c] hover:bg-orange-600 text-white px-5 py-1 rounded-md font-semibold transition-all duration-200  ">
            Shop Now
          </button>
        </div>
      </div>
      {/* 222 */}
      <div
        className="w-full  max-w-md h-64 py-16 rounded-xl  relative"
        style={{
          backgroundImage:
            "url('https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute gap-6 flex flex-col justify-center items-start p-6">
          <p className="text-gray-700 text-2xl font-semibold ">
            Make your Breakfast <br /> Healthy and Easy
          </p>
          <button className="bg-[#29a56c] hover:bg-orange-600 text-white px-5 py-1 rounded-md font-semibold transition-all duration-200 ">
            Shop Now
          </button>
        </div>
      </div>
      {/* 333 */}
      <div
        className="w-full  max-w-md h-64 py-16 rounded-xl  relative"
        style={{
          backgroundImage:
            "url('https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute gap-6 flex flex-col justify-center items-start p-6">
          <p className="text-gray-700 text-2xl font-semibold ">
            The best Organic <br /> Products Online
          </p>
          <button className="bg-[#29a56c] hover:bg-orange-600 text-white px-5 py-1 rounded-md font-semibold transition-all duration-200 ">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
