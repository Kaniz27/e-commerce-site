import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const BottomFooter = () => {
  return (
    <div className="w-full bg-gray-100 py-6 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-start flex-wrap gap-6">
        {/* Copyright */}
        <div className="text-gray-700">
          <p>© 2024, Nest - HTML Ecommerce Template</p>
          <p>All rights reserved</p>
        </div>

        {/* Hotline */}
        <div className="text-gray-700">
          <div className="mb-2">
            <strong>Hotline:</strong> 1900 - 6666<br />
            <span>Working 8:00 - 22:00</span>
          </div>
          <div>
            <strong>Hotline:</strong> 1900 - 8888<br />
            <span>24/7 Support Center</span>
          </div>
        </div>

        {/* Follow & Subscribe */}
        <div className="text-gray-700">
          <p className="mb-2">Follow Us</p>
          <div className="flex gap-3 mb-3">
            <FaFacebookF className="text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
            <FaTwitter className="text-blue-400 cursor-pointer hover:scale-110 transition-transform" />
            <FaInstagram className="text-pink-500 cursor-pointer hover:scale-110 transition-transform" />
            <FaLinkedinIn className="text-blue-700 cursor-pointer hover:scale-110 transition-transform" />
          </div>
          <p>Up to 15% discount on your first subscribe</p>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
