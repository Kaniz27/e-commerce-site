import React from "react";
import { NavLink } from "react-router"; 
import { FaHome } from "react-icons/fa";
import FeaturedCategories from "./FeaturedCategories";
import PopularCard from "./popularCard";
import DealsOfTheDay from "./DealsOfTheDay";
import Contact2 from "../Components/Contact/Contact2";

const ShopHero = () => {
  const categories = ["Cabbage", "Broccoli", "Artichoke", "Celery", "Spinach"];

  return (
    <div>
      <div
        className="h-[80vh] w-full bg-cover bg-center bg-no-repeat rounded-2xl relative flex items-center px-6  md:px-20 overflow-hidden m-5"
        style={{
          backgroundImage: `url('https://assets.hub.com.sa/images/Banner/c4fef91b-0538-4fea-b5d5-51dff0579157.png')`,
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content */}
        <div className="relative flex w-full justify-between items-center flex-wrap">
          {/* Left Div */}
          <div className="flex flex-col text-black mb-4 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Snacks</h1>
            <div className="flex items-center gap-4 flex-wrap text-sm md:text-base">
              <NavLink
                to="/"
                className="flex items-center text-green-700 hover:text-yellow-400 transition"
              >
                <FaHome className="mr-1" /> Home
              </NavLink>
              <NavLink to="/shop" className="hover:text-yellow-400 transition">
                Shop
              </NavLink>
              <NavLink to="/snack" className="hover:text-yellow-400 transition">
                Snack
              </NavLink>
            </div>
          </div>

          {/* Right Div */}
          <div className="flex flex-wrap gap-2 justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                className="text-green-700 bg-white px-3 py-2 rounded-md text-xs md:text-sm hover:bg-green-500 hover:text-white transition"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      <PopularCard></PopularCard>
      <DealsOfTheDay></DealsOfTheDay>
      <Contact2></Contact2>

    </div>
   
  );
};

export default ShopHero;
