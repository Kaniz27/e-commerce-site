import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser,  } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";

const TopHeader = () => {
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    "Fruits & Vegetables",
    "Beverages",
    "Snacks",
    "Dairy Products",
    "Bakery Items",
  ];

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowCategories(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white border-b border-b-gray-200 shadow-sm py-3">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* -------- Left: Logo -------- */}
        
        <div className="flex items-center gap-2">
          <div>
           <img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/logo.svg" alt="" />
          </div>
        </div>

        {/* -------- Middle: Search bar + Category -------- */}
        <div className="relative w-[45%] flex items-center" ref={dropdownRef}>
          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center gap-1 px-4 py-[7px] bg-gray-50 text-sm text-gray-700 hover:bg-gray-100 transition-all rounded-l-md border border-r-0 border-gray-300"
            >
              All Categories ▾
            </button>

            {/* Dropdown Menu */}
            {showCategories && (
              <ul className="absolute left-0 top-full mt-1 bg-white border rounded-md shadow-md w-44 z-50 overflow-hidden">
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setShowCategories(false)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for items..."
            className="w-full px-4 py-[7px] text-sm outline-none border border-gray-300 rounded-r-md"
          />
          <button className="px-4 text-gray-500 hover:text-[#29a56c] transition-all">
            <FaSearch className="text-lg" />
          </button>
        </div>

        {/* -------- Right: Icons -------- */}
        <div className="flex items-center space-x-6 text-gray-700">
          {/* Compare */}
          <div className="relative hover:text-[#29a56c] cursor-pointer flex items-center gap-1 text-sm">
            <span className="relative">
              <IoIosGitCompare className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-[#29a56c] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span>
            </span>
            <span className="text-[18px]">Compare</span>
          </div>

          {/* Wishlist */}
          <div className="relative hover:text-[#29a56c] cursor-pointer flex items-center gap-1 text-[18px]">
            <span className="relative">
              <FaHeart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-[#29a56c] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">6</span>
            </span>
            <span className="text-[18px]">Wishlist</span>
          </div>

          {/* Cart */}
          <div className="relative hover:text-[#29a56c] cursor-pointer flex items-center gap-1 text-sm">
            <span className="relative">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-[#29a56c] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </span>
            <span className="text-[18px]">Cart</span>
          </div>

          {/* Account */}
          <div className="hover:text-[#29a56c] cursor-pointer flex items-center gap-1 text-sm">
            <FaUser className="text-xl" />
            <span className="text-[18px]">Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
