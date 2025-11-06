import React from "react";
import { NavLink } from "react-router";
import { FaHome } from "react-icons/fa";

const AboutNavbar = () => {
  return (
    <div className="flex justify-start  border-b border-b-gray-200 px-24 items-center gap-6  p-4 ">
      {/* Home */}
      <NavLink
        to="/"
        className="flex items-center  gap-2 text-gray-800 hover:text-blue-600 font-medium"
      >
        <FaHome className="text-xl" />
        Home
      </NavLink>

      {/* About Us */}
      <NavLink
        to="/about"
        className="text-gray-800 hover:text-blue-600 font-medium"
      >
        About Us
      </NavLink>

      {/* Contact */}
      <NavLink
        to="/contact"
        className="text-gray-800 hover:text-blue-600 font-medium"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default AboutNavbar;
