import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router"; 
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaExchangeAlt,
  FaCarrot,
  FaDrumstickBite,
  FaHeadset,
} from "react-icons/fa";
import {
  GiMilkCarton,
  GiFruitBowl,
  GiChickenOven,
  GiBread,
} from "react-icons/gi";
import { MdLocalDrink } from "react-icons/md";
import { IoIosShirt } from "react-icons/io";

const categories = [
  { name: "Milks and Dairies", icon: <GiMilkCarton /> },
  { name: "Wines & Drinks", icon: <MdLocalDrink /> },
  { name: "Clothing & Beauty", icon: <IoIosShirt /> },
  { name: "Fresh Seafood", icon: <GiChickenOven /> },
  { name: "Pet Foods & Toy", icon: <FaDrumstickBite /> },
  { name: "Fast food", icon: <FaCarrot /> },
  { name: "Baking material", icon: <GiBread /> },
  { name: "Vegetables", icon: <FaCarrot /> },
  { name: "Fresh Fruit", icon: <GiFruitBowl /> },
  { name: "Bread and Juice", icon: <GiBread /> },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },
  { name: "Vendor", path: "/vendor" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Page", path: "/page" },
];

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
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
    <header className="bg-white border-b border-b-gray-200 shadow-sm py-3 relative z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Categories Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center gap-2 px-4 py-2 bg-[#29a56c] text-white rounded-md hover:bg-green-600 transition-all"
          >
            <span className="text-lg font-medium">Browse Categories</span>
            <span className="text-xl">{showCategories ? "▲" : "▼"}</span>
          </button>

          {showCategories && (
            <div className="absolute left-0 top-full mt-2 bg-white border shadow-lg rounded-md w-[600px] p-4 z-50">
              <div className="grid grid-cols-2 gap-4">
                {categories.map((cat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="text-2xl text-[#29a56c]">{cat.icon}</div>
                    <span className="text-sm font-medium">{cat.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <button className="flex items-center gap-2 text-[#29a56c] hover:underline mx-auto">
                  <span className="text-lg font-bold">+</span> Show more...
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Logo + Navigation */}
        <div className="flex items-center ">
         

          <nav className="hidden md:flex gap-12">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#29a56c] font-semibold"
                    : "text-gray-700 hover:text-[#29a56c] transition-colors"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Contact / Right Icons */}
        <div className="flex items-center gap-4 p-4  rounded-md">
          <FaHeadset className="text-3xl text-green-600" />
          <div className="flex flex-col">
            <p className="text-xl font-bold text-[#29a56c]">1900 - 888</p>
            <p className="text-xs text-gray-500">24/7 Support Center</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;