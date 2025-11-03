import React from "react";
import { Link } from "react-router";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInfoCircle,
  FaShippingFast,
  FaUser,
  FaCartArrowDown,
  FaHeart,
  FaTruck,
  FaIndustry,
  FaHandsHelping,
  FaStore,
  FaAccessibleIcon,
  FaGift,
  FaGlassWhiskey,
  FaCheese,
  FaLeaf,
  FaEgg,
  FaCookie,
  FaMugHot,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

        {/* 1: About / Contact */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">Awesome Grocery Store</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> 5171 W Campbell Ave, Kent, Utah 53127</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> (+91) - 540-025-124553</li>
            <li className="flex items-center gap-2"><FaEnvelope /> <Link to="mailto:sale@Nest.com" className="hover:text-green-600">sale@Nest.com</Link></li>
            <li className="flex items-center gap-2"><FaClock /> 10:00 - 18:00, Mon - Sat</li>
          </ul>
        </div>

        {/* 2: Company */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="flex items-center gap-2 hover:text-green-600"><FaInfoCircle /> About Us</Link></li>
            <li><Link to="/delivery" className="flex items-center gap-2 hover:text-green-600"><FaShippingFast /> Delivery Information</Link></li>
            <li><Link to="/privacy" className="flex items-center gap-2 hover:text-green-600"><FaInfoCircle /> Privacy Policy</Link></li>
            <li><Link to="/terms" className="flex items-center gap-2 hover:text-green-600"><FaInfoCircle /> Terms & Conditions</Link></li>
            <li><Link to="/contact" className="flex items-center gap-2 hover:text-green-600"><FaEnvelope /> Contact Us</Link></li>
            <li><Link to="/support" className="flex items-center gap-2 hover:text-green-600"><FaHandsHelping /> Support Center</Link></li>
            <li><Link to="/careers" className="flex items-center gap-2 hover:text-green-600"><FaStore /> Careers</Link></li>
          </ul>
        </div>

        {/* 3: Account */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/signin" className="flex items-center gap-2 hover:text-green-600"><FaUser /> Sign In</Link></li>
            <li><Link to="/cart" className="flex items-center gap-2 hover:text-green-600"><FaCartArrowDown /> View Cart</Link></li>
            <li><Link to="/wishlist" className="flex items-center gap-2 hover:text-green-600"><FaHeart /> My Wishlist</Link></li>
            <li><Link to="/track-order" className="flex items-center gap-2 hover:text-green-600"><FaTruck /> Track My Order</Link></li>
            <li><Link to="/help-ticket" className="flex items-center gap-2 hover:text-green-600"><FaHandsHelping /> Help Ticket</Link></li>
            <li><Link to="/shipping" className="flex items-center gap-2 hover:text-green-600"><FaShippingFast /> Shipping Details</Link></li>
            <li><Link to="/compare" className="flex items-center gap-2 hover:text-green-600"><FaIndustry /> Compare Products</Link></li>
          </ul>
        </div>

        {/* 4: Corporate */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">Corporate</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/vendor" className="flex items-center gap-2 hover:text-green-600"><FaStore /> Become a Vendor</Link></li>
            <li><Link to="/affiliate" className="flex items-center gap-2 hover:text-green-600"><FaGift /> Affiliate Program</Link></li>
            <li><Link to="/farm-business" className="flex items-center gap-2 hover:text-green-600"><FaIndustry /> Farm Business</Link></li>
            <li><Link to="/farm-careers" className="flex items-center gap-2 hover:text-green-600"><FaStore /> Farm Careers</Link></li>
            <li><Link to="/suppliers" className="flex items-center gap-2 hover:text-green-600"><FaHandsHelping /> Our Suppliers</Link></li>
            <li><Link to="/accessibility" className="flex items-center gap-2 hover:text-green-600"><FaAccessibleIcon /> Accessibility</Link></li>
            <li><Link to="/promotions" className="flex items-center gap-2 hover:text-green-600"><FaGift /> Promotions</Link></li>
          </ul>
        </div>

        {/* 5: Popular Products */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">Popular Products</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/milk" className="flex items-center gap-2 hover:text-green-600"><FaGlassWhiskey /> Milk & Flavoured Milk</Link></li>
            <li><Link to="/butter" className="flex items-center gap-2 hover:text-green-600"><FaLeaf /> Butter and Margarine</Link></li>
            <li><Link to="/eggs" className="flex items-center gap-2 hover:text-green-600"><FaEgg /> Eggs Substitutes</Link></li>
            <li><Link to="/marmalades" className="flex items-center gap-2 hover:text-green-600"><FaCookie /> Marmalades</Link></li>
            <li><Link to="/sour-cream" className="flex items-center gap-2 hover:text-green-600"><FaMugHot /> Sour Cream and Dips</Link></li>
            <li><Link to="/tea" className="flex items-center gap-2 hover:text-green-600"><FaMugHot /> Tea & Kombucha</Link></li>
            <li><Link to="/cheese" className="flex items-center gap-2 hover:text-green-600"><FaCheese /> Cheese</Link></li>
          </ul>
        </div>

      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Awesome Grocery Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
