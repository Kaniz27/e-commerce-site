import React from 'react';
import backGround from '../../assets/Vegitable-Crop-banner.jpg'
import { FaTags, FaTruck, FaGift, FaBoxOpen, FaUndo } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Contact2 = () => {
     const features = [
    {
      icon: <FaTags className="text-green-600 text-3xl" />,
      title: "Best prices & offers",
      subtitle: "Orders $50 or more",
    },
    {
      icon: <FaTruck className="text-green-600 text-3xl" />,
      title: "Free delivery",
      subtitle: "24/7 amazing services",
    },
    {
      icon: <FaGift className="text-green-600 text-3xl" />,
      title: "Great daily deal",
      subtitle: "When you sign up",
    },
    {
      icon: <FaBoxOpen className="text-green-600 text-3xl" />,
      title: "Wide assortment",
      subtitle: "Mega Discounts",
    },
    {
      icon: <FaUndo className="text-green-600 text-3xl" />,
      title: "Easy returns",
      subtitle: "Within 30 days",
    },
  ];
    return (
        <div>
            {/* background image */}
       <div
      className="w-full h-[300px] relative bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backGround})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 flex flex-col items-center gap-4">
        <p className="text-xl md:text-2xl font-semibold">Welcome to Nest Grocery</p>
        <p className="text-3xl md:text-5xl font-bold">Fresh Products, Delivered Fast</p>

        {/* Search bar */}
        <div className="mt-6 w-full max-w-md flex items-center bg-white rounded-full overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 p-3 text-gray-700 focus:outline-none"
          />
          <button className="bg-green-600 px-4 py-3 text-white hover:bg-green-700 transition-colors">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
    {/* last card */}
     <div className="w-full bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-start flex-wrap gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex-1 min-w-[200px] bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
        
    );
};

export default Contact2;